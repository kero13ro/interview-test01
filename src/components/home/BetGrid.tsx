/* eslint-disable react-hooks/exhaustive-deps */
import clsx from 'clsx'
import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { Fragment } from 'react/jsx-runtime'
import { betIdToNumbers } from 'src/service/bet'
import { useBettingStore } from 'src/stores/useBettingStore'
import { useCart } from 'src/stores/useCart'
import { BetState } from 'src/types/betstate'
import { isMobileDevice } from 'src/utils/common'

const Lattice = memo(
  ({ pos, id, className, hoverList }: { pos: number[]; id: string; className?: string; hoverList: string[] }) => {
    const [colStart, colEnd, rowStart, rowEnd] = pos

    return (
      <span
        id={`bn_${id}`}
        className={clsx(hoverList.includes(id) && 'hovered', 'center', className)}
        style={{
          gridArea: `${rowStart} / ${colStart} / ${rowEnd} / ${colEnd}`,
        }}
      ></span>
    )
  }
)

const toParamsBase = (
  colStart: number,
  colEnd: number,
  rowStart: number,
  rowEnd: number,
  id: string,
  hoverList: string[]
) => ({
  pos: [colStart, colEnd, rowStart, rowEnd],
  id,
  hoverList,
})

export default function BetGrid() {
  const [hoverList, setHoverList] = useState<string[]>([])

  const toParams = useCallback(toParamsBase, [hoverList])

  const { enterBet, enterWheelSpin, enterSettlement, addChip } = useCart()
  const gameState = useBettingStore((state) => state.gameState)

  useEffect(() => {
    if (gameState === BetState.Bet) enterBet()
    if (gameState === BetState.WheelSpin) enterWheelSpin()
    if (gameState === BetState.Settlement) enterSettlement()
  }, [gameState])

  const devMode = false

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMobileDevice) setHoverList([])
    const target = e.target as HTMLSpanElement
    const boardId = target.id
    const id = target.id.slice(3)

    if (!boardId) return

    if (gameState !== BetState.Bet) {
      // alert('Please wait for the next round')
      return
    }

    addChip(id)
  }

  const lastHoverId = useRef('')
  const onHover = (e: React.MouseEvent<HTMLDivElement>) => {
    if (gameState !== BetState.Bet) return
    if (isMobileDevice) return
    const target = e.target as HTMLSpanElement
    const boardId = target.id
    if (!boardId) return
    if (lastHoverId.current === boardId.slice(3)) return // prevent hover event from firing multiple times
    lastHoverId.current = boardId.slice(3)

    setHoverList(
      betIdToNumbers(boardId.slice(3))
        .map((v) => String(v))
        .concat(boardId.slice(3))
    )
  }

  const onMouseLeave = () => {
    if (isMobileDevice) return
    setHoverList([])
    lastHoverId.current = ''
  }

  return (
    <div id="BetGrid" className={clsx({ devMode })}>
      {devMode && (
        <div className="wrap referLine">
          {Array.from({ length: 13 * 40 }, (_, i) => (
            <div key={i}></div>
          ))}
        </div>
      )}

      <div className="wrap" onMouseMoveCapture={onHover} onMouseLeave={onMouseLeave} onClick={onClick}>
        {/* Straight Up */}
        {/* Outside Bets */}
        <div className="visibleBoard contents">
          <Lattice {...toParams(1, 3, 3, 9, '1-18', hoverList)} className="topLeft" />
          <Lattice {...toParams(1, 3, 9, 15, 'even', hoverList)} />
          <Lattice {...toParams(1, 3, 15, 21, 'red', hoverList)} />
          <Lattice {...toParams(1, 3, 21, 27, 'black', hoverList)} />
          <Lattice {...toParams(1, 3, 27, 33, 'odd', hoverList)} />
          <Lattice {...toParams(1, 3, 33, 39, '19-36', hoverList)} className="bottomLeft" />
          <Lattice {...toParams(3, -3, 1, 3, '0', hoverList)} className="topLeft topRight" />
          {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
            <Fragment key={num}>
              <Lattice {...toParams(3, 6, num * 3, num * 3 + 3, String(num * 3 - 2), hoverList)} />
              <Lattice {...toParams(6, 9, num * 3, num * 3 + 3, String(num * 3 - 1), hoverList)} />
              <Lattice {...toParams(9, 12, num * 3, num * 3 + 3, String(num * 3), hoverList)} />
            </Fragment>
          ))}
          <Lattice {...toParams(-1, -3, 3, 15, '1-12', hoverList)} className="topRight" />
          <Lattice {...toParams(-1, -3, 15, 27, '13-24', hoverList)} />
          <Lattice {...toParams(-1, -3, 27, 39, '25-36', hoverList)} className="bottomRight" />
          <Lattice {...toParams(3, 6, -3, -1, 'interval_1', hoverList)} className="bottomLeft" />
          <Lattice {...toParams(6, 9, -3, -1, 'interval_2', hoverList)} />
          <Lattice {...toParams(9, 12, -3, -1, 'interval_3', hoverList)} className="bottomRight" />
        </div>

        <div className="invisibleBoard contents">
          {/* Zero Exceptions */}
          <Lattice {...toParams(2, 4, 2, 4, '0,1,2,3', hoverList)} />
          <Lattice {...toParams(4, 5, 2, 4, '0,1', hoverList)} />
          <Lattice {...toParams(5, 7, 2, 4, '0,1,2', hoverList)} />
          <Lattice {...toParams(7, 8, 2, 4, '0,2', hoverList)} />
          <Lattice {...toParams(8, 10, 2, 4, '0,2,3', hoverList)} />
          <Lattice {...toParams(10, 11, 2, 4, '0,3', hoverList)} />

          {/* six line */}
          {Array.from({ length: 12 }, (_, i) => i * 3).map((num) => (
            <Lattice key={num} {...toParams(2, 4, num + 5, num + 7, `${num + 1}-${num + 6}`, hoverList)} />
          ))}

          {/* street */}
          {/* split by 12 */}
          {Array.from({ length: 12 }, (_, i) => i * 3 + 4).map((num) => (
            <Fragment key={num}>
              <Lattice {...toParams(2, 4, num, num + 1, `${num - 3}-${num - 1}`, hoverList)} />
              <Lattice {...toParams(5, 7, num, num + 1, `${num - 3},${num - 2}`, hoverList)} />
              <Lattice {...toParams(8, 10, num, num + 1, `${num - 2},${num - 1}`, hoverList)} />
            </Fragment>
          ))}

          {/* corner */}
          {/* split by 11 */}
          {Array.from({ length: 11 }, (_, i) => i * 3 + 5).map((num) => (
            <Fragment key={num}>
              <Lattice {...toParams(5, 7, num, num + 2, `${num - 4},${num - 3},${num - 1},${num}`, hoverList)} />
              <Lattice {...toParams(8, 10, num, num + 2, `${num - 3},${num - 2},${num},${num + 1}`, hoverList)} />
              <Lattice {...toParams(4, 5, num, num + 2, `${num - 4},${num - 1}`, hoverList)} />
              <Lattice {...toParams(7, 8, num, num + 2, `${num - 3},${num}`, hoverList)} />
              <Lattice {...toParams(10, 11, num, num + 2, `${num - 2},${num + 1}`, hoverList)} />
              <Lattice {...toParams(10, 11, num, num + 2, `${num - 2},${num + 1}`, hoverList)} />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

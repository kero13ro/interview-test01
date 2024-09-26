import clsx from 'clsx'
import { motion, useAnimate } from 'framer-motion'
import { memo, useEffect } from 'react'

import { convertLabel, getChipType } from 'src/service/bet'

interface ChipProps {
  style?: React.CSSProperties
  className?: string

  value: number
  isSlope?: boolean
  isFlat?: boolean
}

const BoardChip = ({ value, isSlope = false, isFlat = false, style }: ChipProps) => {
  const ChipComponent = getChipType(value)

  const [scope, animate] = useAnimate()
  useEffect(() => {
    animate(scope.current, { scale: [1, 1.2, 1] }, { duration: 0.3 })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  const numValue = convertLabel(value)
  const isLg = numValue.length >= 3
  const isXl = numValue.length >= 5

  return (
    <motion.button ref={scope} className={clsx('boardChip', 'center', { isLg, isXl })} style={style}>
      {!isFlat &&
        [3, 2, 1].map((val) => (
          <img
            src={ChipComponent}
            key={val}
            className="svgChip absolute h-full w-full"
            style={{ transform: `translate(0, ${isSlope ? val : 0}px)` }}
          />
        ))}
      <img src={ChipComponent} className="svgChip relative" />

      <div className="stroke">{numValue}</div>
      <div className="text">{numValue}</div>
    </motion.button>
  )
}

export default memo(BoardChip)

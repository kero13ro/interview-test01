import { createPortal } from 'react-dom'
import { useBettingStore } from 'src/stores/useBettingStore'
import { useCart } from 'src/stores/useCart'
import BoardChip from '../common/BoardChip'

export default function PlacedChips() {
  const placedChipList = useCart((state) => state.placedChipList)
  const isSlope = useBettingStore((state) => !state.getGameState().isBet)

  return (
    <div>
      {placedChipList.map((ele) => {
        const parent = document.getElementById(`bn_${ele.id}`)
        if (!parent) return null

        return createPortal(
          <BoardChip
            key={`bn_${ele.id}`}
            value={ele.value}
            isSlope={isSlope}
            style={{
              zIndex: ele?.zIndex,
            }}
          />,
          parent
        )
      })}
    </div>
  )
}

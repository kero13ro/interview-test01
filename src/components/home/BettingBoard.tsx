import clsx from 'clsx'
import { useBettingStore } from 'src/stores/useBettingStore'
import BetGrid from './BetGrid'
import PlacedChips from './PlacedChips'
import SvgBoardThick from './SvgBoardThick'

const BettingBoard = () => {
  const isSlope = useBettingStore((state) => !state.getGameState().isBet)

  return (
    <div id="BettingBoard">
      <div className={clsx('rotateBoard', { isSlope })}>
        <BetGrid />
        <PlacedChips />

        <img src="bettingGrid.svg" className="h-full w-full" />
        <div className="thickWrap">
          <SvgBoardThick className={clsx('SvgBoardThick', { isSlope })} />
        </div>
      </div>
    </div>
  )
}
export default BettingBoard

import { BetState } from 'src/types/betstate'
import { IS_CLOSE_PIXI } from 'src/utils/common'
import { create } from 'zustand'

export interface IBettingStore {
  stateStart: number
  stateEnd: number
  gameState: BetState

  getGameState: () => {
    gameState: BetState
    isBet: boolean
    isWheelSpin: boolean
    isSettlement: boolean
  }
}

export const useBettingStore = create<IBettingStore>((set, get) => ({
  stateStart: 0,
  stateEnd: 0,
  gameState: IS_CLOSE_PIXI ? BetState.Bet : BetState.Unknown,
  getGameState: () => {
    const gameState = get().gameState
    return {
      gameState,
      isBet: gameState === BetState.Bet,
      isWheelSpin: gameState === BetState.WheelSpin,
      isSettlement: gameState === BetState.Settlement,
    }
  },
}))

import { create } from 'zustand'

type placedChipList = { id: string; value: number; zIndex: number }[]

let placedChipListCache: placedChipList = [] // Repeat last placed chip
let chipCount = 0

export interface ICartStore {
  balance: number
  totalBet: number

  placedChipList: placedChipList
  addChip: (id: string) => void

  selectedChipVal: number

  handleDouble: () => void
  handleRepeat: () => void
  enterBet: () => void
  enterWheelSpin: () => void
  enterSettlement: () => void
}

export const useCart = create<ICartStore>((set, get) => ({
  balance: 10000,
  totalBet: 0,

  selectedChipVal: 10,
  placedChipList: [],
  addChip: (id: string) =>
    set((state) => {
      const { balance, placedChipList, totalBet, selectedChipVal } = state
      const newTotalBet = totalBet + selectedChipVal
      chipCount = chipCount + 1

      if (balance - newTotalBet < 0) {
        // alert('Not enough balance')
        return {}
      }

      const exist = placedChipList.find((ele) => ele.id === id)
      const newPlacedChipList = exist
        ? placedChipList.map((chip) =>
            chip.id === id ? { id: chip.id, value: chip.value + selectedChipVal, zIndex: chipCount } : chip
          )
        : [...placedChipList, { id, value: selectedChipVal, zIndex: chipCount }]

      return {
        totalBet: newTotalBet,
        placedChipList: newPlacedChipList,
      }
    }),

  handleDouble: () => {
    const { balance, totalBet, placedChipList } = get()
    const sum = placedChipList.reduce((a, b) => a + b.value, 0)

    const newTotalBet = totalBet + sum
    if (balance - newTotalBet < 0) {
      // alert('Not enough balance')
      return
    }

    set({
      totalBet: newTotalBet,
      placedChipList: placedChipList.map((chip) => ({ ...chip, value: chip.value * 2 })),
    })
  },
  handleRepeat: () => {
    const { balance, totalBet } = get()
    const sum = Object.values(placedChipListCache).reduce((a, b) => a + b.value, 0)
    const newTotalBet = totalBet + sum
    if (balance - newTotalBet < 0) {
      // alert('Not enough balance')
      return
    }

    set({
      placedChipList: placedChipListCache,
    })
  },

  enterBet: () => {
    const placedChipList = get().placedChipList
    if (placedChipList.length === 0) return

    placedChipListCache = placedChipList
    chipCount = 0
    set({
      totalBet: 0,
      placedChipList: [],
    })
  },
  enterWheelSpin: () => set((state) => ({ balance: state.balance - state.totalBet })),
  enterSettlement: () => {
    // console.log('enterSettlement')
  },
}))

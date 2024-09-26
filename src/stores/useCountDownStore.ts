import { create } from 'zustand'

type CountDownType = {
  digit: number
  setDigit: (val: number) => void

  isLastFive: boolean
  setIsLastFive: (val: boolean) => void

  isRun: boolean
  setIsRun: (val: boolean) => void

  background: number
  setBackground: (val: number) => void

  percent: number
  setPercent: (val: number) => void
}

export const useCountDownStore = create<CountDownType>()((set) => ({
  digit: 1,
  setDigit: (val: number) => {
    set({ digit: val })
  },

  isLastFive: false,
  setIsLastFive: (val: boolean) => {
    set({ isLastFive: val })
  },

  isRun: false,
  setIsRun: (val: boolean) => {
    set({ isRun: val })
  },

  background: 1,
  setBackground: (val: number) => {
    set({ background: val })
  },

  percent: 1,
  setPercent: (val: number) => {
    set({ percent: val })
  },
}))

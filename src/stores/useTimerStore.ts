import { create } from 'zustand'

export interface ITimerStore {
  current: number
  date: string
  refresh: (val: number) => void
}

export const useTimerStore = create<ITimerStore>((set) => ({
  current: 0,
  date: '',
  refresh: (val: number) => {
    set({
      current: val,
      date: new Date(val).toLocaleString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }),
    })
  },
}))

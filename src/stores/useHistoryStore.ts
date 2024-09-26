import { create } from 'zustand'

export interface IHistory {
  date: number
  type: string
  totalBet: number
  result: number
  gameNo: string
  winNumber: number
  isCancel: boolean
}

export type TypeGroup = {
  key: string
  list: IHistory[]
}

export type DateGroup = {
  key: string
  table: Map<string, TypeGroup>
}

export type MonthGroup = {
  key: string
  table: Map<string, DateGroup>
}

type HistoryType = {
  table: Map<string, MonthGroup>
  monthFilter: string
  dateFilter: string
  typeFilter: string
  listIdx: number

  add: (val: IHistory[]) => void
  next: () => void
  prev: () => void
}

const getGameGroup = (date: DateGroup, history: IHistory) => {
  const key = history.type
  let table = date.table.get(key)
  if (!table) {
    table = { list: [], key: key }
    date.table.set(key, table)
  }
  return table
}

const getDateGroup = (month: MonthGroup, history: IHistory) => {
  const key = new Date(history.date).toLocaleDateString('en-gb', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
  let table = month.table.get(key)
  if (!table) {
    table = { table: new Map<string, TypeGroup>(), key: key }
    month.table.set(key, table)
  }
  return table
}

const getMonthGroup = (state: HistoryType, history: IHistory) => {
  const key = new Date(history.date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  })
  let table = state.table.get(key)
  if (!table) {
    table = { table: new Map<string, DateGroup>(), key: key }
    state.table.set(key, table)
  }
  return table
}

export const useHistoryStore = create<HistoryType>((set) => ({
  table: new Map<string, MonthGroup>(),
  monthFilter: '',
  dateFilter: '',
  typeFilter: '',
  listIdx: 0,

  add: (val: IHistory[]) => {
    set((state) => {
      val.forEach((history) => {
        const monthGroup = getMonthGroup(state, history)
        const dateGroup = getDateGroup(monthGroup, history)
        const gameGroup = getGameGroup(dateGroup, history)
        gameGroup.list.push(history)
      })
      return state
    })
  },

  next: () => {
    set((state) => {
      const list = state.table.get(state.monthFilter)?.table.get(state.dateFilter)?.table.get(state.typeFilter)?.list
      const total = list ? list.length : 0
      const result = 0 < total ? (state.listIdx = (state.listIdx + 1) % total) : 0
      return {
        listIdx: result,
      }
    })
  },

  prev: () => {
    set((state) => {
      const list = state.table.get(state.monthFilter)?.table.get(state.dateFilter)?.table.get(state.typeFilter)?.list
      const total = list ? list.length : 0
      const result = 0 < total ? (state.listIdx = (total + state.listIdx - 1) % total) : 0
      return {
        listIdx: result,
      }
    })
  },
}))

useHistoryStore.getState().add([
  {
    date: 1726263330000,
    type: 'Live Roulette',
    totalBet: 50,
    result: 100,
    gameNo: '#11:18:20',
    winNumber: 27,
    isCancel: false,
  },
  {
    date: 1726262130000,
    type: 'Live Roulette',
    totalBet: 10,
    result: -10,
    gameNo: '#11:17:34',
    winNumber: 15,
    isCancel: false,
  },
  {
    date: 1726261830000,
    type: 'Live Roulette',
    totalBet: 100,
    result: -30,
    gameNo: '#09:22:56',
    winNumber: 0,
    isCancel: false,
  },
  {
    date: 1726261330000,
    type: 'Sugar Bonanza',
    totalBet: 20,
    result: -20,
    gameNo: '#13:08:19',
    winNumber: 16,
    isCancel: false,
  },
  {
    date: 1726260330000,
    type: 'Live Roulette',
    totalBet: 1000,
    result: 0,
    gameNo: '#18:34:02',
    winNumber: 0,
    isCancel: true,
  },
  {
    date: 1725327105000,
    type: 'Live Roulette',
    totalBet: 40,
    result: 80,
    gameNo: '#16:09:23',
    winNumber: 0,
    isCancel: false,
  },
  {
    date: 1725325200000,
    type: 'Sugar Bonanza',
    totalBet: 5,
    result: 30,
    gameNo: '#05:21:44',
    winNumber: 3,
    isCancel: false,
  },
  {
    date: 1725152400000,
    type: 'Live Baccarat',
    totalBet: 1,
    result: -1,
    gameNo: '#14:23:05',
    winNumber: 14,
    isCancel: false,
  },
  {
    date: 1723253505000,
    type: 'Live Roulette',
    totalBet: 1000,
    result: 1500,
    gameNo: '#17:23:08',
    winNumber: 18,
    isCancel: false,
  },
  {
    date: 1723241005000,
    type: 'Live Baccarat',
    totalBet: 500,
    result: -500,
    gameNo: '#19:42:10',
    winNumber: 27,
    isCancel: false,
  },
  {
    date: 1723233101000,
    type: 'Live Roulette',
    totalBet: 60,
    result: 120,
    gameNo: '#17:36:42',
    winNumber: 11,
    isCancel: false,
  },
  {
    date: 1721033101000,
    type: 'Live Roulette',
    totalBet: 30,
    result: 80,
    gameNo: '#12:08:51',
    winNumber: 13,
    isCancel: false,
  },
])

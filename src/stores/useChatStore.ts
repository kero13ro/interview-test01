import { create } from 'zustand'

export enum ChatRoomType {
  Live,
  Support,
}

interface IChatMessage {
  name: string
  date: number
  type: ChatRoomType
  msg: string
  isMine: boolean
}

interface IMessageQueue {
  name: string
  date: number
  msgs: string[]
  isMine: boolean
  key: number
}

type ChatType = {
  table: Map<ChatRoomType, IMessageQueue[]>
  count: number
  sn: number

  add: (val: IChatMessage) => void
}

export const useChatStore = create<ChatType>((set) => ({
  table: new Map<ChatRoomType, IMessageQueue[]>(),
  count: 0,
  sn: 0,
  add: (val: IChatMessage) => {
    set((state) => {
      let queue = state.table.get(val.type)
      if (!queue) {
        queue = []
        state.table.set(val.type, queue)
      }

      let sn = state.sn
      const latest = queue.length == 0 ? null : queue[0]
      if (!latest || latest.name !== val.name) {
        queue.unshift({
          name: val.name,
          date: 0,
          msgs: [],
          isMine: val.isMine,
          key: sn++,
        })
      }
      queue[0].date = val.date
      queue[0].msgs.push(val.msg)

      let count = state.count
      if (count == 50) {
        const last = queue[queue.length - 1]
        last.msgs.shift()
        if (last.msgs.length == 0) queue.pop()
      } else {
        count += 1
      }

      return { count: count, sn: sn }
    })
  },
}))

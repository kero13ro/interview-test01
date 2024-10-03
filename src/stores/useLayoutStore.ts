import { create } from 'zustand'

export type MenuPageType = 'chat' | 'chat_support'

type BoardLayoutType = {
  isOpenMenu: boolean
  menuPage: MenuPageType

  closeMenu: () => void
}

export const useLayoutStore = create<BoardLayoutType>((set) => ({
  menuPage: 'chat',
  isOpenMenu: true,

  closeMenu: () => set({ isOpenMenu: false }),
}))

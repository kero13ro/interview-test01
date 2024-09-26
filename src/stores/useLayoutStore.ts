import { create } from 'zustand'

export type MenuPageType = 'index' | 'history' | 'rules' | 'chat' | 'chat_support'

type BoardLayoutType = {
  isOpenSelector: boolean
  isOpenMenu: boolean
  menuPage: MenuPageType

  closeMenu: () => void
}

export const useLayoutStore = create<BoardLayoutType>((set) => ({
  isOpenSelector: false,
  menuPage: 'chat',
  isOpenMenu: true,

  closeMenu: () => set({ isOpenMenu: false, menuPage: 'index' }),
}))

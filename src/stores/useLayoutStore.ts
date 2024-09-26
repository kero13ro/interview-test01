import { create } from 'zustand'

export type MenuPageType =
  | 'index'
  | 'history'
  | 'rules'
  | 'limits'
  | 'rules_inner'
  | 'history_type'
  | 'history_list'
  | 'history_content'
  | 'chat'
  | 'chat_support'

type BoardLayoutType = {
  isOpenSelector: boolean
  isOpenMenu: boolean
  menuPage: MenuPageType

  closeMenu: () => void
}

export const useLayoutStore = create<BoardLayoutType>((set) => ({
  isOpenSelector: false,
  menuPage: 'chat',
  isOpenMenu: !false,

  closeMenu: () => set({ isOpenMenu: false, menuPage: 'index' }),
}))

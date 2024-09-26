import clsx from 'clsx'

import { useState } from 'react'
import { ChatRoomType } from 'src/stores/useChatStore'
import { useLayoutStore } from 'src/stores/useLayoutStore'
import ChatRoom, { ChatHeader, ChatSupportHeader } from './chat/ChatRoom'
import './chat/ChatRoom.scss'
import './FooterMenu.scss'
// import './history/GameHistory.scss'
import SVGChat from './SVGChat.svg'
import SVGChipReflection from './SVGChipReflection.svg?react'
import SVGClose from './SVGClose.svg?react'
import SVGRight from './SVGRight.svg?react'
import SVGSupport from './SVGSupport.svg'

const Layout = ({
  icon,
  header,
  content,
  hideScrollHint,
  handleBack,
}: {
  icon?: string
  header: React.ReactNode
  content: React.ReactNode
  hideScrollHint?: boolean
  handleBack?: () => void
}) => {
  const isOpenMenu = useLayoutStore((state) => state.isOpenMenu)
  const closeMenu = useLayoutStore().closeMenu
  // const menuPage = useLayoutStore((state) => state.menuPage)

  const handleBackClick = () => {
    if (handleBack) {
      handleBack()
      return
    }
    useLayoutStore.setState({ menuPage: 'index' })
  }

  const [isBottom, setIsBottom] = useState(false)
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement

    const scrollEnd = target.scrollHeight - target.scrollTop === target.clientHeight
    if (isBottom !== scrollEnd) setIsBottom(scrollEnd)
  }

  return (
    <div id="FooterMenu" className={clsx({ isOpenMenu })}>
      <div className="mask" onClick={closeMenu}></div>
      <div className="menuWrapBorder">
        <div className="menuWrap">
          <div className="header mb-4 flex items-center justify-between">
            <div className="w-8"></div>
            {icon && <img src={icon} className="absolute cursor-pointer" onClick={handleBackClick} />}
            {header}
            <SVGClose onClick={closeMenu} className="cursor-pointer" />
          </div>
          <div className="scrollWrap" onScroll={handleScroll}>
            {content}
          </div>

          {!hideScrollHint && <div className={clsx(isBottom && 'opacity-0', 'scrollHint', 'transition-opacity')}></div>}

          <SVGChipReflection className="absolute bottom-0 left-1/2 -translate-x-1/2" />
        </div>
      </div>
    </div>
  )
}

export default function FooterMenu() {
  const menuPage = useLayoutStore((state) => state.menuPage)

  if (menuPage === 'chat') {
    return (
      <Layout
        icon={SVGSupport}
        header={<ChatHeader />}
        content={<ChatRoom type={ChatRoomType.Live} />}
        hideScrollHint={true}
        handleBack={() => useLayoutStore.setState({ menuPage: 'chat_support' })}
      />
    )
  }

  if (menuPage === 'chat_support') {
    return (
      <Layout
        icon={SVGChat}
        header={<ChatSupportHeader />}
        content={<ChatRoom type={ChatRoomType.Support} />}
        hideScrollHint={true}
        handleBack={() => useLayoutStore.setState({ menuPage: 'chat' })}
      />
    )
  }

  const leave = () => {
    window?.parent?.postMessage({ type: 'game', message: JSON.stringify({ method: 'Back Lobby' }) }, '*')
  }

  //menu index
  return (
    <Layout
      header={<span>Menu</span>}
      content={
        <div className="list cursor-pointer">
          <div className="row" onClick={() => useLayoutStore.setState({ menuPage: 'history' })}>
            Game History details
            <SVGRight />
          </div>
          <div className="row" onClick={() => useLayoutStore.setState({ menuPage: 'rules' })}>
            <span>Help & Rules</span>
            <SVGRight />
          </div>
          <div className="row" onClick={() => useLayoutStore.setState({ menuPage: 'limits' })}>
            <span>Payouts & Limits</span>
            <SVGRight />
          </div>
          <div className="row text-error" onClick={leave}>
            <span>Leave game</span>
          </div>
        </div>
      }
    />
  )
}

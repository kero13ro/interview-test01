import { useChatBot } from 'src/hook/useChatBot'
import { ChatRoomType } from 'src/stores/useChatStore'
import ChatInput from './ChatInput'
import ChatList from './ChatList'

export function ChatHeader() {
  return (
    <div className="flex flex-[1_0_0] flex-col items-center justify-center">
      <div>LIVE CHAT</div>
      <div className="flex gap-[2px] text-[8px] font-semibold uppercase leading-[12px] tracking-[0.32px]">
        <div>DEALER:</div>
        <div className="g-titleName">TEMO</div>
      </div>
    </div>
  )
}

export function ChatSupportHeader() {
  return (
    <div className="flex flex-[1_0_0] flex-col items-center justify-center">
      <div>LIVE SUPPORT</div>
      <div className="flex gap-[2px] text-[8px] font-semibold uppercase leading-[12px] tracking-[0.32px]">
        <div>OPERATOR:</div>
        <div className="g-titleName">TEMO</div>
      </div>
    </div>
  )
}

export default function ChatRoom({ type }: { type: ChatRoomType }) {
  useChatBot({ type })

  return (
    <div id="ChatRoom" className="h-full">
      <div className="section">
        <ChatInput type={type} />
        <ChatList type={type} />
      </div>
    </div>
  )
}

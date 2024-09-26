import { useRef, useState } from 'react'
import SVGMail from '../menu/SVGMail.svg'
import ChatButton from './ChatButton'

import { ChatRoomType, useChatStore } from 'src/stores/useChatStore'

export default function ChatInput({ type }: { type: ChatRoomType }) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isEmpty, setIsEmpty] = useState<boolean>(true)
  const [isFocus, setIsFocus] = useState<boolean>(false)

  // for test
  const add = useChatStore.getState().add

  const onFocusChanged = (focus: boolean) => {
    setIsFocus(focus)
  }
  const onTextChanged = () => {
    const text = inputRef.current?.value
    setIsEmpty(!text)
  }
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      send()
    }
  }
  const send = () => {
    const input = inputRef.current
    if (!input) return
    if (!input.value) return

    add({
      isMine: true,
      name: 'me',
      msg: input.value,
      date: Date.now(),
      type: type,
    })

    input.value = ''
    onTextChanged()
  }

  return (
    <div
      className={`w-full rounded-[44px] p-[1px] ${isFocus ? 'to-42% bg-gradient-to-b from-[#bdb7a4] from-0% to-[#6C6654]' : 'bg-[#303030]'}`}
    >
      <div className={`textArea`}>
        <img src={SVGMail} />
        <input
          ref={inputRef}
          placeholder="YOUR MESSAGE..."
          onChange={onTextChanged}
          onKeyDown={onKeyDown}
          onFocus={() => onFocusChanged(true)}
          onBlur={() => onFocusChanged(false)}
          maxLength={75}
        />
        <ChatButton enable={isEmpty ? 0 : 1} onClick={send} />
      </div>
    </div>
  )
}

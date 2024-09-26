import { ChatRoomType, useChatStore } from 'src/stores/useChatStore'

interface ChatMessageProps {
  name: string
  context: string[]
  date: number
}

function OthersMessage(props: ChatMessageProps) {
  return (
    <div className="flex flex-col gap-1">
      {props.context.map((value, idx) => {
        return (
          <div key={idx} className="bubble others message">
            <div className="inner">{value}</div>
          </div>
        )
      })}
      <div className="owner">{`${props.name} • ${new Date(props.date).toLocaleString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      })}`}</div>
    </div>
  )
}

function MineMessage(props: ChatMessageProps) {
  return (
    <div className="flex flex-col items-end gap-1">
      {props.context.map((value, idx) => {
        return (
          <div key={idx} className="bubble mine message">
            <div className="inner">{value}</div>
          </div>
        )
      })}
      <div className="owner">{`${props.name} • ${new Date(props.date).toLocaleString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      })}`}</div>
    </div>
  )
}

export default function ChatList({ type }: { type: ChatRoomType }) {
  const { table } = useChatStore((state) => state)

  return (
    <div className="chatScroll">
      <div className="flex flex-col-reverse gap-1">
        {table.get(type)?.map((value, idx) => {
          return value.isMine ? (
            <MineMessage key={value.key} name={value.name} context={value.msgs} date={value.date} />
          ) : (
            <OthersMessage key={value.key} name={value.name} context={value.msgs} date={value.date} />
          )
        })}
      </div>
    </div>
  )
}

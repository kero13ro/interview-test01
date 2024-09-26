import { ChatRoomType, useChatStore } from 'src/stores/useChatStore'

interface ChatMessageProps {
  name: string
  context: string[]
  date: number
}

const renderContent = (message: string, type?: 'text' | 'image' | 'video') => {
  type = type || 'text'
  if (type === 'video') {
    return <video src={message} controls style={{ maxWidth: '200px' }} />
  } else if (type === 'image') {
    return <img src={message} alt="User shared" style={{ maxWidth: '200px' }} />
  } else if (type === 'text') {
    return <p>{message}</p>
  }
}

function OthersMessage(props: ChatMessageProps) {
  return (
    <div className="flex flex-col gap-1">
      {props.context.map((value, idx) => {
        return (
          <div key={idx} className="bubble others message">
            <div className="inner">{renderContent(value)}</div>
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
            <div className="inner">{renderContent(value)}</div>
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
  console.log(table)
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

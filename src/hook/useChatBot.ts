import { useEffect, useRef } from 'react'
import { ChatRoomType, useChatStore } from 'src/stores/useChatStore'

export const useChatBot = ({ type }: { type: ChatRoomType }) => {
  const timer = useRef(0)
  const add = useChatStore.getState().add

  const sentence = [
    'hi gays, after two sprints, we have a presetation, so please be prepared to work overtime !!',
    'Better a witty fool than a foolish wit.',
    'Nothing is so common as the wish to be remarkable',
    'Nothing will come of nothing',
    'What is done cannot be undone',
    'Agree with you',
    'Hello george, have a nige game',
  ]

  const randomMessage = () => {
    const ms = 5000 + Math.random() * 10000
    const rnd = Math.floor(sentence.length * Math.random())
    timer.current = window.setTimeout(() => {
      add({
        isMine: false,
        name: 'temo',
        msg: sentence[rnd],
        date: Date.now(),
        type: type,
      })
      randomMessage()
    }, ms)
  }

  useEffect(() => {
    randomMessage()
    return () => {
      clearTimeout(timer.current)
      timer.current = 0
    }
  })
}

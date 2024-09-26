import { memo } from 'react'
import { useCart } from 'src/stores/useCart'
import { useTimerStore } from 'src/stores/useTimerStore'
import { useShallow } from 'zustand/react/shallow'
import BetResult from './BetResult'

const Clock = memo(() => useTimerStore((state) => state.date))

export default function Header() {
  const [balance, totalBet] = useCart(useShallow((s) => [s.balance, s.totalBet]))
  return (
    <div id="Header" className="contents">
      <div className="bgFader absolute left-0 top-4 h-[91px] w-full" />

      <div className="z-[2] overflow-hidden p-3 pb-0">
        <BetResult />
        <div className="relative z-[2] mt-[2px] flex w-full items-center justify-between">
          <span className="g-number flex text-[#C7BBA4]">Balance: ${balance}</span>
          <span className="absolute left-1/2 -translate-x-1/2 font-inter text-2xs text-[#C7BBA4DE]">
            <Clock />
          </span>
          <span className="g-number text-[#F9F9F9]">Total bet: ${totalBet}</span>
        </div>
        <div className="coverFader absolute right-0 top-2 h-[23px] w-full" />
      </div>
    </div>
  )
}

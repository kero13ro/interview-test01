import clsx from 'clsx'
import { getBetGridColor } from 'src/service/bet'

const BetResult = () => {
  const numArr = [1, 2, 5, 2, 1, 17, 18, 19, 0, 29, 34, 35, 36, 2, 1, 2]
  const fakeArr = Array.from({ length: 5 }, () => numArr)

  return (
    <div className="flex w-full gap-[3px]">
      {fakeArr.flat().map((num, index) => (
        <div key={index} className={clsx('headerChip', getBetGridColor(num))}>
          {num}
        </div>
      ))}
    </div>
  )
}

export default BetResult

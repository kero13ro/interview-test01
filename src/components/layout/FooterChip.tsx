import c1 from 'src/assets/chip/c1.svg'
import c10 from 'src/assets/chip/c10.svg'
import c100 from 'src/assets/chip/c100.svg'
import c1k from 'src/assets/chip/c1k.svg'
import c2 from 'src/assets/chip/c2.svg'
import c25 from 'src/assets/chip/c25.svg'
import c250 from 'src/assets/chip/c250.svg'
import c2k from 'src/assets/chip/c2k.svg'
import c5 from 'src/assets/chip/c5.svg'
import c50 from 'src/assets/chip/c50.svg'
import c500 from 'src/assets/chip/c500.svg'
import c5k from 'src/assets/chip/c5k.svg'

const mapping: Record<number, string> = {
  1: c1,
  2: c2,
  5: c5,
  10: c10,
  25: c25,
  50: c50,
  100: c100,
  500: c500,
  250: c250,

  1000: c1k,
  2000: c2k,
  5000: c5k,
}
export default function FooterChip({ value, className }: { value: number; className?: string }) {
  const src = mapping[value]

  return <img src={src} className={className} />
}

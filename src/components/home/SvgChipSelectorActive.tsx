import { useCart } from 'src/stores/useCart'

const positionMap: Record<number, number[]> = {
  5000: [31.32, 76.32],
  500: [118.5, 97],
  250: [185, 97],
  900: [251.5, 97],
  50: [318, 97],
  25: [52, 167],
  10: [118.5, 167],
  5: [185, 167],
  2: [251.5, 167],
  1: [318, 167],
}

export default function SvgChipSelectorActive({ isCircle }: { isCircle: boolean }) {
  const selectedChipVal = useCart((s) => s.selectedChipVal)
  const [chipX, chipY] = positionMap[selectedChipVal] || []

  if (!chipX) return null
  return (
    <>
      {isCircle ? (
        <>
          <circle cx={chipX} cy={chipY} r={25.5} stroke="#fff" strokeOpacity={0.36} />
          <g className="chipShine">
            <circle cx={chipX} cy={chipY} r={25.5} stroke="url(#ChipSelector_svg__br)" />
            <circle cx={chipX} cy={chipY} r={25.5} stroke="url(#ChipSelector_svg__br)" />
            <circle cx={chipX} cy={chipY} r={25.5} stroke="url(#ChipSelector_svg__br)" />
            <circle cx={chipX} cy={chipY} r={25.5} stroke="url(#ChipSelector_svg__br)" />
          </g>
        </>
      ) : (
        <>
          <rect width={46.36} height={46.36} x={28.82} y={73.82} rx={8.594} stroke="#fff" strokeOpacity={0.36} />
          <g className="chipShine">
            <rect width={46.36} height={46.36} x={28.82} y={73.82} rx={8.594} stroke="url(#ChipSelector_svg__br)" />
            <rect width={46.36} height={46.36} x={28.82} y={73.82} rx={8.594} stroke="url(#ChipSelector_svg__br)" />
            <rect width={46.36} height={46.36} x={28.82} y={73.82} rx={8.594} stroke="url(#ChipSelector_svg__br)" />
            <rect width={46.36} height={46.36} x={28.82} y={73.82} rx={8.594} stroke="url(#ChipSelector_svg__br)" />
          </g>
        </>
      )}

      <linearGradient id="ChipSelector_svg__br" x1={185} x2={185} y1={141} y2={193} gradientUnits="userSpaceOnUse">
        <stop stopColor="#C4A886" />
        <stop offset={1} stopColor="#916F45" />
      </linearGradient>
    </>
  )
}

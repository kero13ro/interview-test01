// deprecated
export default function BoardChipWrap({ val }: { val: number }) {
  if (val === 1) return <img src="src/assets/chipWrap/1.svg" />
  if (val < 5) return <img src="src/assets/chipWrap/2.svg" />
  if (val < 10) return <img src="src/assets/chipWrap/5.svg" />
  if (val < 25) return <img src="src/assets/chipWrap/10.svg" />
  if (val < 50) return <img src="src/assets/chipWrap/25.svg" />
  if (val < 250) return <img src="src/assets/chipWrap/50.svg" />
  if (val < 500) return <img src="src/assets/chipWrap/250.svg" />
  if (val < 900) return <img src="src/assets/chipWrap/500.svg" />
  if (val < 2000) return <img src="src/assets/chipWrap/900.svg" />
  if (val < 4000) return <img src="src/assets/chipWrap/2k.svg" />
  if (val < 5000) return <img src="src/assets/chipWrap/4k.svg" />
  return <img src="src/assets/chipWrap/5k.svg" />
}

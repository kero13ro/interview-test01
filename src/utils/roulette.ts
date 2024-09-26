const roulette: number[] = [
  0, 26, 3, 35, 12, 28, 7, 29, 18, 22, 9, 31, 14, 20, 1, 33, 16, 24, 5, 10, 23, 8, 30, 11, 36, 13, 27, 6, 34, 17, 25, 2,
  21, 4, 19, 15, 32,
]

export type rouletteColor = 'green' | 'black' | 'red'

function getRouletteIndex(num: number) {
  return roulette.findIndex((element) => element == num)
}

function getRouletteNumberByIndex(idx: number) {
  const remainder = idx % roulette.length
  return remainder < 0 ? roulette[roulette.length + remainder] : roulette[remainder]
}

export function getRouletteNumberColor(num: number): rouletteColor {
  const idx = getRouletteIndex(num)
  if (idx === 0) return 'green'
  return idx % 2 == 0 ? 'red' : 'black'
}

export function getRouletteNeighbours(center: number, count: number) {
  const idx = getRouletteIndex(center)
  if (idx == -1) return null

  const neighbours = []
  const start = idx - count
  const total = count * 2 + 1
  for (let i: number = 0; i < total; ++i) {
    const slot = getRouletteNumberByIndex(start + i)
    if (!isNaN(slot)) neighbours.push(slot)
  }

  return neighbours
}

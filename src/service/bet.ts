import Chip1 from 'src/assets/chipPNG/c1.png'
import Chip10 from 'src/assets/chipPNG/c10.png'
import Chip100 from 'src/assets/chipPNG/c100.png'
import Chip1k from 'src/assets/chipPNG/c1k.png'
import Chip2 from 'src/assets/chipPNG/c2.png'
import Chip25 from 'src/assets/chipPNG/c25.png'
import Chip250 from 'src/assets/chipPNG/c250.png'
import Chip2k from 'src/assets/chipPNG/c2k.png'
import Chip5 from 'src/assets/chipPNG/c5.png'
import Chip50 from 'src/assets/chipPNG/c50.png'
import Chip500 from 'src/assets/chipPNG/c500.png'
import Chip5k from 'src/assets/chipPNG/c5k.png'

export const getChipType = (val: number) => {
  if (val === 1) return Chip1
  if (val < 5) return Chip2
  if (val < 10) return Chip5
  if (val < 25) return Chip10
  if (val < 50) return Chip25
  if (val < 250) return Chip50
  if (val < 100) return Chip100
  if (val < 500) return Chip250
  if (val < 900) return Chip500
  if (val < 1000) return Chip1k
  if (val < 4000) return Chip2k
  return Chip5k
}

export const getChipColor = (val: number) => {
  if (val === 1) return ['#A19B7D', '#535336', '#EAE9E3']
  if (val < 5) return ['#749355', '#D1C187', '#115951']
  if (val < 10) return ['#A03239', '#B1A26D', '#2B3F67']
  if (val < 25) return ['#42768D', '#A93A17', '#CBB157']
  if (val < 50) return ['#3F7D21', '#EEC328', '#454545']
  if (val < 250) return ['#0B56C7', '#BF1A73', '#4C1F67']
  if (val < 500) return ['#16664E', '#93055B', '#FE971D']
  if (val < 900) return ['#5331B2', '#2FA063', '#FFBC39']
  if (val < 2000) return ['#2A272E', '#FCE51A', '#23780D']
  if (val < 4000) return ['#0D9A78', '#B51923', '#5C00B8']
  if (val < 5000) return ['#A1A1A1', '#398E24', '#FBE30B']
  return ['#DDD3B1', '#B51010', '#0F4C32']
}

export const betIdToNumbers = (mixId: string) => {
  if (mixId === 'odd') return Array.from({ length: 18 }, (_, i) => i * 2 + 1)
  if (mixId === 'even') return Array.from({ length: 18 }, (_, i) => i * 2 + 2)
  if (mixId === 'black') return [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35]
  if (mixId === 'red') return [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]

  if (mixId.includes(',')) return mixId.split(',').map((v) => Number(v))
  if (mixId.includes('-')) {
    const [start, end] = mixId.split('-')
    return Array.from({ length: Number(end) - Number(start) + 1 }, (_, i) => Number(start) + i)
  }
  if (mixId.includes('interval')) {
    const base = mixId.split('_')[1]
    return Array.from({ length: 12 }, (_, i) => Number(base) + i * 3)
  }
  return []
}

export const RED_SLOTS = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]
export const BLACK_SLOTS = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35]

export const getBetGridColor = (num: number) => {
  if (RED_SLOTS.includes(num)) return 'red'
  if (BLACK_SLOTS.includes(num)) return 'black'
  if (num === 0) return 'green'
  return 'red'
}

export const convertLabel = (val: number) => {
  let res: number = val
  let unit = ''
  if (val >= 1000) {
    res = val / 1000
    unit = 'K'
  }
  if (val >= 1000000) {
    res = val / 1000000
    unit = 'M'
  }

  const decimalPart = String(res).split('.')[1]
  if (decimalPart && decimalPart.length > 1) {
    res = Math.floor(res * 10) / 10
    unit = unit + '+'
  }

  return res + unit
}

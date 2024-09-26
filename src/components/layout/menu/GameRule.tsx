import { useLayoutStore } from 'src/stores/useLayoutStore'
import SVGRight from './SVGRight.svg?react'

const titleList = [
  'Game Rules',
  'Bet Types',
  'Racetrack Bets',
  'Tiers du Cylindre',
  'Orphelins a Cheval',
  'Voisins du Zero',
  'Jeu Zero',
  'Special Bets',
  'Favourite',
  'Payouts',
  'Return To Player',
  'Winning Numbers',
  'Statistics',
  'Placing bets',
  'Autoplay',
  'Game History',
  'Chat',
  'Live Support',
  'Disconnection policy',
  'Error Handling',
  'Lobby',
  'hotKeys',
]

export default function GameRule() {
  return (
    <div className="list cursor-pointer" onClick={() => useLayoutStore.setState({ menuPage: 'rules_inner' })}>
      {titleList.map((item, index) => (
        <div key={index} className="row">
          {item}
          <SVGRight />
        </div>
      ))}
    </div>
  )
}

import clsx from 'clsx'
import SVGChips from 'src/assets/icon/chips.svg'
import { useCart } from 'src/stores/useCart'
import { useLayoutStore } from 'src/stores/useLayoutStore'
import SvgChipSelector from '../home/SvgChipSelector'
import FooterChip from './FooterChip'
import FooterIcon from './FooterIcon'

export default function Footer() {
  const isOpenSelector = useLayoutStore((state) => state.isOpenSelector)

  const selectedChipVal = useCart((state) => state.selectedChipVal)
  const placedChipList = useCart((state) => state.placedChipList)

  const { handleDouble, handleRepeat } = useCart()

  const openMenu = () => {
    useLayoutStore.setState((s) => ({
      isOpenMenu: !s.isOpenMenu,
      menuPage: s.isOpenMenu ? s.menuPage : 'index',
    }))
  }

  const openChat = () => {
    useLayoutStore.setState((s) => ({
      isOpenMenu: !s.isOpenMenu,
      menuPage: s.isOpenMenu ? s.menuPage : 'chat',
    }))
  }

  const toggleSelector = () => useLayoutStore.setState({ isOpenSelector: !isOpenSelector })

  return (
    <div id="Footer" className="relative select-none px-4">
      <div id="chipSelector" className={clsx({ isOpenSelector })}>
        <div className="mask" onClick={toggleSelector}></div>
        <SvgChipSelector />
      </div>

      <div className="mx-auto flex h-[60px] w-full max-w-[474px] items-center justify-between px-[18px]">
        <FooterIcon type="chat" onClick={openChat} />
        <FooterIcon type="undo" />

        <div className="relative cursor-pointer center" onClick={toggleSelector}>
          <FooterChip value={selectedChipVal} className="absolute" />
          <img src={SVGChips} />
        </div>

        {placedChipList.length > 0 ? (
          <FooterIcon type="twice" onClick={handleDouble} />
        ) : (
          <FooterIcon type="repeat" onClick={handleRepeat} />
        )}

        <FooterIcon type="hamburger" onClick={openMenu} />
      </div>
    </div>
  )
}

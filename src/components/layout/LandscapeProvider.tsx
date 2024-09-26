import { useOrientation } from '@uidotdev/usehooks'
import LandscapeIcon from 'src/assets/flip.svg'

import { isMobileDevice } from 'src/utils/common'

const LandscapeProvider = () => {
  const orientation = useOrientation()
  const isLandscape = orientation.type.includes('landscape')

  return (
    isMobileDevice &&
    isLandscape && (
      <div
        className="fixed z-[1000] h-screen w-screen flex-col bg-black bg-cover center"
        style={{ backgroundImage: 'url(/Bg.svg)' }}
      >
        <img src={LandscapeIcon} alt="Landscape Icon" className="mt-16 h-[38%]" />
        <div className="mt-[60px] text-sm font-semibold uppercase tracking-[0.56px] text-[#7A7A7A]">
          Flip your phone to continue playing
        </div>
      </div>
    )
  )
}

export default LandscapeProvider

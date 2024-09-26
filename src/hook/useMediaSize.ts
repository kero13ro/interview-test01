import { useMediaQuery } from '@uidotdev/usehooks'

const useMediaSize = () => {
  const sm = useMediaQuery('only screen and (max-width : 768px)')
  const md = useMediaQuery('only screen and (min-width : 769px) and (max-width : 992px)')
  const lg = useMediaQuery('only screen and (min-width : 993px) and (max-width : 1200px)')
  const xl = useMediaQuery('only screen and (min-width : 1201px)')

  const mobile = useMediaQuery('only screen and (max-width : 768px)')
  const desktop = useMediaQuery('only screen and (min-width : 769px)')

  return {
    sm,
    md,
    lg,
    xl,
    mobile,
    desktop,
  }
}

export default useMediaSize

export const packageVersion = () => __APP_VERSION__

export const IS_DEV_MODE = import.meta.env.MODE === 'development'
export const IS_MOCK_MODE = import.meta.env.VITE_USE_MOCK
export const IS_CLOSE_PIXI = import.meta.env.VITE_CLOSE_PIXI
export const IS_CLOSE_SERVER = import.meta.env.VITE_CLOSE_SERVER

export const isIOS = () => {
  const ua = window.navigator.userAgent
  return !!/iPad/i.exec(ua) || !!/iPhone/i.exec(ua)
}

export const isSafari = () => {
  const ua = navigator.userAgent.toLowerCase()
  return ua.includes('safari') && !ua.includes('chrome')
}

export const sleep = (milliseconds: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds))
}

export const isLandscape = () => window.matchMedia('(orientation: landscape)').matches

export const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

export const thousandSeparator = (num: number) => {
  return num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

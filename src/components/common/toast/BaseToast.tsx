import clsx from 'clsx'
import { toast } from 'react-toastify'
import { Id, ToastContentProps } from 'react-toastify/dist/types'
import './BaseToast.scss'
import IconClear from './clear.svg'
import IconError from './error.svg'
import IconInfo from './info.svg'
import IconSuccess from './success.svg'

type toastType = 'error' | 'success' | 'info'

interface BaseToastProps extends Partial<ToastContentProps> {
  msg: string
  type: toastType
}

const BaseToast = ({ closeToast, toastProps, msg, type = 'info' }: BaseToastProps) => {
  const img = type === 'success' ? IconSuccess : IconClear
  return (
    <div className={clsx('BaseToast center', type)}>
      {type === 'success' && <img src={IconSuccess} />}
      {type === 'error' && <img src={IconError} />}
      {type === 'info' && <img src={IconInfo} />}

      <div className="wrap mr-auto">{msg}</div>
      <button onClick={closeToast}>
        <img src={IconClear} />
      </button>
    </div>
  )
}

// notify('message', 'success')
export const notify = (msg: string, type?: toastType): Id => {
  return toast(<BaseToast msg={msg} type={type || 'info'} />)
}

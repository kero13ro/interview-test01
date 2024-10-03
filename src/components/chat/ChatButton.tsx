import type { SVGProps } from 'react'

interface ChatButtonProps extends SVGProps<SVGSVGElement> {
  enable: number
}

const ChatButton = (props: ChatButtonProps) => {
  const key = props.enable ? 'Enable' : 'Disable'
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={44} height={44} fill="none" {...props}>
      <path fill="url(#a)" d="M.5 22C.5 10.126 10.126.5 22 .5S43.5 10.126 43.5 22 33.874 43.5 22 43.5.5 33.874.5 22Z" />
      <path
        stroke="url(#b)"
        d="M.5 22C.5 10.126 10.126.5 22 .5S43.5 10.126 43.5 22 33.874 43.5 22 43.5.5 33.874.5 22Z"
      />
      <path
        fill="#FEFEFE"
        fillRule="evenodd"
        d="M29.517 21.84a.671.671 0 0 1-.38.605L17.849 27.88a.671.671 0 0 1-.918-.846l1.998-5.194-1.998-5.194a.671.671 0 0 1 .918-.846l11.288 5.435c.232.112.38.347.38.605Zm-10.725-4.096 1.482 3.855c.06.155.06.327 0 .482l-1.482 3.855 8.507-4.096-8.507-4.096Z"
        clipRule="evenodd"
      />
      <defs>
        <linearGradient id="a" x1={22} x2={22} y1={0} y2={44} gradientUnits="userSpaceOnUse">
          <stop stopColor="#1A5732" />
          <stop offset={1} stopColor="#0E3A22" />
        </linearGradient>
        <linearGradient id="b" x1={22} x2={22} y1={0} y2={44} gradientUnits="userSpaceOnUse">
          <stop stopColor="#49865F" />
          <stop offset={0.42} stopColor="#1A472D" />
        </linearGradient>
      </defs>
    </svg>
  )
}
export default ChatButton

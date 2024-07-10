import AiIcon from "data-base64:~/asset/btnCon.png"
import cssText from "data-text:~style.css"
import type { PlasmoCSConfig, PlasmoGetInlineAnchor } from "plasmo"
import { useState } from "react"

import FuckingModal from "~features/GenModal"

// import as from '../assets'

// import { CountButton } from "~features/CountButton"

export const config: PlasmoCSConfig = {
  matches: ["https://*.linkedin.com/*"]
}
export const getInlineAnchor: PlasmoGetInlineAnchor = async () =>
  document.querySelector(`.msg-form__msg-content-container`)

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

// const PlasmoOverlay = () => {
//   return (
//     <div className="z-50 flex fixed top-32 right-8">
//       <p>lol</p>
//       <CountButton />
//       <LinkedInMessageButton />
//     </div>
//   )
// }

const PlasmoPricingExtra = () => {
  const [Open, setOpen] = useState<boolean>(false)
  return (
    <div className="w-full bg-white">
      <img
        src={AiIcon}
        alt="Some pretty cool image"
        className="absolute right-20 -top-24 cursor-pointer"
        onClick={() => {
          console.log("fdfgdgfd")
          setOpen(true)
        }}
      />
      <FuckingModal open={Open} setOpen={setOpen} />
    </div>
  )
}

export default PlasmoPricingExtra

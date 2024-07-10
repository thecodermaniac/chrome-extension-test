import down from "data-base64:~/asset/down.png"
import send from "data-base64:~/asset/send.png"
import React, { useState } from "react"

interface ChatObject {
  role: string
  text: string
}

const FuckingModal = ({ open, setOpen }) => {
  const genArr = [
    "I am grateful that i was given a chance to show my skills. Thank you for all the hassel.",
    "I could not thank you enough for the chance given to me. Expecting a positive outcome",
    "Thanks a lor for having me, it was a great interview experience.",
    "Thanks for the response. I really appreciate the efforts for setting the interview"
  ]
  const [prompt, setPrompt] = useState<string>("")
  const [convArr, setConvArr] = useState<ChatObject[]>([])

  const handleGen = () => {
    if (prompt.length != 0) {
      setConvArr([
        ...convArr,
        { role: "USER", text: String(prompt) },
        { role: "BOT", text: genArr[Math.floor(Math.random() * genArr.length)] }
      ])

      setPrompt("")
    }
  }

  const addText = () => {
    const paragraph = document.querySelector(".msg-form__contenteditable p")
    if (paragraph) {
      paragraph.textContent += convArr[convArr.length - 1].text
    }
    // Change class of the placeholder div
    const placeholderDiv = document.querySelector(
      ".msg-form__placeholder.t-14.t-black--light.t-normal"
    )
    if (placeholderDiv) {
      placeholderDiv.className = "t-14 t-black--light t-normal"
    }

    setOpen(false)
  }

  return (
    <div
      onClick={() => {
        setOpen(false)
      }}
      className={`${
        open ? "scale-100 " : "scale-0 "
      } fixed transition-all border-b border-gray-400 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 bg-[#00000047] w-[100%] h-[100%] py-4`}>
      <div
        className="h-fit w-[60rem] p-4 flex flex-col gap-3 bg-white rounded-md absolute z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          return false
        }}>
        <div className="flex flex-col max-h-80 px-3 w-full overflow-y-scroll mt-3">
          {convArr.map((msg, index) => (
            <div
              key={index}
              className={`flex items-center max-w-[50%] rounded-md px-3 py-2 text-grayColor ${msg.role == "USER" ? "self-end bg-lightBlue" : "self-start bg-lightGray"}`}>
              <p>{msg.text}</p>
            </div>
          ))}
        </div>

        <input
          className="box-border w-full h-full text-gray-400 border-2 border-gray-400 rounded-md mt-5 px-3 py-2"
          placeholder="Enter your Prompt"
          value={prompt}
          onChange={(e) => {
            setPrompt(e.target.value)
          }}
        />
        <div className="flex flex-row justify-end gap-4 text-white">
          {convArr.length >= 2 && (
            <button
              className="px-4 py-2 rounded-md text-grayColor flex flex-row gap-1 border-grayColor border-2 items-center"
              onClick={addText}>
              <img src={down} className="w-4 h-4" />
              Insert
            </button>
          )}
          <button
            className="px-4 py-2 bg-blueColor border-blueColor gap-1 items-center flex flex-row rounded-md"
            onClick={handleGen}>
            <img src={send} className="w-4 h-4" />
            Generate
          </button>
        </div>
      </div>
    </div>
  )
}

export default FuckingModal

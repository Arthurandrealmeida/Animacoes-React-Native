import { useEffect, useState } from 'react'
import '../RotationText.css'

function RotatingText({
  texts,
  interval = 2000,
  exitDuration = 200,
  enterDelay = 50
}) {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false)

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length)
        setVisible(true)
      }, exitDuration + enterDelay)
    }, interval)

    return () => clearInterval(timer)
  }, [texts, interval, exitDuration, enterDelay])

  return (
    <span className={`rotate-text ${visible ? 'show' : 'hide'}`}>
      {texts[index]}
    </span>
  )
}

export default RotatingText

import { useEffect, useState } from 'react'
import '../RotationText.css'

function RotatingText({ texts, interval = 2000 }) {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false)

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length)
        setVisible(true)
      }, 400)
    }, interval)

    return () => clearInterval(timer)
  }, [texts, interval])

  return (
    <span className={`rotate-text ${visible ? 'show' : 'hide'}`}>
      {texts[index]}
    </span>
  )
}

export default RotatingText

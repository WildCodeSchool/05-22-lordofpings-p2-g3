import { useState, useEffect } from 'react'

// un hook custom pour gérer l'audio
const useAudio = url => {
  const [audio] = useState(new Audio(url))
  const [playing, setPlaying] = useState(false)

  const togglePlayback = () => setPlaying(!playing)

  useEffect(() => {
    if (playing) {
      console.log('fichieraudio ', audio)
      audio.play()
    } else {
      audio.pause()
    }
  }, [playing])

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false))
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false))
    }
  }, [])

  return [playing, togglePlayback]
}
export default useAudio

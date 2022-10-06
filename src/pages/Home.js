import React, { useRef, useState } from 'react'
import CustomeInput from './CustomeInput'

export default function Home() {
  const inputRef = useRef()
  const [value, setValue] = useState('red')
  return (
    <div>
      Home
      <CustomeInput
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <br />
      <button onClick={() => inputRef.current.alertHi()}> Focus </button>
    </div>
  )
}

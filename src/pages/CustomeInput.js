import React, { useImperativeHandle } from 'react'


function CustomeInput({ style, ...props }, ref) {
  useImperativeHandle(
    ref,
    () => {
      return { alertHi: () => alert('hi,goodl') }
    },
    []
  )
  return (
    <div>
      <h1>CustomeInput</h1>
      <input
        {...props}
        style={{
          border: 'none',
          backgroundColor: 'lightcoral',
          padding: '.25em',
          borderBottom: '.1em solid black',
          borderTopRightRadius: '.25em',
          borderTopLeftRadius: '.25em',
          ...style
        }}
      />
    </div>
  )
}

export default React.forwardRef(CustomeInput)

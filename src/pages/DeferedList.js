import React, { useMemo, useDeferredValue } from 'react'

export default function DeferedList({ input }) {
  const LIST_SIZE = 2000
  const deferredInput = useDeferredValue(input)
  const list = useMemo(() => {
    const l = []
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<div key={i}>{deferredInput}</div>)
    }
    return 
  }, [input])
  return <div>DeferedList</div>
}

import { useRef } from 'react'
import { useCursor } from '../hooks/useCursor'
import './Cursor.css'

export default function Cursor() {
  const ref = useRef(null)
  useCursor(ref)
  return <div className="cursor" id="cursor" ref={ref} aria-hidden="true" />
}

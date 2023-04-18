import React from 'react'
import { Link } from 'react-router-dom'

export default function NavHeader() {
  return (
    <div>
        <Link to='/'>HOME</Link>
        <span>|</span>
        <Link to='/boardlist'>BOARD</Link>
        <span>|</span>
        <Link to='/boardwriteform'>WRITE</Link>
    </div>
  )
}

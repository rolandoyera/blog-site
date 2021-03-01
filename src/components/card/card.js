import React from 'react'
import { Card } from 'theme-ui'
import './card.css'

function card({ children }) {
  return (
    <div>
      <Card className="card" >{children}</Card>

    </div>
  )
}

export default card

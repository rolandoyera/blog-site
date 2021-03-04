import React from 'react'
import { Card } from 'theme-ui'
import './card.css'


function ThemeCard({ children }) {

  return (
    <div>
      <Card className="card" >
        <div className="card-body">
          {children}
        </div>
      </Card>

    </div>
  )
}

export default ThemeCard

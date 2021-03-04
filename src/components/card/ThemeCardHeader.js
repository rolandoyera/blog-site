import React from 'react'
import { Card } from 'theme-ui'
import './card.css'


function ThemeCardHeader({ children }) {

  return (
    <div>
      <Card className="card card-header" >

        {children}
      </Card>

    </div>
  )
}

export default ThemeCardHeader

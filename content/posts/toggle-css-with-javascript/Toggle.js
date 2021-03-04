import React from 'react'
import './toggle.css'
import { Button } from 'theme-ui'
import ThemeCard from '../../../src/components/Card/ThemeCard'


export default function Toggle() {
  return (
    <div>

      <ThemeCard>
        <Button className="btn btn-primary">Toggle Me</Button>
      </ThemeCard>

    </div>
  )
}

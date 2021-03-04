import React from "react"
import './tooltip.css'
import ThemeCard from '../../../src/components/Card/ThemeCard'
import ThemeCardHeader from '../../../src/components/Card/ThemeCardHeader'

const ToolTip = () => {
  return (
    <div>
      <ThemeCardHeader>
        Example
        </ThemeCardHeader>
      <ThemeCard>

        <div className="row">
          <div className="col">
            <button className="btn" tooltip="Tooltip up here!" flow="up">Up</button>
            <button className="btn" tooltip="Tooltip down way over here!"
              flow="down">Down</button>
            <button className="btn" tooltip="This one is a lefty with a really log sentence!"
              flow="left">Left</button>
            <button className="btn" tooltip="Tooltip right"
              flow="right">Right</button>
          </div>
        </div>
      </ThemeCard>
    </div>
  )
}

export default ToolTip

import React, { useState } from "react";
import { Button } from 'theme-ui'
import './toggle.css'

const Btn = () => {
  const [isActive, setActive] = useState("false");
  const handleToggle = () => { setActive(!isActive) };
  return (
    <div>
      <div className="row">
        <Button variant='primary' mr={2} onClick={handleToggle}>Toggle</Button>
        <div className={isActive ? "app" : null}>
          <div className="card">
            Change Ahead
          </div>

        </div>
      </div>
    </div>
  )
}

export default Btn

import React from "react"
import styles from './index.module.css'
import { Button } from 'theme-ui'

const Btn = () => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <Button mr={2}>Beep</Button>

        </div>
      </div>
    </div>
  )
}

export default Btn

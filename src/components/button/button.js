import React from "react";
import './index.css'
import { Button } from 'theme-ui'


const Btn = ({ children }) => {

  return (
    <div>
      <Button variant='secondary'>
        {children}
      </Button>
    </div>
  )
}

export default Btn
import React, { useState } from 'react'
import { Modal } from './Modal'

function App() {

  function onClickOpen() {
    setOpen(prev => prev = !prev)
  }

  const [open, setOpen] = useState(false)

  return (
    <div className="App">
      <div className="wrap">
        <div className={`modal${!open ? ' show' : ''}`} onClick={onClickOpen}>
          <h1 className='modal__header'><span>&#127775;</span> Открыть окно</h1>
        </div>
        <Modal open={open} onClickOpen={onClickOpen}>
          <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" alt='GIF' />
        </Modal>
      </div>
    </div>
  )
}

export default App
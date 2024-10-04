import React, { useState } from 'react'

function App() {

  function onClickOpen() {
    setOpen(prev => prev = !prev)
  }

  const [open, setOpen] = useState(false)

  return (
    <div className="App">
      <div className="wrap">
        {
          !open && (
            <div className="modal">
              <h1 className='modal__header' onClick={onClickOpen}><span>&#127775;</span> Открыть окно</h1>
            </div>
          )
        }
        {
          open && (
            <div className="overlay">
              <div className="overlay__wrap">
                <div className="overlay__block">
                  <svg height="200" viewBox="0 0 200 200" width="200" onClick={onClickOpen}>
                    <title />
                    <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
                  </svg>
                  <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" alt='GIF' />
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default App
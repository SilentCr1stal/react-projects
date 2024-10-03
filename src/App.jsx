import React, { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)

  return <React.Fragment>
    <div className='App'>
      <div className="wrap">
        <h1 className="App__header">Счетчик</h1>
        <h2 className="App__counter">{count}</h2>
        <div className="App__btns">
          <button className="btn btn__inc" onClick={() => setCount(prev => prev += 1)}>+ Плюс</button>
          <button className="btn btn__dec" onClick={() => setCount(prev => prev > 0 ? prev -= 1 : 0)}>- Минус</button>
        </div>
      </div>
    </div>
  </React.Fragment>
}

export default App
export const Modal = ({open, onClickOpen, children}) => (
  <div className={`overlay animated${open ? ' show' : ''}`}>
    <div className="overlay__wrap">
      <div className="overlay__block">
        <svg height="200" viewBox="0 0 200 200" width="200" onClick={onClickOpen}>
          <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
        </svg>
        {children}
      </div>
    </div>
  </div>
)
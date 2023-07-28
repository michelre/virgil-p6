import './bascule.scss'
import { useState } from 'react'
import arrow from '../../assets/arrow.svg'

function Bascule(props) {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!open)
  }

  return (
    <div className="bascule-elements">
      <div onClick={toggle} className="button-bar">
        <button>{props.title}</button>
        <img
          src={arrow}
          alt="Flèche"
          className={`arrow ${open ? 'rotate' : ''}`}
        />
      </div>
      {open && (
        <div className="open">
          <h4>{props.content}</h4>
        </div>
      )}
    </div>
  )
}

export default Bascule
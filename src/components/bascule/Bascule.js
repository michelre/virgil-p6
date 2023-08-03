import './bascule.scss'
import {useState, useRef} from 'react'
import arrow from '../../assets/arrow.svg'

function Bascule(props) {
    const [open, setOpen] = useState(false)
    const [contentHeight, setContentHeight] = useState(0)
    const basculeContent = useRef(null)

    const toggle = () => {
        setOpen(!open)
        setContentHeight(basculeContent.current.clientHeight)

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
            <div className={`bascule-content`} style={{height: open ? `${contentHeight}px` : 0}}>
                <h4 ref={basculeContent}>{props.content}</h4>
            </div>
        </div>
    )
}

export default Bascule
import './banner.scss'

function Banner(props) {
  return (
    <div className={`banner-component ${props.position ? props.position : ''}`} >
      <img src={props.image} alt={props.alt} />
      <h1> {props.imageTitre} </h1>
    </div>
  )
}

export default Banner
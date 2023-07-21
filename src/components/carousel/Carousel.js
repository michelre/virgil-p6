import './carousel.css'
import React, {useState} from 'react'
import image from '../../assets/arrow.svg'


const Carousel = ({images, title}) => {

    const [index, setIndex] = useState(0)

    const arrowForward = () => {
        if (index === images.length - 1) {
            setIndex(0);
            return
        }
        setIndex(index + 1)
    }

    const arrowBackward = () => {
        if (index === 0) {
            setIndex(images.length - 1)
            return
        }
        setIndex(index - 1)
    }

    return <div className="carousel">
        <div className={"carousel-container"} style={{ transform: `translateX(-${index * 100}%`}}>
            {images.map((image, idx) => <img
                className={"carousel-img"}
                src={image}
                alt={`Image ${idx} ${title}`}
                />)
            }
        </div>
        {images.length > 1 && (
          <>
            <span>
              {index + 1}/{images.length}{' '}
            </span>
            <img
              className="carousel-arrow arrow-right"
              src={image}
              onClick={arrowForward}
              alt=""
            ></img>
            <img
              className="carousel-arrow arrow-left"
              src={image}
              onClick={arrowBackward}
              alt=""
            ></img>
          </>
        )}
      </div>


}


/*class Carousel extends React.Component {
  constructor(props) {
    super(props)

    this.arrowForward = this.arrowForward.bind(this)
    this.arrowBackward = this.arrowBackward.bind(this)

    this.state = {
      index: 0,
      pictures: props.image,
      image: props.image[0],
      title: props.title,
      date: new Date(),
    }
  }

  arrowForward() {
    if (this.state.index + 1 === this.state.pictures.length) {
      this.setState({
        index: 0,
      })
    } else {
      this.setState({
        index: this.state.index + 1,
      })
    }
  }

  arrowBackward() {
    if (this.state.index - 1 === -1) {
      this.setState({
        index: this.state.pictures.length - 1,
      })
    } else {
      this.setState({
        index: this.state.index - 1,
      })
    }
  }

  render() {
    return (
      <div className="carousel">
        <img
          className="carousel-img"
          src={this.state.pictures[this.state.index]}
          alt={this.state.title}
        ></img>
        {this.state.pictures.length > 1 && (
          <>
            <span>
              {this.state.index + 1}/{this.state.pictures.length}{' '}
            </span>
            <img
              className="carousel-arrow"
              src={image}
              onClick={this.arrowForward}
              alt=""
            ></img>
            <img
              className="carousel-arrow"
              src={image}
              onClick={this.arrowBackward}
              alt=""
            ></img>
          </>
        )}
      </div>
    )
  }
}*/

export default Carousel
import './carousel.scss'
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

export default Carousel
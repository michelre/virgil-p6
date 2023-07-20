import Tag from '../../components/tag/Tag';
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import Gallery from '../../components/gallery/Gallery';
import Footer from '../../components/footer/Footer';
import './Appartments.css';
import {useEffect, useState} from "react";
import Thumbnail from "../../components/thumbnail/Thumbnail";
import {useParams, Navigate} from "react-router-dom";
import Star from "../../components/star/Star";
import Avatar from "../../components/Avatar/Avatar";
import Bascule from "../../components/bascule/Bascule"
import Carousel from '../../components/carousel/Carousel';

function Appartments() {

    const [appartement, setAppartement] = useState(null)
    const [error, setError] = useState(false)
    const params = useParams()

    useEffect(() => {
        console.log(params)
        fetch('/data.json')
            .then(res => res.json())
            .then((data) => {
                const app = data.find(a => a.id === params.id)
                if(!app){
                    setError(true)
                }
                setAppartement(app)
            })
    }, [])

    if(error){
        return <Navigate to="/404" />
    }

    return appartement && (
        <>
        <div className='appartement-container'>
          <div className='appartement-info'>
              <div className="appartement-header">
              <Carousel image={appartement.pictures} title={appartement.title} />

              </div>
              <div className='appartement-left'>
                  <div>
                      <h1>{appartement.title}</h1>
                      <p>{appartement.location}</p>
                  </div>
                  <div className="tag-container">
                          {' '}
                          {appartement.tags.map((tag, i) => {
                            return (
                              <span key={i} className="appartement-tag">
                                {' '}
                                {tag}{' '}
                              </span>
                            )
                          })}{' '}
                        </div>


              </div>
              <div className='appartement-right'>
                  <div className='appartement-host'>
                          <span>{appartement.host.name}</span>
                          <Avatar
                              image={appartement.host.picture}/>
                  </div>
                  <div>
                          <Star rating={parseInt(appartement.rating)} />
                  </div>

              </div>
          </div>
              <div className='appartement-bascule'>
              <Bascule
                      title="Description"
                      content={appartement.description}
                    />
              <Bascule
                      title="Équipements"
                      content={
                        <>
                          {appartement.equipments.map((equipement, p) => {
                            return (
                              <span key={p}>
                                {equipement} <br />
                              </span>
                            )
                          //   Une autre façon pour faire ça ?
                          })}
                        </>
                      }
                    />
              </div>


        </div>
        </>
    );
}

export default Appartments;
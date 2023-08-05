import './Appartments.scss';
import {useEffect, useState} from "react";
import {Navigate, useParams} from "react-router-dom";
import Star from "../../components/star/Star";
import Avatar from "../../components/Avatar/Avatar";
import Bascule from "../../components/bascule/Bascule"
import Carousel from '../../components/carousel/Carousel';
import Tag from '../../components/tag/Tag'

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
    }, [params])

    if(error){
        return <Navigate to="/404" />
    }

    return appartement && (
        <>
        <div className='appartement-container'>
          <div className='appartement-info'>
              <div className="appartement-header">
              <Carousel images={appartement.pictures} title={appartement.title} />

              </div>
            <div className='appartement-block'>
              <div className='appartement-left'>
                  <div>
                      <h2>{appartement.title}</h2>
                      <p>{appartement.location}</p>
                  </div>
                  <div className="tag-container">
                    {appartement.tags.map((tag, i) => <Tag key={i} tag={tag} />)}
                  </div>


              </div>
              <div className='appartement-right'>
                  <div className='appartement-host'>
                      <div>
                          <div>{appartement.host.name.split(' ')[0]}</div>
                          <div>{appartement.host.name.split(' ')[1]}</div>
                      </div>
                      <Avatar
                          image={appartement.host.picture}/>
                  </div>
                  <div className='star'>
                          <Star rating={parseInt(appartement.rating)} />
                  </div>
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
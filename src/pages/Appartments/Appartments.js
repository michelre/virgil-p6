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
            <div className="appartement-header">
                <div>
                    <h1>{appartement.title}</h1>
                    <p>{appartement.location}</p>
                    <div>Tag</div>
                </div>
                <div>
                    <div>Avatar</div>
                    <Star rating={parseInt(appartement.rating)} />
                </div>

            </div>
        </>

    );
}

export default Appartments;
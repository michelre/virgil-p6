import Tag from '../../components/tag/Tag';
import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import Gallery from '../../components/gallery/Gallery';
import Footer from '../../components/footer/Footer';
import './Appartments.css';
import {useEffect, useState} from "react";
import Thumbnail from "../../components/thumbnail/Thumbnail";

function Appartments() {

    const [appartements, setAppartements] = useState([])

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then((data) => {
                setAppartements(data)
            })
    }, [])


    return (
    <p>Hello</p>
    );
}

export default Appartments;
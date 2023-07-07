import logo from './logo.svg';
import Tag from './components/tag/Tag.js';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Gallery from './components/gallery/Gallery';
import Footer from './components/footer/Footer';
import './App.css';
import {useEffect, useState} from "react";
import Thumbnail from "./components/thumbnail/Thumbnail";

function App() {

    const [appartements, setAppartements] = useState([])

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then((data) => {
                setAppartements(data)
            })
    }, [])


    return (
        <div className="App">
            <div className='container'>
                <Header />
                <Banner />
                <Gallery />
                <Thumbnail />
            </div>
                <Footer />
            {/* <div className={"thumbnails"}>
                {appartements.map(appartement => <Thumbnail
                    title={appartement.title}
                    image={appartement.cover}
                />)}
            </div> */}

            {/* 
            
            IDEE : 
            - Dans thumbnail: récupérer les photos directement dans le dossier du composant
            - Mettre le style css pour chaque thumbnail
            - Rappeler ensuite thumbnail dans gallery et faire le css de la gallery en flex ou grid

            
            */}



        </div>
    );
}

export default App;

// import Tag from '../../components/tag/Tag';
import Banner from '../../components/banner/Banner';
import Gallery from '../../components/gallery/Gallery';
import image from '../../assets/fond.jpg'
import './Home.scss';
import {useEffect, useState} from "react";

function Home() {

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
                <Banner
                    image={image}
                    imageTitre="Chez vous, partout et ailleurs"
                />
                <Gallery
                    appartements={appartements}
                />
            </div>

            {/* 
            
            IDEE : 
            - Dans thumbnail: récupérer les photos directement dans le dossier du composant
            - Mettre le style css pour chaque thumbnail
            - Rappeler ensuite thumbnail dans gallery et faire le css de la gallery en flex ou grid

            <Route path="/" component=Home />
            <Route path="/:id" component=Appartment />
            <Route path="/about" component=About />
            <Route path="*" component=404 />

            
            */}



        </div>
    );
}

export default Home;
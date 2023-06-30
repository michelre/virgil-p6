import logo from './logo.svg';
import Tag from './components/Tag.js'
import './App.css';
import {useEffect, useState} from "react";
import Thumbnail from "./components/Thumbnail";

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
            <div className={"thumbnails"}>
                {appartements.map(appartement => <Thumbnail
                    title={appartement.title}
                    image={appartement.cover}
                />)}
            </div>


            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload. dskdksdkskds
                </p>
                <div className={'tags'}>
                    <Tag
                        name="Cozy"
                    />
                    <Tag
                        name="Paris 10"
                    />
                </div>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;

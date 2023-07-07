/*

<Link to={props.id} tag=div/> // Création du lien

 */


const Thumbnail = (props) => {
    return <div  className="thumbnail" style={{background: `url(${props.image}) center`}}>
        <div className="background">
            <p>{props.title}</p>
        </div>
    </div>
}

export default Thumbnail;
const Thumbnail = (props) => {
    return <div  className="thumbnail" style={{background: `url(${props.image}) center`}}>
        <p>{props.title}</p>
    </div>
}

export default Thumbnail;
import './avatar.scss'

const Avatar = (avatar) => {
    return <div  className="avatar" style={{background: `url(${avatar.image}) center`}}>
    </div>
}

export default Avatar;
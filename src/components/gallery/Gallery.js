import './gallery.scss'
import Thumbnail from "../thumbnail/Thumbnail";
import {NavLink} from "react-router-dom";

export default function Gallery({appartements}) {
    return (
        <div className='gallery'>
            {appartements.map(appartement =>
                <NavLink
                    key={appartement.id}
                    to={`/appartements/${appartement.id}`}
                >
                    <Thumbnail
                        title={appartement.title}
                        image={appartement.cover}/>
                </NavLink>
            )}
        </div>
    )
}
import './gallery.css'
import Thumbnail  from "../thumbnail/Thumbnail";

export default function Gallery({appartements}) {
	return (
		<div className='gallery'>
                {appartements.map(appartement => <Thumbnail
                    title={appartement.title}
                    image={appartement.cover}
                />)}
		</div>
	)
}
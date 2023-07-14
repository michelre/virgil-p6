import StarActive from '../../assets/star-active.svg'
import StarInactive from '../../assets/star-inactive.svg'

const Star = ({rating}) => {
    const actives = Array
        .from({length: rating})
        .map((v, idx) => <img key={`active-${idx}`} src={StarActive} alt='Etoile pleine'/>)

    const inactives = Array
        .from({length: 5 - rating})
        .map((v, idx) => <img key={`inactive-${idx}`} src={StarInactive} alt='Etoile vide'/>)

    return <>
        {actives}{inactives}
    </>
}

export default Star;
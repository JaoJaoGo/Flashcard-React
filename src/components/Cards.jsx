import './Cards.css';

const Cards = ({cartas, index, side}) => {
    return (
        <>
            <p>{cartas[index][side]}</p>
        </>
    )
}

export default Cards;
import './Cards.css';

const Cards = ({cartas, index, side, flip}) => {
    return (
        <>
            <p onClick={flip}>{cartas[index][side]}</p>
        </>
    )
}

export default Cards;
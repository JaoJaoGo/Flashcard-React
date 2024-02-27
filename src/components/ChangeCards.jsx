import './ChangeCards.css';

const ChangeCards = ({ changeIndex }) => {
    return (
        <div className="botoes">
            <button type='button' id='esquerdo' onClick={e => changeIndex(e)}> &#129104; </button>
            <button type='button' id='direito' onClick={e => changeIndex(e)}> &#129106; </button>
        </div>
    )
}

export default ChangeCards;
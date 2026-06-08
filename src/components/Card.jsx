const Card = ({ card, author, buyUrl }) => {
    return (
        <>
        <h3>{card}</h3>
        <h4>{author}</h4>
        <a className="buy-button" href={buyUrl} target="_blank" rel="noreferrer">
            Buy Book
        </a>
        </>
    )
}

export default Card;
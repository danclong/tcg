export const Card = ({ card, cardPicked }) => {
    return (
        <div className={cardPicked ? 'card picked' : 'card unpicked'} data-large-image={card.images.large}>
            {cardPicked && cardPicked.picked > 1 ? <p className="picked-count">{cardPicked.picked}</p> : null}
            <div className="image-container">
            {cardPicked && <img loading="lazy" src={card.images.small} alt={card.name} />}
            </div>
            {/* <p>{card.rarity} #debug</p> */}
        </div>
    )
}
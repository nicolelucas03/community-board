import Card from './Card'

const Board = () => { 
    const books = [
        {
            card: 'All the Light We Cannot See',
            author: 'Anthony Doerr',
            buyUrl: 'https://www.amazon.com/s?k=All+the+Light+We+Cannot+See+Anthony+Doerr',
        },
        {
            card: 'The Nightingale',
            author: 'Kristin Hannah',
            buyUrl: 'https://www.amazon.com/s?k=The+Nightingale+Kristin+Hannah',
        },
        {
            card: 'The Pillars of the Earth',
            author: 'Ken Follett',
            buyUrl: 'https://www.amazon.com/s?k=The+Pillars+of+the+Earth+Ken+Follett',
        },
        {
            card: 'The Alice Network',
            author: 'Kate Quinn',
            buyUrl: 'https://www.amazon.com/s?k=The+Alice+Network+Kate+Quinn',
        },
        {
            card: 'The Killer Angels',
            author: 'Michael Shaara',
            buyUrl: 'https://www.amazon.com/s?k=The+Killer+Angels+Michael+Shaara',
        },
        {
            card: 'Outlander',
            author: 'Diana Gabaldon',
            buyUrl: 'https://www.amazon.com/s?k=Outlander+Diana+Gabaldon',
        },
        {
            card: 'Angels of the Resistance',
            author: 'Noelle Salazar',
            buyUrl: 'https://www.amazon.com/s?k=Angels+of+the+Resistance+Noelle+Salazar',
        },
        {
            card: 'Sacred Hunger',
            author: 'Barry Unsworth',
            buyUrl: 'https://www.amazon.com/s?k=Sacred+Hunger+Barry+Unsworth',
        },
        {
            card: 'The History of the Kelly Gang',
            author: 'Peter Carey',
            buyUrl: 'https://www.amazon.com/s?k=The+History+of+the+Kelly+Gang+Peter+Carey',
        },
        {
            card: 'Alias Grace',
            author: 'Margaret Atwood',
            buyUrl: 'https://www.amazon.com/s?k=Alias+Grace+Margaret+Atwood',
        },
    ]

    return ( 
        <div className="card-grid">
            {books.map((book) => (
                <div className="card" key={book.card}>
                    <Card card={book.card} author={book.author} buyUrl={book.buyUrl} />
                </div>
            ))}
        </div>
    )
}

export default Board;
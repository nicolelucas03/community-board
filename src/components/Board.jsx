import Card from './Card'

const Board = () => { 
    return ( 
        <div className="card-grid">
            <div className="card"><Card card='All the Light We Cannot See' author='Anthony Doerr' /></div>
            <div className="card"><Card card ='The Nightingale' author='Kristen Hannah'/></div>
            <div className="card"><Card card = 'The Pillars of the Earth' author='Ken Follett' /></div>
            <div className="card"><Card card = 'The Alice Network' author='Kate Quinn' /></div>
            <div className="card"><Card card = 'The Killer Angels' author='Michael Shaara' /></div>
            <div className="card"><Card card='Outlander' author='Diana Gabaldon' /></div>
            <div className="card"><Card card ='Angels of the Resistance' author='Noelle Salazar'/></div>
            <div className="card"><Card card = 'Sacred Hunger' author='Barry Unsworth' /></div>
            <div className="card"><Card card = 'The History of the Kelly Gang' author='Peter Carey' /></div>
            <div className="card"><Card card = 'Margaret Atwood' author='Alias Grace' /></div>
        </div>
    )
}

export default Board;
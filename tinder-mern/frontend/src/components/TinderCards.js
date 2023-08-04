import { useState } from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'

const TinderCards = () => {
    const [people, setPeople] = useState([
        {name: 'Man 1', imgUrl: 'https://randomuser.me/api/portraits/men/76.jpg'},
        {name: 'Man 2', imgUrl: 'https://randomuser.me/api/portraits/men/56.jpg'},
        {name: 'Woman 1', imgUrl: 'https://randomuser.me/api/portraits/women/23.jpg'},
        {name: 'Woman 2', imgUrl: 'https://randomuser.me/api/portraits/women/43.jpg'}
    ])

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
    }

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }

    return (
        <div className='tinderCards'>
            <div className="tinderCards__container">
                {people.map(person => (
                    <TinderCard 
                        className='swipe'
                        key={person.name}
                        onSwipe={onSwipe} 
                        onCardLeftScreen={() => onCardLeftScreen('fooBar')} 
                        preventSwipe={['up', 'down']}
                    >
                        <div style={{ backgroundImage: `url(${person.imgUrl})` }} className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}
export default TinderCards
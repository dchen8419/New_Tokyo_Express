import React from 'react'
import './Card.css'

function Card(props) {
    return (
        <div className='card-container'>
            <h1>{props.label}</h1>
            <ul>
                <div>
                    {
                        props.item.map((item)=> {
                            return (
                                [
                                    <h3 key={item.id}>
                                        {item.Name}... {item.Price}
                                    </h3>
                                ]
                            )
                        })
                    }
                </div>
            </ul>
        </div>
    )
}

export default Card
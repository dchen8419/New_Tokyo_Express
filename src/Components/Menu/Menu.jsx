import React from 'react'
import './Menu.css'
import Card from './Card/Card'

function Menu() {
    return (
        <div id="Menu" className='menu-container'>
            <div>
                <Card 
                    label='Side Items' item={
                        [
                            {
                                id: 1,
                                Name: 'Hibachi Onions & Zucchini',
                                Price: '$3.50'
                            },
                            {
                                id: 2,
                                Name: 'Fried Rice',
                                Price: '$3.50'
                            },
                            {
                                id: 3,
                                Name: 'Side Order of Teriyaki Chicken',
                                Price: '$7.50'
                            },
                            {
                                id: 4,
                                Name: 'Side ORder of Shrimp',
                                Price: '$7.95'
                            },
                            {
                                id: 5,
                                Name: 'Side Order of Steak',
                                Price: '$7.95'
                            },
                            {
                                id: 6,
                                Name: 'Side Order of Zucchini',
                                Price: '$3.50'
                            },
                            {
                                id: 7,
                                Name: 'Side Order of Broccoli',
                                Price: '$3.75'
                            },
                            {
                                id: 8,
                                Name: 'Side Order of Mushroom',
                                Price: '$3.75'
                            },
                            {
                                id: 9,
                                Name: 'Side Order of Scallops',
                                Price: '$8.25'
                            },
                            {
                                id: 10,
                                Name: 'Sugar Biscuits',
                                Price: '$3.95'
                            },
                            {
                                id: 11,
                                Name: 'Xangos',
                                Price: '5.25'
                            },
                            {
                                id: 12,
                                Name: 'Sweet Carrots',
                                Price: '$3.50'
                            },
                        ]
                    }
                />
            </div>
            <div>
                <h1>Entrees</h1>
            </div>
            <div>
                <h1>Express Bowls</h1>
            </div>
            <div>
                <h1>Children's Special</h1>
            </div>
            <div>
                <h1>Specials</h1>
            </div>
            <div>
                <h1>Sushi</h1>
            </div>
            <div>
                <h1>Beverages</h1>
            </div>
        </div>
    )
}

export default Menu
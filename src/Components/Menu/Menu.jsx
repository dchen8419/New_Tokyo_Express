import React from 'react'
import './Menu.css'
import Card from './Card/Card'

function Menu() {
    return (
        <div id="Menu" className='menu-background'>
            <div className='menu-container'>
                <h1 className='menu-title'>Menu</h1>
            </div>
            <div>
                <ul className='menu-ul-list'>
                    <div className='menu-container'>
                        <div id="Side" className='menu-container-item menu-container-item-1'>
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
                                            Name: 'Side of Teriyaki Chicken',
                                            Price: '$7.50'
                                        },
                                        {
                                            id: 4,
                                            Name: 'Side Order of Shrimp',
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
                        <div id="Entrees" className='menu-container-item menu-container-item-2'>
                            <Card 
                                label='Entrees' extras='All entrees served with fried rice, onions & zucchini' item={
                                    [
                                        {
                                            id: 13,
                                            Name: 'Hibachi Vegetables',
                                            Price: '$8.95'
                                        },
                                        {
                                            id: 14,
                                            Name: 'Teriyaki Chicken',
                                            Price: '$10.95'
                                        },
                                        {
                                            id: 15,
                                            Name: 'Hibachi Chicken',
                                            Price: '$10.95'
                                        },
                                        {
                                            id: 16,
                                            Name: 'Hibachi Shrimp',
                                            Price: '$12.95'
                                        },
                                        {
                                            id: 17,
                                            Name: 'Hibachi Chicken & Shrimp',
                                            Price: '$11.95'
                                        },
                                        {
                                            id: 18,
                                            Name: 'Teriyaki Chicken & Shrimp',
                                            Price: '$11.95'
                                        },
                                        {
                                            id: 19,
                                            Name: 'Hibachi Steak',
                                            Price: '$12.95'
                                        },
                                        {
                                            id: 20,
                                            Name: 'Hibachi Steak & Shrimp',
                                            Price: '$12.95'
                                        },
                                        {
                                            id: 21,
                                            Name: 'Hibachi Chicken & Steak',
                                            Price: '$11.95'
                                        },
                                        {
                                            id: 22,
                                            Name: 'Teriyaki Chicken & Steak',
                                            Price: '$11.95'
                                        },
                                        {
                                            id: 23,
                                            Name: 'Fried Shrimp',
                                            Price: '$9.95'
                                        },
                                        {
                                            id: 24,
                                            Name: 'Steak-Chicken-Shrimp',
                                            Price: '$12.95'
                                        },
                                    ]
                                }
                            />
                        </div>
                        <div id="Express" className='menu-container-item menu-container-item-3'>
                            <Card 
                                label='Express Bowl' extras='Served over steamed white or fried rice' item={
                                    [
                                        {
                                            id: 25,
                                            Name: 'Chicken Bowl',
                                            Price: '$7.95'
                                        },
                                        {
                                            id: 26,
                                            Name: 'Shrimp Bowl',
                                            Price: '$8.75'
                                        },
                                        {
                                            id: 27,
                                            Name: 'Steak Bowl',
                                            Price: '$8.75'
                                        },
                                        {
                                            id: 28,
                                            Name: 'Beef Bowl',
                                            Price: '$7.95'
                                        },
                                        {
                                            id: 29,
                                            Name: 'Scallop Bowl',
                                            Price: '$9.95'
                                        },
                                        {
                                            id: 30,
                                            Name: 'Vegetable Bowl',
                                            Price: '$7.50'
                                        },
                                        {
                                            id: 31,
                                            Name: 'Jumbo Shrimp Bowl',
                                            Price: '$9.95'
                                        },
                                        {
                                            id: 32,
                                            Name: 'Filet Mignon Bowl',
                                            Price: '$9.95'
                                        },
                                    ]
                                }
                            />
                        </div>
                        <div id="Children" className='menu-container-item menu-container-item-4'>
                            <Card 
                                label="Children's Special" extras='All specials served with fried rice, onions & zucchini' item={
                                    [
                                        {
                                            id: 33,
                                            Name: '7 Chicken Wings',
                                            Price: '$5.95'
                                        },
                                        {
                                            id: 34,
                                            Name: '14 Chicken Wings',
                                            Price: '$9.75'
                                        },
                                        {
                                            id: 35,
                                            Name: 'Wings & French Fries',
                                            Price: '$9.50'
                                        },
                                        {
                                            id: 36,
                                            Name: 'Fried Shrimp & French Fries',
                                            Price: '$7.25'
                                        },
                                        {
                                            id: 37,
                                            Name: 'Tenders & French Fries',
                                            Price: '$6.95'
                                        },
                                        {
                                            id: 38,
                                            Name: 'Side Order of French Fries',
                                            Price: '$3.25'
                                        },
                                        {
                                            id: 39,
                                            Name: 'Wings Combo and Rice (7)',
                                            Price: '$9.75'
                                        },
                                    ]
                                }
                            />
                        </div>
                        <div id="Special" className='menu-container-item menu-container-item-5'>
                            <Card 
                                label='Specials' extras='All specials served with fried rice, onions & zucchini' item={
                                    [
                                        {
                                            id: 40,
                                            Name: 'Jumbo Shrimp',
                                            Price: '$15.95'
                                        },
                                        {
                                            id: 41,
                                            Name: 'Jumbo Shrimp & Scallops',
                                            Price: '$16.95'
                                        },
                                        {
                                            id: 42,
                                            Name: 'Jumbo Shrimp & Steak',
                                            Price: '$14.95'
                                        },
                                        {
                                            id: 43,
                                            Name: 'Jumbo Shrimp, Scallops & Steak',
                                            Price: '$15.95'
                                        },
                                        {
                                            id: 44,
                                            Name: 'Scallops',
                                            Price: '$16.95'
                                        },
                                        {
                                            id: 45,
                                            Name: 'Scallops & Steak',
                                            Price: '$14.95'
                                        },
                                        {
                                            id: 46,
                                            Name: 'Filet Mignon & Jumbo Shrimp',
                                            Price: '$17.95'
                                        },
                                        {
                                            id: 47,
                                            Name: 'Filet Mignon',
                                            Price: '$17.95'
                                        },
                                        {
                                            id: 48,
                                            Name: 'Salmon with Noodles',
                                            Price: '$17.95'
                                        },
                                    ]
                                }
                            />
                        </div>
                        <div id="Sushi" className='menu-container-item menu-container-item-6'>
                            <Card 
                                label="Sushi" extras='All specials served with fried rice, onions & zucchini' item={
                                    [
                                        {
                                            id: 49,
                                            Name: 'Crab Roll',
                                            Price: '$4.75'
                                        },
                                        {
                                            id: 50,
                                            Name: 'California Roll',
                                            Price: '$4.75'
                                        },
                                        {
                                            id: 51,
                                            Name: 'Tuna Roll',
                                            Price: '$7.50'
                                        },
                                        {
                                            id: 52,
                                            Name: 'Shrimp Tempura Roll',
                                            Price: '$6.25'
                                        },
                                        {
                                            id: 53,
                                            Name: 'Vegetable Roll',
                                            Price: '$4.25'
                                        },
                                        {
                                            id: 54,
                                            Name: 'Tokyo Roll',
                                            Price: '$5.50'
                                        },
                                        {
                                            id: 55,
                                            Name: 'Avocado Roll',
                                            Price: '$4.25'
                                        },
                                        {
                                            id: 56,
                                            Name: 'Carolina Roll',
                                            Price: '$4.75'
                                        },
                                    ]
                                }
                            />
                        </div>
                        <div id='Beverages' className='menu-container-item menu-container-item-6'>
                            <Card 
                                label="Beverages" item={
                                    [
                                        {
                                            id: 57,
                                            Name: 'Soft Drinks',
                                            Price: '$1.99'
                                        },
                                        {
                                            id: 58,
                                            Name: 'Bottled Water',
                                            Price: '$1.99'
                                        },
                                    ]
                                }
                            />
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Menu
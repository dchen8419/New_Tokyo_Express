import React from 'react'
import './MenuBanner.css'

function MenuBanner() {
    return (
        <div className='MenuBanner-container'>
            <div>
                <a href="#Side">Side Items</a>
            </div>
            <div>
                <a href="#Entrees">Entrees</a>
            </div>
            <div>
                <a href='#Express'>Express Bowls</a>
            </div>
            <div>
                <a href='#Children'>Children's Specials</a>
            </div>
            <div>
                <a href='#Special'>Specials</a>
            </div>
            <div>
                <a href='#Sushi'>Sushi</a>
            </div>
            <div>
                <a href='#Beverages'>Beverages</a>
            </div>
        </div>
    )
}

export default MenuBanner
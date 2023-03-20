import React from 'react';
import Banner from './Banner/Banner';
import Catalog from './Catalog/Catalog';


export default function Main({dataCart, dataFavorite}) {
    return (
        <div className='main'>
            <Banner/>
            <Catalog dataCart = {dataCart} dataFavorite = {dataFavorite}/>
        </div>
    )
}

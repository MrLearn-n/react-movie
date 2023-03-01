import React from 'react';
import Banner from './Banner/Banner';
import Catalog from './Catalog/Catalog';


export default function Main() {
    return (
        <div className='container'>
            <Banner/>
            <Catalog />
        </div>
    )
}

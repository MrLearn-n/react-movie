import React from 'react'
import { useState } from 'react';
import Header from './../components/Header/Header';
import Main from './../components/Main/Main';
import Footer from './../components/Footer/Footer';
import Shopping from '../components/Shopping/Shopping';
import Favorites from '../components/Favorites/Favorites';

export default function Home() {
    const [showCartModal, setshowCartModal] = useState(false)
    const [cartData, setcartData] = useState([]);

    const [showFavoriteModal, setshowFavoriteModal] = useState(false);
    const [favoriteData, setfavoriteData] = useState([]);

    const filterArrCart = [...cartData];

    function addFavorite (item) {
        let isStatus = false;

        favoriteData.forEach(el => {
            if(el.id === item.id) {
                isStatus = true;
            }
        })

        if(!isStatus) {
            setfavoriteData([...favoriteData, item]);
        }
    }

    function addCart (item) {
        let isStatus = false;

        cartData.forEach(el => {
            if(el.id === item.id) {
                isStatus = true;
            }
        })
        
        if(!isStatus) {
            setcartData([...cartData, item]);
        }
    }

    function delCart (id) {
        setcartData(filterArrCart.filter(item => {
            return item.id !== id
        }));
    }


    function modalCartShow () {
        setshowCartModal((prev) => !prev)
    }
    

    function modalFavoriteShow () {
        setshowFavoriteModal((prev) => !prev);
    }

    return (
        <div className='Home'>
            <Header btnShowCartModal = {modalCartShow} btnShowFavoriteModal = {modalFavoriteShow}/>
            <Main dataCart  = {addCart} dataFavorite = {addFavorite}/>
            <Footer />
            {showFavoriteModal && (<Favorites info = {favoriteData} modalFavoriteClose = {modalFavoriteShow}/>)} 
            {showCartModal && (<Shopping  info = {cartData} deleteCartItem = {delCart} modalCartClose = {modalCartShow} />)}
        </div>
    )
}

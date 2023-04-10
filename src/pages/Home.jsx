import React from 'react'
import { useState, useEffect } from 'react';
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
    const filterArrFavorite = [...favoriteData];


    const [theme, setTheme] = useState('light');

    const root = document.querySelector(':root');

    const components = [
        'body-bg-color',
        'card-bg-color',
        'text-color',
        'box-border-color',
        'icon-color',
        'icon-btn-close',
    ]

    function changeTheme () {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    useEffect(() => {
        components.forEach(item => {
            root.style.setProperty (
                `--${item}-default`,
                `var(--${item}-${theme})`
            )
        })
    }, [theme])


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
            return item.id !== id;
        }));
    }

    function delFavorite (id) {
        setfavoriteData(filterArrFavorite.filter(item => {
            return item.id !== id;
        }))
    }

    function modalCartShow () {
        setshowCartModal((prev) => !prev)
    }
    

    function modalFavoriteShow () {
        setshowFavoriteModal((prev) => !prev);
    }

    return (
        <div className='home'>
            <Header 
                btnShowCartModal = {modalCartShow} 
                btnShowFavoriteModal = {modalFavoriteShow}
                cartInfo = {cartData}
                changeTheme = {changeTheme}
                theme = {theme}
            />
            <Main 
                dataCart  = {addCart} 
                dataFavorite = {addFavorite}
            />
            <Footer 
                theme = {theme}
            />
            {showFavoriteModal && 
                (<Favorites 
                    info = {favoriteData} 
                    deleteFavoriteItem = {delFavorite} 
                    modalFavoriteClose = {modalFavoriteShow}
                />)} 
            {showCartModal && 
                (<Shopping  
                    info = {cartData} 
                    deleteCartItem = {delCart} 
                    modalCartClose = {modalCartShow}
                />)}
        </div>
    )
}

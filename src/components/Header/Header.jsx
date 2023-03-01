import React from 'react'
import Logo from './../../assets/header/headerLogo.svg';
import {AiOutlineSearch} from 'react-icons/ai';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {BsFillSunFill} from 'react-icons/bs';
import {BiBookmark} from 'react-icons//bi';
import style from './Header.module.css';

export default function Header() {
    return (
        <div className={style.flex_content}>
            <div className=''>
                <img src={Logo}/>
            </div>
            <div className={style.search}>
                <input type='search' placeholder="Поиск" className={style.input} />
                <AiOutlineSearch className={style.searchIcon} />
            </div>
            <div className={style.borderIcon}>
                <AiOutlineShoppingCart className={style.cartIcon}/>
            </div>
            <div className={style.borderIcon}>
                <BsFillSunFill className={style.sunIcon}/>
            </div>
            <div className={style.favoriteBtn}>
                <BiBookmark className={style.favoriteIcon}/>
                <p className={style.txt}>Избранное</p>
            </div>
        </div>
    )
}

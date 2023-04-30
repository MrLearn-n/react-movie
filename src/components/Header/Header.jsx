import React, { useEffect, useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import {BsFillSunFill} from 'react-icons/bs';
import {BiBookmark} from 'react-icons//bi';

import style from './Header.module.css';
import { Logo } from './Logo';
import { useDispatch } from 'react-redux';
import { filter } from '../../store/slice/dataSlice';

export default function Header({btnShowCartModal, btnShowFavoriteModal, cartInfo, changeTheme, theme}) {    
    const [searchValue, setSearchValue] = useState('');
    const disaptch = useDispatch();
    const handelSearchValue = (e) => {
        setSearchValue(e.target.value);
    }

    useEffect(() => {
        disaptch(filter(searchValue));
    }, [searchValue])

    return (
        <div className={style.flex_content}>
            {theme === 'light' ? 
                <Logo fill='black' /> 
                : 
                <Logo fill='white' />
            }
            <div className={style.search}>
                <input 
                    type='search' 
                    placeholder="Поиск" 
                    className={style.input}
                    value={searchValue} 
                    onChange={handelSearchValue}
                    
                />
                <AiOutlineSearch className={style.searchIcon} />
            </div>
            <div className={style.borderIcon}>
                <AiOutlineShoppingCart className={style.cartIcon} onClick = {() => btnShowCartModal()}/>
                {cartInfo.length > 0
                    ? 
                        <div className={style.counter}>
                        <p>{cartInfo.length}</p>
                        </div>    
                    :
                        <div className=''> </div>
            }
            </div>
            <div className={style.borderIcon} onClick = {changeTheme}>
                <BsFillSunFill className={style.sunIcon}/>
            </div>
            <div className={style.favoriteBtn} onClick = {() => btnShowFavoriteModal()}>
                <BiBookmark className={style.favoriteIcon} />
                <p className={style.txt}>Избранное</p>
            </div>
        </div>
    )
}

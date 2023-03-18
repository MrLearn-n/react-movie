import React from 'react';
import {AiOutlineHeart} from 'react-icons/ai';
import style from './Movie.module.css';

export default function Movie ({data, dataCart, dataFavorite}) {
    return (
        <div className={style.movie}>
            <img src={require(`./../../../../assets/main/${data.img}`)} alt={data.name} draggable={false}/>
            <p className={style.name}>{data.name}</p>
            <p className={style.decription}>{data.decription}</p>    
            <div className={style.footer_card}>
                <p className={style.price}>{data.price}</p>
                <div className={style.btns} >
                    <div className = {style.btn_cart} onClick = {e => dataCart(data)}>
                        <p>В корзину</p>
                    </div>
                    <AiOutlineHeart className={style.heartIcon} onClick = {e => dataFavorite(data)}/>
                </div>
            </div>
        </div>
    )
}


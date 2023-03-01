import React from 'react';
import {AiOutlineHeart} from 'react-icons/ai';
import style from './Movie.module.css';

export default function Movie ({data}) {
    return (
        <div className={style.movie}>
            <img src={require(`./../../../../assets/main/${data.img}`)} alt={data.name} draggable={false}/>
            <p className={style.name}>{data.name}</p>
            <p className={style.decription}>{data.decription}</p>    
            <div className={style.footer_card}>
                <p className={style.price}>{data.price}</p>
                <div className={style.btns}>
                    <p className={style.btn_cart}>В корзину</p>
                    <AiOutlineHeart className={style.heartIcon}/>
                </div>
            </div>
        </div>
    )
}


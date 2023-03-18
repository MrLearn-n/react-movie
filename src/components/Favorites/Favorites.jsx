import React from 'react';
import style from './Favorites.module.css';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';

export default function Favorites({info, deleteFavoriteItem, modalFavoriteClose}) {
    return (
        <div className={style.favorites}>
            <div className={style.favorites__body}>
                <h4 className={style.favorites__body_title}>Избранное</h4>
                {info.length > 0 
                    ?   <div className=''>
                            <p className={style.favorites__body_sbtitle}>Вот это выбор!</p>
                            <div className={style.favorites__list}>
                                {info.map(({name, img, id}) => (
                                    <div className={style.favorites__item} key={id}>
                                        <div className={style.favorites__item_img}>
                                            <img src={require(`./../../assets/main/${img}`)} alt={name} />
                                        </div>
                                        <div className=''>
                                            <p className={style.favorites__item_name}>{name}</p>
                                            <div className={style.favorites__item_btn} onClick = {() => deleteFavoriteItem(id)}>
                                                <RiDeleteBin7Line className={style.deleteIconBtn}/>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    :   <p className={style.favorites__body_sbtitle}>Неужели тут пусто? Нужно срочно добавить ваши любимые фильмы</p>  
                }
                <div className={style.favorites__closeBtn}>
                    <AiOutlineClose className={style.closeIconBtn} onClick = {() => modalFavoriteClose()}/>
                </div>
            </div>
        </div>
    )
}

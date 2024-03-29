import React from 'react'
import style from './Shopping.module.css';
import { RiDeleteBin7Line } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';

export default function Shopping({info, deleteCartItem, modalCartClose}) {
    
    let sum = 0;
    info.forEach(element => {
        sum += Number.parseFloat(element.price);
    });

    function buyMsg () {
        alert('Поздравляем с покупкой! Приятного просмотра!');
    }

    return (
        <div className={style.cart}>
            <div className={style.cart__body}>
                <h4 className={style.cart__body_title}>Корзина</h4>
                {info.length > 0 
                    ?   <div className={style.cart__wrapper}>
                            <p className={style.cart__body_sbtitle}>Вы выбрали несколько фильмов! Поздравляем</p>
                            <div className={style.cart__list}>
                                {info.map(({name, img, price, id}) => (
                                    <div className={style.cart__item} key={id}>
                                        <div className={style.cart__content}> 
                                            <div className={style.cart__content_info}>
                                                <div className={style.cart__content_img}>
                                                    <img src={require(`./../../assets/main/${img}`)} alt={name} />
                                                </div>
                                                <p className={style.cart__content_name}>{name}</p>
                                            </div>
                                            <div className={style.cart__content_price}>
                                                <p>{price}</p>
                                            </div>
                                        </div>
                                        <div className={style.cart__item_btn}> 
                                            <RiDeleteBin7Line className={style.deleteIconBtn} onClick = {() => deleteCartItem(id)}/>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className = {style.cart_buyBtn} onClick = {buyMsg}>
                                    <p>Оплатить ({new Intl.NumberFormat().format(sum)})</p>
                            </div>
                        </div>
                    :   <p className={style.cart__body_sbtitle}>Ваша корзина пуста. Самое время её заполнить</p>  
                }
                <div className={style.cart__closeBtn} onClick = {() => modalCartClose()}>
                    <AiOutlineClose className={style.closeIconBtn}/>
                </div>
            </div>
        </div>
    )
}

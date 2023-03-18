import axios from 'axios';
import React from 'react'
import Movie from './Movie/Movie';
import { useEffect, useState } from 'react';
import style from './Catalog.module.css'

export default function Catalog({dataCart, dataFavorite}) {
    const [state, setState] = useState([]);

    // console.log(cart);

    useEffect(() => {
        const getData = async () => {
            await axios.get('./data.json')
            .then (res =>  {
                setState(res.data)
            })
            .catch (e => {
                console.log(e.message);
            })
        }

        getData();
    }, [])

    return (
        <div className={style.catalog_body}>
            <h1>Популярно сейчас</h1>
            <div className={style.row}>
                {state.map((item, id) => {
                    return <Movie data={item} key={id} dataCart = {dataCart} dataFavorite = {dataFavorite} />
                })}
            </div>
        </div>
    )
}

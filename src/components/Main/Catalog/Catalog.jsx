import React from 'react'
import Movie from './Movie/Movie';
import { useSelector } from 'react-redux';
import style from './Catalog.module.css'


export default function Catalog({ dataCart, dataFavorite }) {
    const { items, filterList } = useSelector(({ data }) => data);


    return (
        <div className={style.catalog_body}>
            <h1 className={style.txt}>Популярно сейчас</h1>
            <>
                {filterList.length > 0
                    ? (
                        <div className={style.row}>
                            {filterList.map((item, id) => {
                                return <Movie data={item} key={id} dataCart={dataCart} dataFavorite={dataFavorite} />
                            })}
                        </div>
                    )
                    : (
                        <div className={style.row}>
                            {items.map((item, id) => {
                                return <Movie data={item} key={id} dataCart={dataCart} dataFavorite={dataFavorite} />
                            })}
                        </div>
                    )
                }
            </>
        </div>
    )
}

import React from 'react'
import bannerLogo from './../../../assets/main/bannerLogo.svg'
import style from './Banner.module.css';

import bannerImg1 from './../../../assets/main/bannerImg1.png';
import bannerImg2 from './../../../assets/main/bannerImg2.png';
import bannerImg3 from './../../../assets/main/bannerImg3.png';

//настроить получение изображений через axios

export default function Banner() {
    return (
        <div className={style.banner_body}>
            <div className={style.banner_content}>
                <div className={style.banner_text}>
                    <img src={bannerLogo} />
                    <h1 className={style.txt}>Выбирайте те фильмы, которые хотите посмотреть</h1>
                </div>
                <div className={style.banner_img}>
                    <img src={bannerImg1} />
                    <img src={bannerImg2} />
                    <img src={bannerImg3} />
                </div>
            </div>
        </div>
    )
}
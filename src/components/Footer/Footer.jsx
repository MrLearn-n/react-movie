import React from 'react';
import style from './Footer.module.css';
import { Logo } from '../Header/Logo';
import { SocialVkIcon } from './SocialVkIcon';
import { SocialTgIcon } from './SocialTgIcon';

export default function Footer({theme}) {
    return (
        <div className="footer">
            <div className={style.flex_content}>
            <div className='footer__logo'>
                {theme === 'light' ? 
                <Logo fill='black' /> 
                : 
                <Logo fill='white' />
            }
                <p className={style.footer__logo_sbtitle}>Фильмы на ваш выбор</p>
            </div>
            <div className={style.flex_content}>
                <div className={style.footer__social_vk}>
                    {theme === 'light' ? 
                    <SocialVkIcon fill='black' /> 
                    : 
                    <SocialVkIcon fill='white' />
                    } 
                </div>
                <div className={style.footer__social_telegram}>
                    {theme === 'light' ? 
                    <SocialTgIcon fill='black' /> 
                    : 
                    <SocialTgIcon fill='white' />
                    }
                </div>
            </div>
        </div>
        </div>
    )
}

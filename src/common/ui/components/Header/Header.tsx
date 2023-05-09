import React from 'react';
import s from './Header.module.css'
import {v1} from "uuid";
import telegramIcon from './../../assets/icons/messengers/telegram-icon.png'
import whatsUpIcon from './../../assets/icons/messengers/whatsup-icon.png'
import phoneIcon from './../../assets/icons/messengers/phone-icon.png'
import {LabelIcons} from "common/ui/components/Header/Label/LableIcons/LabelIcons";
import {LabelText} from "common/ui/components/Header/Label/LableText/LabelText";
import {Links} from "common/ui/components/Header/Links/Links";
import {MessengersLinks} from "common/ui/components/Header/MessengersLinks/MessengersLinks";


export type NavLinksType = {
   id: string
   title: string
}
export type MessengersLinksType = {
   id: string
   title: string
   icon: string
}

export const Header = () => {
   const navLinks: NavLinksType[] = [
      {id: v1(), title: 'Услуги'},
      {id: v1(), title: 'Виджеты'},
      {id: v1(), title: 'Интеграции'},
      {id: v1(), title: 'Кейсы'},
      {id: v1(), title: 'Сертификаты'},
   ]
   const messengersLinks: MessengersLinksType[] = [
      {id: v1(), title: 'telegram', icon: telegramIcon},
      {id: v1(), title: 'whats up', icon: whatsUpIcon},
      {id: v1(), title: 'phone', icon: phoneIcon},
   ]
   return (
      <div className={s.headerContainer}>
         <div className={s.label}>
            <LabelIcons/>
            <LabelText/>
         </div>

         <div className={s.navLinks}>
            <Links navLinks={navLinks}/>
         </div>

         <div className={s.phoneNumber}>
            <a href={'#'}>
               +7 555 555-55-55
            </a>
         </div>

         <div className={s.messengers}>
            <MessengersLinks messengersLinks={messengersLinks}/>
         </div>
      </div>
   );
}


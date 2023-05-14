import React from 'react';
import {v1} from "uuid";
import s from './Footer.module.css'
import telegramIcon from "./../../assets/icons/messengers/telegram-icon.png";
import whatsUpIcon from "./../../assets/icons/messengers/whatsup-icon.png";
import phoneIcon from "./../../assets/icons/messengers/phone-icon.png";
import {MessengersLinksType} from "common/ui/components/Header/Header";


type FooterListType = {
   id: string
   title: string
   subTitle: SubTitleType[] | undefined
}
type SubTitleType = {
   firstPacks?: FirstPacksType[]
   secondPacks?: FirstPacksType[]
   contactInfo?: ContactInfoType
}
type FirstPacksType = {
   id: string | undefined
   name: string | undefined
}
type ContactInfoType = {
   phoneNumber: string
   messengersLinks: MessengersLinksType[]
   address: string
}

export const Footer = () => {
   const footerList: FooterListType[] = [
      {
         id: v1(),
         title: 'О компании',
         subTitle: [
            {
               firstPacks: [
                  {id: v1(), name: 'Партнёрская программа'},
                  {id: v1(), name: 'Вакансии'}
               ]
            }
         ]
      },
      {
         id: v1(),
         title: 'Меню',
         subTitle:
            [
               {
                  firstPacks: [
                     {id: v1(), name: 'Расчёт стоимости'},
                     {id: v1(), name: 'Услуги'},
                     {id: v1(), name: 'Виджеты'},
                     {id: v1(), name: 'Интеграции'},
                     {id: v1(), name: 'Наши клиенты'},
                  ],
                  secondPacks: [
                     {id: v1(), name: 'Кейсы'},
                     {id: v1(), name: 'Благодарственные письма'},
                     {id: v1(), name: 'Сертификаты'},
                     {id: v1(), name: 'Блог на Youtube'},
                     {id: v1(), name: 'Вопрос / Ответ'},
                  ]
               }
            ]
      },
      {
         id: v1(),
         title: 'Контакты',
         subTitle:
            [
               {
                  contactInfo:
                     {
                        phoneNumber: '+7 555 555-55-55',
                        messengersLinks:
                           [
                              {id: v1(), title: 'telegram', icon: telegramIcon},
                              {id: v1(), title: 'whats up', icon: whatsUpIcon},
                              {id: v1(), title: 'phone', icon: phoneIcon},
                           ],
                        address: 'Москва, Путевой проезд 3с1, к 902'
                     }

               },
            ]
      },
   ]
   const companyAndMenuList = footerList.filter(list => list.title !== 'Контакты')
   const contactsList = footerList.filter(list => list.title === 'Контакты')


   return (
      <>
         <div className={s.footer}>
            <div className={s.companyAndMenu}>
               {
                  companyAndMenuList.map(cm => {
                     const firstPacksSubTitle = cm.subTitle?.map(sub => sub.firstPacks?.map(f =>
                        <a href={f.name} className={s.subTitle}>{f.name}</a>))
                     const secondPacksSubTitle = cm.subTitle?.map(sub => sub.secondPacks?.map(sec =>
                        <a href={sec.name} className={s.subTitle}>{sec.name}</a>))
                     return (
                        <div key={cm.id}>
                           <div className={s.companyAndMenuTitle}>
                              <span>{cm.title}</span>
                           </div>
                           <div>
                              {cm.title === 'Меню' ?
                                 <div className={s.menuSubTitle}>
                                    <div className={s.firstPacksSubTitle}>
                                       {firstPacksSubTitle}
                                    </div>
                                    <div className={s.secondPacksSubTitle}>
                                       {secondPacksSubTitle}
                                    </div>
                                 </div>
                                 : <div className={s.companySubTitle}>
                                    {firstPacksSubTitle}
                                 </div>
                              }

                           </div>
                        </div>
                     )
                  })}
            </div>
            <div>
               {
                  contactsList.map((c) => {
                     const number = c.subTitle?.map(sub => sub.contactInfo?.phoneNumber)
                     const messengersLinks = c.subTitle?.map(sub => sub.contactInfo?.messengersLinks.map((mes, index) =>
                        <div key={index} className={s.contactLink}>
                           <a href={mes.title}>
                              <img src={mes.icon}
                                   alt={mes.title}/>
                           </a>
                        </div>))
                     const address = c.subTitle?.map(sub => sub.contactInfo?.address)
                     return (
                        <div key={c.id}>
                           <div className={s.contactsTitle}>
                              <span>{c.title}</span>
                           </div>
                           <div className={s.contactsSubTitle}>
                              <div className={s.phoneNumber}><span>{number}</span></div>
                              <div className={s.contactLinks}>{messengersLinks}</div>
                              <div className={s.address}><span>{address}</span></div>
                           </div>
                        </div>
                     )
                  })
               }
            </div>
         </div>
         <div className={s.confidentiality}>
            <div className={s.privileges}><span>©WELBEX 2022. Все права защищены.</span></div>
            <div className={s.confPolitic}><a href={'politic-confidence'}>Политика
               конфиденциальности</a></div>
         </div>
      </>
   );
}

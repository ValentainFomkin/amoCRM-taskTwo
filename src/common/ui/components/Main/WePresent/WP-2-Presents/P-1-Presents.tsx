import React from 'react';
import {v1} from "uuid";
import s from './P-1-Presents.module.css'


type PresentsType = {
   id: string
   title: string
   subTitle: string
}
export const P1Presents = () => {
   const presents: PresentsType[] = [
      {id: v1(), title: 'Виджеты', subTitle: '30 готовых решений'},
      {id: v1(), title: 'Skype Аудит', subTitle: 'отдела продаж и CRM системы'},
      {id: v1(), title: 'Dashboard', subTitle: 'с показателями вашего бизнеса'},
      {id: v1(), title: '35 дней', subTitle: 'использования CRM'},
   ]


   return (
      <div className={s.containerPresents}>

         <div className={s.leftPresentsBlock}>
            <div className={s.block}>
               <div className={s.title}><span>Виджеты</span></div>
               <div className={s.subTitle}><span>30 готовых решений</span></div>
            </div>
            <div className={s.block}>
               <div className={s.title}><span>Skype Аудит</span></div>
               <div className={s.subTitle}>
                  <span>отдела продаж и CRM системы</span></div>
            </div>
         </div>

         <div className={s.rightPresentsBlock}>
            <div className={s.block}>
               <div className={s.title}><span>Dashboard</span></div>
               <div className={s.subTitle}>
                  <span>с показателями вашего бизнеса</span></div>
            </div>
            <div className={s.block}>
               <div className={s.title}><span>35 дней</span></div>
               <div className={s.subTitle}><span>использования CRM</span></div>
            </div>
         </div>

      </div>

   );
};


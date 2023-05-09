import React from 'react';
import s from "./MakeMoreMoney.module.css";


export const MakeMoreMoney = () => {
   return (
      <div className={s.container}>
         <div className={s.title}>
            <span>Зарабатывайте больше</span>
         </div>
         <div className={s.subTitle}>
            <span>с WELBEX</span>
         </div>
         <div className={s.text}>
            <span>Развиваем и контролируем продажи за вас</span>
         </div>
      </div>
   );
};


import React from 'react';
import s from './GetAdviceButton.module.css'


export const G1GetAdviceButton = () => {
   return (
      <div className={s.button}>
         <button type={'button'}>
            Получить консультацию
         </button>
      </div>
   );
};


import React from 'react';
import s from "./WP-Title.module.css";


export const T1Title = () => {
   return (
      <div className={s.wePresent}>
         <span className={s.wePresentText}>
            Вместе с <span className={s.wePresentTextColor}>
                 бесплатной консультацией</span> мы дарим:
          </span>
      </div>
   );
};


import React from 'react';
import s from 'common/ui/components/Boubles/Boubles.module.css'


export const Boubles = () => {

   return (
      <div className={s.boubles}>
         <div className={s.purple}></div>
         <div className={s.redBig}></div>
         <div className={s.redSmall}></div>

      </div>
   );
};


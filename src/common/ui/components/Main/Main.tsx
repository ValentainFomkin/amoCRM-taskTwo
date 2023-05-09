import React from 'react';
import s from './Main.module.css'
import {MakeMoreMoney} from "common/ui/components/Main/MakeMoreMoney/MakeMoreMoney";
import {WePresent} from "common/ui/components/Main/WePresent/WePresent";


export const Main = () => {

   return (
      <div className={s.main}>
         <MakeMoreMoney/>
         <WePresent/>
      </div>
   );
}


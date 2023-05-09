import React, {FC} from 'react';
import s from "./MessengersLinks.module.css";
import {MessengersLinksType} from "common/ui/components/Header/Header";


type MessengersLinksPropsType = {
   messengersLinks: MessengersLinksType[]
}
export const MessengersLinks: FC<MessengersLinksPropsType> = (props) => {
   const {messengersLinks} = props
   return (
      <>
         {messengersLinks.map(mes => {
            return (
               <div key={mes.id} className={s.messengersLinks}>
                  <a href={mes.title}>
                     <img src={mes.icon} alt={mes.title}/>
                  </a>
               </div>
            )
         })}
      </>
   );
};


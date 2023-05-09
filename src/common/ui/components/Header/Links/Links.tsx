import React, {FC} from 'react';
import s from "./Links.module.css";
import {NavLinksType} from "common/ui/components/Header/Header";


type LinksPropsType = {
   navLinks: NavLinksType[]
}
export const Links: FC<LinksPropsType> = (props) => {
   const {navLinks} = props
   return (
      <>
         {navLinks.map(link => {
            return (
               <div key={link.id} className={s.link}>
                  <a href='#'>{link.title}</a>
               </div>
            )
         })}
      </>
   );
};


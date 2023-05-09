import React from 'react';
import s from "./LabelIcons.module.css";
import labelIcon from "common/ui/assets/icons/logo/lable-icon.png";
import labelName from "common/ui/assets/icons/logo/lable-name.png";


export const LabelIcons = () => {
   return (
      <div className={s.labelIcons}>
         <div className={s.labelIconsIcon}>
            <a href='#'><img src={labelIcon} alt="lable-icon.png"/></a>
         </div>
         <div className={s.labelIconsName}>
            <a href='#'><img src={labelName} alt="lable-name.png"/></a>
         </div>
      </div>
   );
};


import React from 'react';
import {T1Title} from "common/ui/components/Main/WePresent/WP-1-Title/T-1-Title";
import s from "common/ui/components/Main/Main.module.css";
import {P1Presents} from "common/ui/components/Main/WePresent/WP-2-Presents/P-1-Presents";
import {
   G1GetAdviceButton
} from "common/ui/components/Main/WePresent/WP-3-GetAdviceButton/G-1-GetAdviceButton";


export const WePresent = () => {
   return (
      <div className={s.wePresent}>
         <T1Title/>
         <P1Presents/>
         <G1GetAdviceButton/>
      </div>
   );
};


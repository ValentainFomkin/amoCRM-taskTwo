import React from 'react';
import {Header} from "common/ui/components/Header/Header";
import {Main} from "common/ui/components/Main/Main";
import {Footer} from "common/ui/components/Footer/Footer";
import s from './Wrapper.module.css'


export const Wrapper = () => {
   return (
      <div className={s.wrapper}>
         <Header/>
         <Main/>
         <Footer/>
      </div>
   );
};


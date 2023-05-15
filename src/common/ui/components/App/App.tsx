import React from 'react';
import s from 'common/ui/components/App/App.module.css'
import {Boubles} from "common/ui/components/Boubles/Boubles";
import {Wrapper} from "common/ui/components/Wrapper/Wrapper";
import {HashRouter} from "react-router-dom";


export const App = () => {
   return (
      <div className={s.app}>
         <HashRouter>
            <span className={s.redBuble}></span>
            {/*<header className={s.header}>header</header>*/}
            {/*<main className={s.main}>main</main>*/}
            {/*<footer className={s.footer}>footer</footer>*/}
            <Boubles/>
            <Wrapper/>
         </HashRouter>
      </div>
   );
}
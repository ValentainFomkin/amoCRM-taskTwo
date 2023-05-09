import React from 'react';
import s from 'common/ui/components/App/App.module.css'
import {Boubles} from "common/ui/components/Boubles/Boubles";
import {Wrapper} from "common/ui/components/Wrapper/Wrapper";


export const App = () => {
   return (
      <div className={s.app}>
         {/*<header className={s.header}>header</header>*/}
         {/*<main className={s.main}>main</main>*/}
         {/*<footer className={s.footer}>footer</footer>*/}
         <Boubles/>
         <Wrapper/>
      </div>
   );
}


import React from 'react';
import s from "common/ui/components/Footer/Footer.module.css";


const Aaa = () => {
   return (
      <div className={s.footer}>
         <div className={s.compMenu}>
            <div>
               <div>
                  О компании
               </div>
               <div>
                  Партнёрская программа
               </div>
               <div>
                  Вакансии
               </div>
            </div>
            <div className={s.main}>
               <div>Меню</div>
               <div className={s.oneTwo}>
                  <div className={s.one}>
                     <div> 111111111</div>
                     <div> 111111111</div>
                     <div> 111111111</div>
                     <div> 111111111</div>
                     <div> 111111111</div>
                  </div>
                  <div className={s.two}>
                     <div> 22222222</div>
                     <div> 22222222</div>
                     <div> 22222222</div>
                     <div> 22222222</div>
                     <div> 22222222</div>
                  </div>
               </div>
            </div>
         </div>
         <div>Контакты</div>
      </div>
   );
};

export default Aaa;
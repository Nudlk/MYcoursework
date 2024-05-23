import './components/header/header-styles.css';
import './App.css'
import Header from './components/header/header.js';
import Reviews from '/workspaces/coursework-Gubin/guild-cheresnya/src/content/ReviewData.js';
//import MainList from './components/main/main.js';
//import { dataForList } from './content/mainData';
//import Button from './components/button/button.js';
import Footer from './components/footer/footer.js';
//import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div>
        <h1>Приветсвуем на официальном сайте<br/>"Гильдия Черешня!"</h1>
        </div>
        <div class = 'backi'>
          <div class = 'Rules1'>
          Правила пользования сайтом:
                <ul>
                    <li>Уважать всех членов гильдии;</li>
                    <li>Обьктивно оценивать обзоры;</li>
                    <li>Не постить в новости ненужную ерунду;</li>
                    <li>Не давать ссылку на сайт людям не являющиеся членами гильдии;</li>
                    <li>Вслучае проблем с сайтом обратиться в поддержку.</li>
                </ul>
          </div>
          <div class = 'Rules2'>
          Правила пользования<br/>дискорд сервером:
                <ul>
                    <li>Уважать всех членов гильдии;</li>
                    <li>Не спамить;</li>
                    <li>Уважать личные границы учатников;</li>
                    <li>В случае возниквновения проблем писать админу;</li>
                    <li>Не говорить о гильдии.</li>
                </ul>
          </div>
        </div>
        <h1>О сайте:</h1>
        <h3>Данный сайт создаётся с целью закрытия курсовой работы и не является конечным вариантом официального сайта Гильдии Черешня. В будующем данный сайт будет иметь связь с базами данный благодаря чему можно будет увеличить его безопасность, а также расширить его функционал, помимо этого планируется система профилей и заход на сайт через Discord API всё это будет происходить вместе с редизайном сайта и привоечением большего колличества людей для работы над ним</h3>
        <div><Reviews /></div>
      </main>
      <div>
      <Footer />
      </div>
    </div>
  );
}

export default App;

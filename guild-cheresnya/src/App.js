import './components/header/header-styles.css';
import './App.css'
import Header from './components/header/header.js';
import MainList from './components/main/main.js';
import { dataForList } from './content/mainData';
import Button from './components/button/button.js';
import Footer from './components/footer/footer.js';
import { useState } from 'react';

function App() {
  const [contentFromButton, setNewContent] = useState('About us');
  //let contentFromButton = 'About us'
  const handleClick = (prop) => {
    console.log(prop);
    setNewContent(prop);
  }
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
        <div>
          <h1>О сайте:</h1>
        </div>
        <Button onCLick = {() => handleClick('prop1')}>Item 1</Button>
        <Button onCLick = {() => handleClick('prop2')}>Item 2</Button>
        <Button onCLick = {() => handleClick('prop3')}>Item 3</Button>
        <p>{dataForButtons[contentFromButton]}</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;

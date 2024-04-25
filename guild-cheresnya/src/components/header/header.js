//import './header-styles.css'
import logo from './../../logo.svg';
import { useState } from 'react';

export default () => {
    const [use, setNow] = useState(new Date());

    setInterval(() => setNow(new Date()), 1000)
    return (
    <header>
        <img src={logo} alt="logo"></img>
        <nav>
          <ul>
            <li><a class="Главная" href="Guild.js">Главная</a></li>
            <li><a class="Новости" href="News.js">Новости</a></li>
            <li><a class="Обзоры" href="Review.js">Обзоры</a></li>
            <li><a class="Вики" href="Wiki.js">Вики</a></li>
            <li><a class="Профиль" href="Profile.js">Профиль</a></li>
          </ul>
        </nav>
        <span>Time now: {(new Date()).toLocaleTimeString()}</span>
      </header>)
}
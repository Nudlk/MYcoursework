//import './header-styles.css';
import { useState } from 'react';

export default () => {
    const [use, setNow] = useState(new Date());

    setInterval(() => setNow(new Date()), 1000)
    return (
    <header>
        <nav>
          <ol>
            <li><a href="Guild.js">Главная</a></li>
            <li><a href="News.js">Новости</a></li>
            <li><a href="Review.js">Обзоры</a></li>
            <li><a href="Wiki.js">Вики</a></li>
            <li><a href="Profile.js">Профиль</a></li>
            <li><a>📅</a></li>
            <li>
              <form>
              <input type="search" placeholder="Поиск:"/>
              </form>
            </li>
          </ol>
        </nav>
        <span>Время: {(new Date()).toLocaleTimeString()}</span>
      </header>)
}
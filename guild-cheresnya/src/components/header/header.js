//import './header-styles.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, link } from "react-router-dom";
import Main from '/workspaces/coursework-Gubin/guild-cheresnya/src/pages/Main.js';
import News from '/workspaces/coursework-Gubin/guild-cheresnya/src/pages/News.js';
import Reviews from '/workspaces/coursework-Gubin/guild-cheresnya/src/pages/Reviews.js';
import Wiki from '/workspaces/coursework-Gubin/guild-cheresnya/src/pages/Wiki.js';
import Profile from '/workspaces/coursework-Gubin/guild-cheresnya/src/pages/Profile.js';

export default () => {
    const [use, setNow] = useState(new Date());

    setInterval(() => setNow(new Date()), 1000)
    return (
    <>
    <header>
        <nav>
          <ol>
            <li><a href="/">Главная</a></li>
            <li><a href="/news">Новости</a></li>
            <li><a href="/reviews">Обзоры</a></li>
            <li><a href="/wiki">Вики</a></li>
            <li><a href="/profile">Профиль</a></li>
            <li><a>📅</a></li>
            <li>
              <form>
              <input type="search" placeholder="Поиск:"/>
              </form>
            </li>
          </ol>
        </nav>
        <span>Время: {(new Date()).toLocaleTimeString()}</span>
    </header>
      <Router>
    <Routes>
      <Route exact path="/" element={<Main/>}/>
      <Route exact path="/news" element={<News/>}/>
      <Route exact path="/reviews" element={<Reviews/>}/>
      <Route exact path="/wiki" element={<Wiki/>}/>
      <Route exact path="/profile" element={<Profile/>}/>
    </Routes>
  </Router>
  </>
)
}
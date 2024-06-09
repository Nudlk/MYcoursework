import React, { Component } from 'react'
import '/workspaces/coursework-Gubin/guild-cheresnya/src/pages/News.css';

export default class News extends Component {
    render() {
        return (
            <div className='backside'>
                <div className='News'>
                    <div className='News_title'>Nightmer Kart вышел в Steam</div>
                    <img src='images/NewsImg/NigtmerCart.JPG'/>
                    <div className='inf'>
                        <div>Опубликовано:<br/>Doladar</div>
                        <div>Дата публикации:<br/>06.06.2024</div>
                    </div>
                    <div className='cont'>Если кто не в курсе, это типа Mario Kart, но в стилистике димейка Bloodborne. Он бесплатен и есть соло-кампания, но можно играть и просто в 4-м, правда только через "steam remote play", так что если есть желающие, можем сегодня зарубиться, правда играется он довольно специфически.
                    Наличие геймпада, желательно</div>
                </div>
                <div className='News'>
                    <div className='News_title'>Бесплатная игра от Landfall games</div>
                    <img src='images/NewsImg/CW.JPG'/>
                    <div className='inf'>
                        <div>Опубликовано:<br/>Doladar</div>
                        <div>Дата публикации:<br/>01.04.2024</div>
                    </div>
                    <div className='cont'>до 2 апреля, можно бесплатно забрать новую игру от создателей TABS, видимо, это что-то по типу Phasmophobia и Company, но про видеосъёмку различных стрёмных мест и создания тем самым любительских фильмов</div>
                </div>
            </div>
        )
    }
}
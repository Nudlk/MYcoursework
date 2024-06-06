import { useState } from 'react';
import '/workspaces/coursework-Gubin/guild-cheresnya/src/pages/Reviews.css';
import Modal from "/workspaces/coursework-Gubin/guild-cheresnya/src/components/modal/modal.js";

export default () => {
    const [modalActive, setModalActive] = useState(false);
    const [modalParams, setModalParams] = useState({ imageRew: '', name: '', obzor: '', grade: '', who: '', date: '' });
    const handleModalOpen = (imageREW, name, obzor, grade, who, date) => {
        setModalParams({ imageREW, name, obzor, grade, who, date });
        setModalActive(true);
    };
    return (
        <div class='backside'>
        <div class="Rew" >
            <div onClick={() => handleModalOpen('images/Castle.jpg', 'Castlevania:Harmony of Dissonance',
                'Пока что лучшая игра на GBA, что я играл, для своего времени сделано супер достойно. В этой части Каслвании предстоит исследовать замок у которого есть отраженная сторона. В ней меняются раннее исследованные локации: появляются дополнительные проходы, новые монстры, предметы и даже боссфайты. Как по мне, это очень здоровски реализованный бэктрекинг. Очень круто сделана система заклинаний. Привычные крест, библия, святая вода, топор и нож полностью меняются под воздействием стихийных магических книг.  Дизайн локаций восхитителен. Даже забываешь, что действия игры разворачиваются в замке Дракулы. Пещеры, часовая башня, канализации, кристальный грот, кладбища, залы, мистические иллюзии и куча всего. Это сильно отличает Каслванию от того же однотипного и строго выдержанного Метроида.',
                '8', 'Tijoe', '10.07.2020'
            )}>
                <img src="images/Castle.jpg"alt="Castlevania"/>
                <div>Castlevania: HoD</div>
            </div>
            <div onClick={() => handleModalOpen('images/pvz.JPG', 'Plants vs Zombies',
                'Шедевр инди-сцены. Одна из лучших Tower Defense игр, которую сейчас доят капиталистические корпорации. Чудесное приключение про растения и тактику прекрасно сохранилось и играется так же хорошо, как в момент своего выхода. Масса различных юнитов под разные ситуации, особые игровые условия на уровнях, специальные мини-игры и сад дзен. Отличная реиграбельность на достижениях, челленджах и разблокируемом контенте. Стримы были суперские, так что в свое время забурился с головой. Сейчас без кринжа вряд ли посмотрю записи.',
                '10', 'Tijoe', '16.07.2022'
            )}>
                <img src="images/pvz.JPG"alt="PvZ"/>
                <div>Plants vs Zombies</div>
            </div>
            <div onClick={() => handleModalOpen('images/ROR2.JPG', 'Risk of Rain 2',
                'У самой игры концепт достаточно прост, ты появляешься в локации, убиваешь мобов, получаешь деньги, открываешь за эти деньги сундуки и получаешь предметы, с этими предметами ты идёшь к телепорту, для прохождения которого надо простоять в зоне его действия некоторое время и убить босса, который заспавнится при начале зарядки. Зарядив телепорт ты отправляешься на следующую локацию, каждая из которых имеет свои особенности и нюансы. Оно было бы очень банально если бы не таймер, с течением которого игра становится сложнее. От игрока требуется самому определять, когда ему стоит идти заряжать телепорт, а когда стоит ещё поискать лут. Этот таймер и является причиной, из-за которой в эту игру можно наиграть тысячу часов.',
                '9','Nagievka123','09.01.2022'
            )}>
                <img src="images/ROR2.JPG"alt="Risk of Rain 2"/>
                <div>Risk of Rain 2</div>
            </div>
            <div onClick={() => handleModalOpen('images/QuakeC.JPG', 'Quake Champions',
                'Элегантное осовременивание классики шутеров от первого лица с сохранением полимеров. Появилось разделение на героев с уникальными абилками, пассивками и разным пулом выживаемости. Некоторые бумеры негодовали с "овервотчности", но как по мне это открыло новый потенциал импрува скилла. Разные герои и абилки можно лучше утилизировать на разных картах. Основная проблема, как бы парадоксально это не звучало, это все еще Квейк. Тут такая же механика стрельбы, передвижения, контроля карты, поэтому старые киберкотлеты просто оттрахали весь приток новых игроков. Мало кто из современных геймеров готов подставлять свой зад ближайшие сотни часов, чтобы иметь хоть какой-то шанс противостоять ебырям. В игру с таким порогом вхождения нужно вывалить тысячи и тысячи игроков, чтобы как-то размазать пласт. Бесезда, видимо, быстро смекнула, что пытаться поддерживать такой проект слишком убыточно и сложно, поэтому затея провалилась.',
                '8', 'Tijoe', '14.10.2022'
            )}>
                <img src="images/QuakeC.JPG"alt="Quake Champions"/>
                <div>Quake Champions</div>
            </div>
            <div onClick={() => handleModalOpen('images/MHS.JPG', 'Metal Hellsinger')}>
                <img src="images/MHS.JPG"alt="Metal Hellsinger"/>
                <div>Metal Hellsinger</div>
            </div>
            <div onClick={() => handleModalOpen('images/MGR.JPG', 'Metal Gear Rising')}>
                <img src="images/MGR.JPG"alt="Metal Gear Rising"/>
                <div>Metal Gear Rising</div>
            </div>
            <div onClick={() => handleModalOpen('images/Doom.JPG', 'Doom 2016')}>
                <img src="images/Doom.JPG"alt="Doom"/>
                <div>Doom2016</div>
            </div>
            <div onClick={() => handleModalOpen('images/DeadC.JPG', 'Dead Cells')}>
                <img src="images/DeadC.JPG"alt="Dead Cells"/>
                <div>Dead Cells</div>
            </div>
            <div onClick={() => handleModalOpen('images/CP.JPG', 'Cyberpunk2077')}>
                <img src="images/CP.JPG"alt="Cyberpunk2077"/>
                <div>Cyperpunk2077</div>
            </div>
            <div onClick={() => handleModalOpen('images/AmidEvil.JPG', 'Amid Evil')}>
                <img src="images/AmidEvil.JPG"alt="Amid Evil"/>
                <div>Amid Evil</div>
            </div>
            <div onClick={() => handleModalOpen('images/Apex.JPG', 'Apex Legends')}>
                <img src="images/Apex.JPG"alt="Apex Legends"/>
                <div>Apex Legends</div>
            </div>
            <div onClick={() => handleModalOpen('images/HK.JPG', 'Hollow Knight')}>
                <img src="images/HK.JPG"alt="Hollow Knight"/>
                <div>Hollow Knight</div>
            </div>
            <div onClick={() => handleModalOpen('images/Katana.JPG', 'Katana Zero')}>
                <img src="images/Katana.JPG"alt="Katana Zero"/>
                <div>Katana Zero</div>
            </div>
            <div onClick={() => handleModalOpen('images/LoopHero.JPG', 'Loop Hero')}>
                <img src="images/LoopHero.JPG"alt="Loop Hero"/>
                <div>Loop Hero</div>
            </div>
            <div onClick={() => handleModalOpen('images/DeadSpace2.JPG', 'Dead Space 2')}>
                <img src="images/DeadSpace2.JPG"alt="Dead Space 2"/>
                <div>Dead Space 2</div>
            </div>
            <div onClick={() => handleModalOpen('images/DeadSpace.JPG', 'Dead Space')}>
                <img src="images/DeadSpace.JPG"alt="Dead Space"/>
                <div>Dead Space</div>
            </div>
            <div onClick={() => handleModalOpen('images/Dusk.JPG', 'Dusk')}>
                <img src="images/Dusk.JPG"alt="Dusk"/>
                <div>Dusk</div>
            </div>
            <div onClick={() => handleModalOpen('images/DDLC.JPG', 'Doki Doki Literature Club')}>
                <img src="images/DDLC.JPG"alt="Doki Doki Literature Club"/>
                <div>Doki Doki LC</div>
            </div>
            <div onClick={() => handleModalOpen('images/Minish.JPG', 'LoZ: The Minish Cap')}>
                <img src="images/Minish.JPG"alt="LoZ: The Minish Cap"/>
                <div>TLoZ: The Minish Cap</div>
            </div>
            <div onClick={() => handleModalOpen('images/StalkerSoC.JPG', 'Stalker Shadow of Chernobyl')}>
                <img src="images/StalkerSoC.JPG"alt='Stalker Shadow of Chernobyl'/>
                <div>Stalker Shadow of Chernobyl</div>
            </div>
            <div onClick={() => handleModalOpen('images/DSR.JPG', 'Dark Souls: Remaster')}>
                <img src="images/DSR.JPG"alt="Dark Souls: Remaster"/>
                <div>Dark Souls: Remaster</div>
            </div>
            <div onClick={() => handleModalOpen('images/Stray.JPG', 'Stray')}>
                <img src="images/Stray.JPG"alt="Stray"/>
                <div>Stray</div>
            </div>
            <div onClick={() => handleModalOpen('images/Ultrakill.JPG', 'Ultrakill')}>
                <img src="images/Ultrakill.JPG"alt="Ultrakill"/>
                <div>Ultrakill</div>
            </div>
            <div onClick={() => handleModalOpen('images/StS.JPG', 'Slay the Spire')}>
                <img src="images/StS.JPG"alt="Slay the Spire"/>
                <div>Slay the Spire</div>
            </div>
        </div>
        <Modal active = {modalActive} setActive = {setModalActive} image={modalParams.imageREW} name={modalParams.name} obzor={modalParams.obzor} grade={modalParams.grade} who={modalParams.who} date={modalParams.date}/>
    </div>
)
}

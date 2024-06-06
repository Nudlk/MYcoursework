import React from "react";
import "./modal.css";

const Modal = ({active, setActive, image, name, obzor, grade, who, date, children}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className = {active ? "modal_content" : "modal"} onClick = {e => e.stopPropagation()}>
            <img className="imageREW"src={image}alt={name}/>
            <div class="name">{name}</div>
            <div className="about">Описание:</div>
            <div className="obzor">{obzor}</div>
            <div className="grade"><h3>Оценка: {grade}/10</h3></div>
            <div className = "modal_footer">
            <div>Автор обзора:<br/>{who}</div>
            <div>Дата публикации обзора:<br/>{date}</div>
            </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;
import React from 'react';

const NewsLetter = ({className, input_white, titleClass}) => {
    return (
        <div className={`box widget news_letter mb30 ${className ? className : ''}`}>
            <h2 className={`widget-title ${titleClass}`}>Boletin informativo</h2>
            <p>Su dirección de correo electrónico no será publicada. Los campos obligatorios son Noticias de hoy.</p>
            <div className="space-20"/>
            <div className="signup_form">
                <form>
                    <input className={`signup ${input_white ? 'white_bg' : ''}`} type="email"
                           placeholder="Tu correo..."/>
                    <button type="button" className="cbtn">Inscríbete</button>
                </form>
                <div className="space-10"/>
                <p>Odiamos el spam tanto como usted</p>
            </div>
        </div>
    );
};

export default NewsLetter;
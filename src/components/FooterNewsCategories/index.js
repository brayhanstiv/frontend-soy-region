import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

const FooterNewsCategories = () => {
    return (
        <Fragment>
            <h3 className="widget-title2">Categorías de noticias</h3>
            <div className="row">
                <div className="col-lg-6">
                    <ul>
                        <li><Link to="/">Politica</Link></li>
                        <li><Link to="/">Negocios</Link></li>
                        <li><Link to="/">TECNOLOGÍA</Link></li>
                        <li><Link to="/">Ciencias</Link></li>
                        <li><Link to="/">Salud</Link></li>
                        <li><Link to="/">Deportes</Link></li>
                        <li><Link to="/">Entretenimiento</Link></li>
                    </ul>
                </div>
                <div className="col-lg-6">
                    <ul>
                        <li><Link to="/">Educación</Link></li>
                        <li><Link to="/">Obituarios</Link></li>
                        <li><Link to="/">Correcciones</Link></li>
                        <li><Link to="/">Educación</Link></li>
                        <li><Link to="/">El periódico de hoy</Link></li>
                        <li><Link to="/">Correcciones</Link></li>
                        <li><Link to="/">Comidas</Link></li>
                    </ul>
                </div>
            </div>
        </Fragment>
    );
};

export default FooterNewsCategories;
import {NavLink} from "react-router-dom";


const Nav =()=>{
    return(
        <div>
            <ul>
                <li>
                    <NavLink to="/">Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/contenidos">Contenidos</NavLink>
                </li>

                <li>
                    <NavLink to="/categorias">Contato</NavLink>
                </li>

                <li>
                    <NavLink to="/entretenimiento">Entretenimiento</NavLink>
                </li>

                <li>
                    <NavLink to="/regiones">Regiones</NavLink>
                </li>

                <li>
                    <NavLink to="/contacto">Contato</NavLink>
                </li>
               
                
            </ul>
        </div>
    )
}

export default Nav;
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to='/'>Inicio</NavLink>
        </li>
        <li>
          <NavLink to='/content'>Contenidos</NavLink>
        </li>

        <li>
          <NavLink to='/category'>Categorias</NavLink>
        </li>

        <li>
          <NavLink to='/region'>Regional</NavLink>
        </li>

        <li>
          <NavLink to='/blog'>Blog</NavLink>
        </li>

        <li>
          <NavLink to='/contact'>Contato</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;

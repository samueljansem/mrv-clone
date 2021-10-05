import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HeaderService } from '../../../services';

import './Header.css';
import logo from '../../../assets/img/logo.png';

function Header() {
  const [topo, setTopo] = useState([]);

  const obterTopo = () => {
    const data = HeaderService.ObterTopo();
    setTopo(data);
  };

  useEffect(() => {
    obterTopo();
  }, []);

  return (
    <header className="topnav">
      <Link to="/">
        <img alt="MRV | Logo" src={logo} />
      </Link>

      {topo.map((item) => (
        <NavLink key={item.id} activeClassName="active" to={item.pathName}>
          {item.name}
        </NavLink>
      ))}
    </header>
  );
}

export default Header;

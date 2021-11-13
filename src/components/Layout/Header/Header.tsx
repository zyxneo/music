import { FormattedMessage, Link } from 'gatsby-plugin-intl';
import React from 'react';

import {
  ROUTE_PATH_CONTACT,
} from 'routes';


function Header() {
  return (
    <div className="header">
      <div className="container header__container">
        <menu className="header__menu menu">
          <Link
            className="menu__item"
            activeClassName="menu__item--active"
            to="/"
          >
            TODO
          </Link>
        </menu>
    </div>
    </div>
  );
}

export default Header;

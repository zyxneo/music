import { FormattedMessage } from 'gatsby-plugin-intl';
import React from 'react';

function Footer() {

  return (
    <footer className="footer inverse">
      <div className="container footer__container">
        <div className="footer__menu">
          <nav className="footerNav">
            <h3 className="footerNav__title">
              <FormattedMessage
                id="site.contactInfo"
                defaultMessage="Contact Info"
              />
            </h3>
            <ul className="footerNav__list">
              <li className="footerNav__item">
                <i className="fab fa-github" />
                <a
                  className="footerNav__link interactive interactive--inverse"
                  href="https://github.com/zyxneo/music"
                >
                  Github
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__container">
          <div className="footer__copy">
            © 2021 - {new Date().getFullYear()} TODO.{' '}
            <FormattedMessage
              id="site.copyright"
              defaultMessage="All rights reserved."
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

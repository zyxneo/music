import Tippy from '@tippyjs/react';
import classNames from 'classnames';
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import React from 'react';

import { Button } from 'components';
import { languageName } from 'intl/languages';

import './LanguageSwitcher.css';

type Props = {
  className?: string;
};

export interface IntlContextConsumerProps {
  languages: (keyof typeof languageName)[];
  language: keyof typeof languageName;
}

const LanguageSwitcher = ({ className }: Props) => {
  const intl = useIntl();
  const lang = intl.locale;

  return (
    <div className={classNames('languageSwitcher', className)}>
      <IntlContextConsumer>
        {({ language: currentLocale, languages }: IntlContextConsumerProps) => (
          <Tippy
            placement="top-start"
            trigger="click"
            interactive
            theme="light"
            arrow
            offset={[0, 16]}
            content={
              <div className="languageSwitcher__list">
                {languages.map((language) => {
                  if (currentLocale !== language) {
                    return (
                      <Button
                        key={language}
                        onClick={() =>
                          currentLocale !== language
                            ? changeLocale(language)
                            : null
                        }
                        onKeyDown={() =>
                          currentLocale !== language
                            ? changeLocale(language)
                            : null
                        }
                        role="menuitem"
                        className="languageSwitcher__item"
                      >
                        <span className={classNames('flag', language)} />
                        <bdi>{languageName[language]}</bdi>
                      </Button>
                    );
                  }
                  return null;
                })}
              </div>
            }
          >
            <Button className="languageSwitcher__button">
              <i className="fa fa-language" />
              <span className={classNames('flag', lang)} />
              <span className="languageSwitcher__currentLocale">
                <FormattedMessage id="site.languageNameOnNativeLanguage" />
              </span>
              <i className="fa fa-angle-down" />
            </Button>
          </Tippy>
        )}
      </IntlContextConsumer>
    </div>
  );
};

export default LanguageSwitcher;

/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import classNames from 'classnames';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { Helmet } from 'react-helmet';

type Props = {
  description?: string | null;
  title?: string;
  meta?: [];
  keywords?: string;
  isModalOpen?: boolean;
};

export default function SEO({
  description,
  isModalOpen,
  keywords,
  meta = [],
  title,
}: Props) {

  const intl = useIntl();
  const lang = intl.locale;

  const metaDescription =
    description || intl.formatMessage({ id: 'site.description' });
  const metaKeywords = keywords || 'TODO';

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      bodyAttributes={{
        class: classNames('body ', { isModalOpen: isModalOpen }),
      }}
      title={title}
      titleTemplate={`%s | hi - ${intl.formatMessage({
        id: 'site.title',
        defaultMessage: 'Online touch typing application',
      })}`}
      meta={[
        <meta name="description" content={metaDescription} />,
        <meta name="og:title" content={title} />,
        <meta name="og:description" content={metaDescription} />,
        <meta name="og:type" content='website' />,
        <meta name="twitter:card" content={"summary"} />,
        <meta name="twitter:creator" content={"TODO"} />,
        <meta name="twitter:title" content={title} />,
        <meta name="twitter:description" content={metaDescription} />,
        <meta name="keywords" content={metaKeywords} />,
      ].concat(meta)}
    >
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
      />
      {lang === 'fa' && (
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Cairo:300,400,500"
        />
      )}
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap&text=0123456789"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/brands.min.css"
      />
    </Helmet>
  );
}

import React, { ReactElement } from "react";
import { FormattedMessage } from "gatsby-plugin-intl";
import Loadable from "react-loadable";

const Loader = function ({
  children,
  loaded,
}: {
  children: ReactElement;
  loaded: any;
}) {
  const loaderDone = loaded ? 1 : 0;
  return (
    <>
      <div className={`appLoader ${loaderDone && 'appLoader--done'}`}>
        <FormattedMessage id="site.loading" defaultMessage="Loading..." />
      </div>
      {children && <>{children}</>}
    </>
  );
};

export default Loadable({
  loader: () => import("components/GuessTheNote"),
  // @ts-ignore
  loading: Loader,
  render(loaded, props) {
    return (
      <Loader loaded={loaded}>
        {
          // @ts-ignore
          React.createElement(loaded.default, props)
        }
      </Loader>
    );
  },
});

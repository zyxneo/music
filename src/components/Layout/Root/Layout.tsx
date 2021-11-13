import classNames from "classnames";
import React, { ReactNode } from "react";

import { Footer, Header } from "components";

type Props = {
  children: ReactNode;
  className?: string;
  isModalOpen?: boolean;
  hasHeader?: boolean;
};

export default function Layout(props: Props) {
  const { children, className, hasHeader = true, isModalOpen } = props;

  return (
    <>
      <div
        className={classNames("layout", {
          isModalOpen: isModalOpen,
        })}
      >
        {hasHeader && <Header />}
        <main className={classNames("main", className)}>{children}</main>
        <Footer />
      </div>
    </>
  );
}

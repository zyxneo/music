import classNames from 'classnames';
import React, { ReactNode, forwardRef } from 'react';

import './Button.css';
export const BUTTON_CLASS_NAME = 'Button';

export type ButtonColor = 'primary' | 'secondary' | 'danger';
export type ButtonSize = 'small' | 'medium' | 'big' | 'large';
export type ButtonType = 'default' | 'unstyled';

export type Props = {
  type?: ButtonType;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent) => void;
  onKeyDown?: (event: React.KeyboardEvent) => void;
  htmlType?: 'button' | 'submit' | 'reset';
  children: ReactNode;
  className?: string;
  color?: ButtonColor;
  size?: ButtonSize;
  block?: boolean;
  href?: string;
  square?: boolean;
  title?: string;
  role?: string;
  tabIndex?: number;
};

type RefType = HTMLButtonElement | null;

const Button = forwardRef<RefType, Props>(
  (
    {
      children,
      className,
      color,
      disabled = false,
      size,
      type = 'default',
      block,
      onClick = (e) => e,
      onKeyDown = (e) => e,
      square,
      title,
      htmlType = 'button',
      role = 'button',
      tabIndex,
    }: Props,
    ref
  ) => {
    function handleOnClick(event: React.MouseEvent) {
      event.preventDefault();

      if (disabled) return;
      onClick(event);
    }

    function handleOnKeyDown(event: React.KeyboardEvent) {
      event.preventDefault();

      if (disabled) return;
      onKeyDown(event);
    }

    const buttonClassNames = classNames(BUTTON_CLASS_NAME, className, {
      [`Button--${size}`]: size,
      [`Button--${type}`]: type,
      [`Button--${color}`]: color,
      ['Button--block']: block,
      ['Button--square']: square,
      ['Button--disabled']: disabled,
    });

    return (
      <button
        ref={ref}
        className={buttonClassNames}
        disabled={disabled}
        onClick={handleOnClick}
        onKeyDown={handleOnKeyDown}
        type={htmlType}
        title={title}
        role={role}
        tabIndex={tabIndex}
      >
        {children}
      </button>
    );
  }
);

export default Button;

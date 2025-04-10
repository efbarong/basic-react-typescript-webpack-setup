import React from 'react';
import classNames from 'classnames';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  theme?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'lg';
};

export default function Button({
  label,
  theme = 'primary',
  className,
  size,
  ...props
}: Props) {
  return (
    <button
      className={classNames(
        className,
        `btn btn-${theme}`,
        { [`btn-${size}`]: !!size },
      )}
      {...props}
    >
      {label}
    </button >
  );
}


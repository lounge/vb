import React from 'react';
import './_button.scss';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  style?: string;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'sm' | 'lg';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  style = 'primary',
  size = 'lg',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  // const mode = primary ? 'btn--primary' : 'btn--secondary';
  return (
    <button
      type="button"
      className={['btn', `btn--${size}`, `btn--${style}`].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

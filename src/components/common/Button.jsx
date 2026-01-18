import React from 'react';

const Button = ({
  children,
  onClick,
  size = 'default',
  className = '',
  ariaLabel,
  ...props
}) => {
  const buttonClasses = size === 'compact' ? 'framer-button-compact' : 'framer-button';

  return (
    <button
      type="button"
      className={`${buttonClasses} ${className}`}
      onClick={onClick}
      aria-label={ariaLabel}
      {...props}
    >
      <span className="button-text">{children}</span>
      <span className="icon-wrapper">
        <svg
          className="arrow arrow-in"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgb(222,222,222)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="7" y1="7" x2="17" y2="17"></line>
          <polyline points="17 7 17 17 7 17"></polyline>
        </svg>
        <svg
          className="arrow arrow-out"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgb(222,222,222)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="7" y1="7" x2="17" y2="17"></line>
          <polyline points="17 7 17 17 7 17"></polyline>
        </svg>
      </span>
    </button>
  );
};

export default Button;

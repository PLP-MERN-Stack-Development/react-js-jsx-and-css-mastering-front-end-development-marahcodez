import React from 'react';

/**
 * Button component with different variants
 * @param {Object} props - Component props
 * @param {'primary' | 'secondary' | 'danger' | 'success' | 'warning'} [props.variant='primary'] - Button variant
 * @param {'sm' | 'md' | 'lg'} [props.size='md'] - Button size
 * @param {boolean} [props.disabled=false] - Whether the button is disabled
 * @param {function} [props.onClick] - Click handler function
 * @param {React.ReactNode} props.children - Button content
 * @param {string} [props.className] - Additional class names
 * @returns {JSX.Element} - Button component
 */
const Button = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  children,
  className = '',
  ...rest
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors';

  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-500',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500',
    success: 'bg-green-600 hover:bg-green-700 text-white focus:ring-green-500',
    warning: 'bg-yellow-500 hover:bg-yellow-600 text-white focus:ring-yellow-500',
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };

  const disabledClasses = disabled
    ? 'opacity-50 cursor-not-allowed'
    : 'cursor-pointer';

  const buttonClasses = `${baseClasses} ${
    variantClasses[variant] || variantClasses.primary
  } ${sizeClasses[size] || sizeClasses.md} ${disabledClasses} ${className}`;

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

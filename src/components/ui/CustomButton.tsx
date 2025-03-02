
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
}

const CustomButton = ({
  children,
  to,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  icon,
  iconPosition = 'left',
  disabled = false,
}: ButtonProps) => {
  const baseStyles = cn(
    'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neon-blue/50',
    {
      // Variants
      'bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:shadow-neon': variant === 'primary',
      'bg-space-600 text-white hover:bg-space-500': variant === 'secondary',
      'bg-transparent border border-neon-blue/50 text-white hover:border-neon-blue hover:shadow-neon': variant === 'outline',
      'bg-transparent text-white hover:text-neon-blue': variant === 'ghost',
      
      // Sizes
      'text-sm px-3 py-1.5': size === 'sm',
      'text-base px-4 py-2': size === 'md',
      'text-lg px-6 py-3': size === 'lg',
      
      // Disabled state
      'opacity-50 cursor-not-allowed pointer-events-none': disabled,
    },
    className
  );
  
  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  );
  
  if (to) {
    return (
      <Link to={to} className={baseStyles}>
        {content}
      </Link>
    );
  }
  
  return (
    <button onClick={onClick} className={baseStyles} disabled={disabled}>
      {content}
    </button>
  );
};

export default CustomButton;

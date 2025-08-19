import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showText?: boolean;
  src?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '', showText = true, src = '/logo.png' }) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-40 h-40'
  } as const;

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  } as const;

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`${sizeClasses[size]} relative`}>
        <img
          src={src}
          alt="Kobo Labs logo"
          className="w-full h-full object-contain block"
          style={{ 
            border: 'none', 
            outline: 'none', 
            boxShadow: 'none',
            backgroundColor: 'transparent',
            display: 'block'
          }}
          loading="eager"
          decoding="async"
        />
      </div>
    </div>
  );
};

export default Logo;

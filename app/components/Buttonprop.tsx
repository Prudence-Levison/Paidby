import React, { useState } from 'react';

interface ButtonProps {

  children: React.ReactNode;
  className: string;
  type: 'submit' | 'button';
  loading: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, className, type, loading }) => {
    return (
      <button type={type} className={className}>
        {loading ? (
          <div className="flex items-center justify-center">
            <div className="ring animate-roll h-3 w-3 duration-300  bg-black rounded-full ml-2 "></div>
            <div className="ring animate-roll h-3 w-3 border-0 bg-black duration-600  rounded-full ml-2"></div>
            <div className="ring animate-roll h-3 w-3 border-0 bg-black rounded-full  duration-1000 ml-2"></div>
            {/* <div className="spinner-border animate-spin rounded-full border-4 border-gray-500 border-t-4 border-t-transparent" /> */}
          </div>
        ) : (
          children
        )}
      </button>
    );
  };
  export default Button;
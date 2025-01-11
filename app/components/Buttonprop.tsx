import React, { useState } from 'react';

interface ButtonProps {

  children: React.ReactNode;
  className: string;
  type: 'submit' | 'button';
  loading: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, className, type,  onClick, loading }) => {
    return (
      <button type={type} onClick={onClick} className={className}>
        {loading ? (
          <div className="flex items-center justify-center">
            <div className=" animate-spin h-5 w-3  aspect-square transition duration-300  bg-black rounded-full ml-2 "></div>
            <div className=" animate-spin h-5 w-3 transition duration-700 border-0 bg-black   rounded-full ml-2"></div>
            <div className="ring animate-spin h-5 w-3 transition   border-0 bg-black rounded-full  duration-1000 ml-2"></div>
            {/* <div className="spinner-border animate-spin rounded-full border-4 border-gray-500 border-t-4 border-t-transparent" /> */}
          </div>
        ) : (
          children
        )}
      </button>
    );
  };
  export default Button;
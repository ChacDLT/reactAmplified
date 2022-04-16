import React from 'react';

export default function Button({ children, onClick, className }) {
  console.log('BBLayout');

  return (
    <button
      onClick={onClick}
      type="button"
      className={`h-8 px-6 py-2.5 bg-amber-200 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-amber-300 hover:shadow-lg focus:bg-amber-200 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-amber-200 active:shadow-lg transition duration-150 ease-in-out ${className}`}
    >
      {children}
    </button>
  );
}

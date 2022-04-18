import React from 'react';

export default function Card() {
  return (
    <div className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto mb-2">
      <div className=" flex space-x-4">
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-gray-400 rounded w-3/4" />
          <div className="space-y-2">
            <div className="h-4 bg-gray-400 rounded" />
            <div className="h-4 bg-gray-400 rounded w-5/6" />
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

const CardComponent = ({ posts }) => {
    return (
        <div className="rounded-lg bg-white border-2 border-gray-200 overflow-hidden">
            <div className="p-5">
                <h2 className="text-lg font-medium text-gray-900">{posts.title}</h2>
                <p className="mt-2 text-gray-600 text-sm line-clamp-3">{posts.content}</p>
            </div>
        </div>
    );
};

export default CardComponent;
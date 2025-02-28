'use client';

import { useState } from 'react';

export default function LikeButton() {
    const [likes, setLikes] = useState(0);

    function handleClick() {
        console.log(`increment like count ${likes}`)
        setLikes(likes + 1);
    }

    return <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer" onClick={handleClick}>Like ({likes})</button>
}
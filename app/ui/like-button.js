'use client';

import { useState } from 'react';
import "@/app/global.css";

export default function LikeButton() {
    const [likes, setLikes] = useState(0);

    function handleClick() {
        console.log(`increment like count ${likes}`)
        setLikes(likes + 1);
    }

    return <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3" onClick={handleClick}>Like ({likes})</button>
}
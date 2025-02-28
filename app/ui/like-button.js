'use client';

import { useState } from 'react';
import Button from '@/app/components/button';

export default function LikeButton() {
    const [likes, setLikes] = useState(0);

    function handleClick() {
        console.log(`increment like count ${likes}`)
        setLikes(likes + 1);
    }

    return <Button onClick={handleClick}> Like ({likes})</Button>
}
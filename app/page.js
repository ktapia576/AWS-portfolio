import LikeButton from '@/app/like-button';
import Header from '@/app/header';

export default function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    
    return (
        <div>
            {/* Nesting the Header component */}
            <Header title="React"/>
            <Header title="I love Computer Science!"/>
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                    ))}
            </ul>
            <LikeButton />
        </div>
    );
}
import LikeButton from '@/app/ui/like-button';
import Header from '@/app/ui/header';

export default function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    
    return (
        <div className="grid place-items-center gap-5 text-white">
            {/* Nesting the Header component */}
            <Header title="Hello! My name is Kevin Tapia"/>
            <Header title="I enjoy diving deep into my learning and expanding my skillset. I love Computer Science!"/>
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                    ))}
            </ul>
            <LikeButton />
        </div>
    );
}
import LikeButton from '@/app/ui/like-button';
import Header from '@/app/ui/header';

export default function HomePage() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    
    return (
        <div className="hero min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-lg">
                    <Header className="text-5xl font-bold" title="Hello there! My name is Kevin Tapia" />
                    <Header className="py-6" title="I enjoy diving deep into my learning and expanding my skillset. I love Computer Science!"/>
                    <ul className="list">
                        {names.map((name) => (
                            <li className="list-row" key={name}>{name}</li>
                            ))}
                    </ul>
                    <LikeButton />
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
}
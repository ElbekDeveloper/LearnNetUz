import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home_page.css';

function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
        window.open("https://mohirdev.uz/kasblar/net-praktikum/", "_blank");
    };

    const freeCourse = () => {
        window.open("https://learn.net.uz", "_blank");
    }

    const partOne = () => {
        window.location.href = '/partOne';
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '30px'}}>
            <h1>Welcome to Learn .NET</h1>

            <div style={{ position: 'relative', display: 'flex' }}>
                <iframe width="646"
                        height="360"
                        src="https://www.youtube.com/embed/eE40fExLRBo?si=WviyDVYXlrPYf5EQ"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                </iframe>
            </div>
            <div style={{
                position: 'relative',
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                transform: 'translateY(30%)'
            }}>
                <button className="animated-button" onClick={handleClick}>
                    MohirDev-da o'rganish!
                </button>
                <button className="animated-button" onClick={freeCourse}>
                    Bepul o'rganish!
                </button>
                <button className="animated-button" onClick={partOne}>
                    Dasrlarni boshlash
                </button>
            </div>
        </div>
    );
}

export default Home;

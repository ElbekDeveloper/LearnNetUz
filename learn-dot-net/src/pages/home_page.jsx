import React from 'react';
import  {ButtonHTMLAttributes} from "react";

function Home() {
const handleClick = () =>
{
    
};
    return (
        <div style={{textAlign: 'center', marginTop: '50px'}}>
            <h1>Welcome to Learn .NET</h1>
            <p>This platform is dedicated to learning .NET and C#.</p>
            <p>Explore the modules and start your learning journey!</p>

            <div>
                <iframe width="646"
                        height="360"
                        src="https://www.youtube.com/embed/eE40fExLRBo?si=WviyDVYXlrPYf5EQ"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                </iframe>
            </div>
            <div style={{marginTop: '15px'}}>
                <button onClick={handleClick} style={{padding: '10px 20px', fontSize: '16px'}}>
                    Click Me
                </button>
            </div>
        </div>
    );
}


export default Home;

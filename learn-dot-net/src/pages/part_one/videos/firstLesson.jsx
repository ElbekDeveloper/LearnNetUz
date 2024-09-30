import React from "react";
import TaskOne from "../tasks/taskFirst";

function FirstLesson (){
    return (
        <div>
        <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/LnXO2GNfDaU?si=_EwhcS0piLajo3rD"
                title="YouTube video player" 
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen>
        </iframe>
            <div>
                <TaskOne/>
            </div>
        </div>
    );
}

export default FirstLesson;
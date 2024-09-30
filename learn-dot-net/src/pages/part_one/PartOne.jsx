import React, {useState} from "react";
import Table from "../../components/tables/Table";
import FirstLesson from "./videos/firstLesson";
import SecondLesson from "./videos/secondLesson";
import ThirdLesson from "./videos/thirdLesson";
import FourthLesson from "./videos/fourthLesson";
import {Button} from "flowbite-react";
import FifthLesson from "./videos/fifthLesson";
import SixthLesson from "./videos/sixthLesson";
import SeventhLesson from "./videos/seventhLesson";
import EightLesson from "./videos/eightLesson";
import NinethLesson from "./videos/ninethLesson";

function PartOne (){
    const [activeLesson, setActiveLesson] = useState(null);
    const data = [
        { id: 1, theme: 'Markdown tili, C# tili va VS Code O\'rnatish', video: <Button onClick={() => setActiveLesson(1)}> ▶ </Button> },
        { id: 2, theme: 'Console nima? C# tilida ma\'lumot turlari va operatorlar', video: <Button onClick={() => setActiveLesson(2)}> ▶ </Button> },
        { id: 3, theme: 'String, if, switch, bool & ternary operator', video: <Button onClick={() => setActiveLesson(3)}> ▶ </Button> },
        { id: 4, theme: 'While va for', video: <Button onClick={() => setActiveLesson(4)}> ▶ </Button> },
        { id: 5, theme: 'Array va foreach', video: <Button onClick={() => setActiveLesson(5)}> ▶ </Button> },
        { id: 6, theme: 'Method nima?', video: <Button onClick={() => setActiveLesson(6)}> ▶ </Button> },
        { id: 7, theme: 'CLR Basics', video: <Button onClick={() => setActiveLesson(7)}> ▶ </Button> },
        { id: 8, theme: 'IL & JIT Compilation', video: <Button onClick={() => setActiveLesson(8)}> ▶ </Button> },
        { id: 9, theme: 'IL Verification & FCL', video: <Button onClick={() => setActiveLesson(9)}> ▶ </Button> },
    ];
    return(
        <div style={{textAlign: 'center', marginTop: '50px', marginBottom: "100px"}}>
            <h1>C# (Si-Sharp) ga Kirish</h1>
            <div style={{marginBottom: '20px'}}>
                {activeLesson === 1 && <FirstLesson/>}
                {activeLesson === 2 && <SecondLesson/>}
                {activeLesson === 3 && <ThirdLesson/>}
                {activeLesson === 4 && <FourthLesson/>}
                {activeLesson === 5 && <FifthLesson/>}
                {activeLesson === 6 && <SixthLesson/>}
                {activeLesson === 7 && <SeventhLesson/>}
                {activeLesson === 8 && <EightLesson/>}
                {activeLesson === 9 && <NinethLesson/>}
            </div>

            <div>
                <Table data={data}/>
            </div>
        </div>

    );
}

    export default PartOne;
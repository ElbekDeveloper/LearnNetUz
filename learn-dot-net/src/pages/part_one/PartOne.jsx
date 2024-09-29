import React, {useState} from "react";
import Table from "../../components/tables/Table";
import FirstLesson from "./videos/firstLesson";
import SecondLesson from "./videos/secondLesson";
import ThirdLesson from "./videos/thirdLesson";
import FourthLesson from "./videos/fourthLesson";
import {Button} from "flowbite-react";

function PartOne (){
    const [activeLesson, setActiveLesson] = useState(null);
    const data = [
        { id: 1, theme: 'First Lesson', video: <Button onClick={() => setActiveLesson(1)}>L1</Button> },
        { id: 2, theme: 'Second Lesson', video: <Button onClick={() => setActiveLesson(2)}>L2</Button> },
        { id: 3, theme: 'Third Lesson', video: <Button onClick={() => setActiveLesson(3)}>L3</Button> },
        { id: 4, theme: 'Fourth Lesson', video: <Button onClick={() => setActiveLesson(4)}>L4</Button> }
    ];
    return(
        <div style={{textAlign: 'center', marginTop: '50px'}}>
            <h1>C# (Si-Sharp) ga Kirish</h1>
            <div style={{marginBottom: '20px'}}>
                {activeLesson === 1 && <FirstLesson/>}
                {activeLesson === 2 && <SecondLesson/>}
                {activeLesson === 3 && <ThirdLesson/>}
                {activeLesson === 4 && <FourthLesson/>}
            </div>

            <div>
                <Table data={data}/>
            </div>
        </div>

    );
}

    export default PartOne;
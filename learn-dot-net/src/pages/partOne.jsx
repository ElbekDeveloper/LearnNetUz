import React from "react";
import Table from "../components/tables/Table";

function partOne (){
    const backHome  = () =>
    {
        window.location.href = "";
    }
    
    const data =[
        { id: 1, theme: 'Alice', task: 25, topic: "" },
    ]
    return(
    <div style={{textAlign: 'center', marginTop: '50px'}}>
        <h1>C# (Si-Sharp) ga Kirish</h1>
        <p> Bu bo'limda C# va .NET bilan o'rganib chiqamiz</p>
        <button onClick={backHome}>
            Back to Home
        </button>
        <div>
            <Table data = {data}/>
        </div>
    </div>
        
    );
}

export default partOne;
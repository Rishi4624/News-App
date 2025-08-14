import React from 'react'

export default function todo() {


    let counter = 0;

    const fun = () => {
        counter++;
        console.log("i am counter-> ", counter);
    }

    return (
        <div>

            
            <h1>Todo Component</h1>
            <h2>Counter: {counter}</h2>
            <div>
                <button>{counter}</button>

                <button onClick={fun}> click me</button>
            </div>


        </div>
    )
}

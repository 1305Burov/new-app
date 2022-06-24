import {useState} from 'react';

const Write = () => {
    
    let someNums = [123, 333, 121];

    const [nums, setNum] = useState(someNums);

    function addRandomNum() {
        const randNumer = Math.floor(Math.random() * 100);

        setNum((p) => {
            return [
                ...p,
                randNumer
            ]
        })
    }

    function deleteLastNum() {
        setNum((p) => {
            p.pop()
            return [...p];
        })
    }
    
    return (
        <>
            <button onClick={addRandomNum}>Add random num</button>
            <button onClick={deleteLastNum}>Delete last num</button>
            {nums.map((num) => <p key={num}>{num}</p>)}
        </>
    );
}

export default Write;

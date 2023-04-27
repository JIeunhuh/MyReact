import { useState } from "react";

const MyClockTime_1 = () => {
    let t = new Date().toLocaleTimeString();
    const [myTime, setmyTime] = useState(t);
    //setInterval(() => console.log(new Date().toLocaleTimeString()), 1000)
    
    setInterval(() => { setmyTime(new Date().toLocaleTimeString()) }, 1000);

    return (

        <footer>
            <h1>{myTime}</h1>
        </footer>
    );
}
export default MyClockTime_1;
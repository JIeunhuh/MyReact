import MyClockImage from "./MyClockImage";
import MyClockTime_1 from "./MyClockTime_1";
import '../App.css';

const MyClock = () => {
    return (
        <div className="App">
        <main className="container">
            <article data-theme="dark">
                <MyClockImage />
                <MyClockTime_1 />
            </article>
        </main>
        </div>
    );
}
export default MyClock;
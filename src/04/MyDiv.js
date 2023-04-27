import MyDivArticle from "./MyDivAriticle";
//import './MyDiv.css';
const MyDiv = () => {
    return (
        <main className="container">
            <h1>My Div</h1>
            <MyDivArticle />
            <MyDivArticle aname='MyDiv1'/>
            <MyDivArticle aname='MyDiv2'/>
        </main>
    );
}
export default MyDiv;
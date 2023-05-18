import { useParams } from "react-router-dom";
const RoutePage1 = () => {
    const fruits = useParams().item;
    const item2 = useParams().item2;
    //console.log(item);
    return (
        <article>
            <header><h1>RoutePage1</h1></header>
            {fruits}
            {item2}
        </article>);
}
export default RoutePage1;
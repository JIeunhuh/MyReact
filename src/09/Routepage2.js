import { useLocation } from "react-router-dom";
import qs from 'query-string';
const Routepage2=()=>{
    const loc = useLocation().search;
    console.log('loc',loc);
    const item = qs.parse(loc).item;
    console.log(item);

    let icon = loc.replace('?','');
    icon=icon.split('&');
    icon=icon.map((item)=>item.split('='));
    console.log(icon);
    return(<article>
        <header><h1>Routepage2</h1></header>
        {item}
    </article>);
}
export default Routepage2;
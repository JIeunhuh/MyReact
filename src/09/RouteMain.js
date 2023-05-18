import { Route, Routes, BrowserRouter } from "react-router-dom";
import RouteHome from "./RouteHome";
import RouteNav from "./RouteNav";
import RoutePage1 from "./RoutePage1";
import Routepage2 from "./Routepage2";

const RouteMain = () => {
    return (<BrowserRouter>
        <main className="container">
            <RouteNav />
            <Routes>
                <Route path='/' element={<RouteHome />} />
                <Route path='/page1/:item/:item2' element={<RoutePage1 />} />
                <Route path='/page2' element={<Routepage2 />} />
            </Routes>
        </main>
    </BrowserRouter>);
}

export default RouteMain;
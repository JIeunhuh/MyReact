//import Myref from './07/Myref';
//import Gallary from './08/Gallary';
//import Fcst from './10/Fcst';
import './App.css';
//import Hello from './01/Hello'; //파일에 있는 태그를 실행할 거임 
//import MyClock from './02/MyClock';
 //import Box from './03/Box';
//import method from 'path';
//import MyDiv from './04/MyDiv';
//import Taccident from './06/Taccident';
//import Frcst from './05/Frcst';
//import RouteMain from './09/RouteMain';
//import CodeGubun from './102/CodeGubun';
//import Cnt from './11/Cnt';
import Cnt from './11-1_route/Cnt';
function App() {
  return (
   // <Hello/>
   //<MyClock/>
   //<Box />
   //<MyDiv/>
  // <Frcst/>
  //<Taccident/>
  //<Myref />
  //<Gallary/>
  //<RouteMain/>
 // <Fcst/>
  //<CodeGubun/>
  <Cnt/>
  );
}

//class로 쓰면 안됨, className으로 반드시 써야함!!
//import되어 있는 img 가져올때 src={} alt='' 써야함
//react는 반드시 종료태그가 있어야 함, 태그가 끝나기 전에 '/' 붙여줌
//<> </> : 
export default App;

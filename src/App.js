import './App.css';
//import Hello from './01/Hello'; //파일에 있는 태그를 실행할 거임 
//import MyClock from './02/MyClock';
 //import Box from './03/Box';
//import method from 'path';
//import MyDiv from './04/MyDiv';
import Frcst from './05/Frcst';

function App() {
  return (
   // <Hello/>
   //<MyClock/>
   //<Box />
   //<MyDiv/>
   <Frcst/>
  );
}

//class로 쓰면 안됨, className으로 반드시 써야함!!
//import되어 있는 img 가져올때 src={} alt='' 써야함
//react는 반드시 종료태그가 있어야 함, 태그가 끝나기 전에 '/' 붙여줌
//<> </> : 
export default App;

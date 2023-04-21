import logo from '../logo.svg';
import '../App.css';
import MyClockImage from '../02/MyClockImage';
//react component의 기본 구조
const Hello = ()=>{ //사용자 정의태그는 반드시 return() method가 있어야 함
  let name = '허지은';
  let git = 'https://github.com/JIeunhuh';
    return(
      <main className='container'>
      <article data-theme='dark' className='App'>
        <img src={logo} className='App-logo' alt='logo'/>
        <MyClockImage/>
        <footer>
          <hgroup>
            <h1>{name}</h1>
            <h2><a href={git}>{git}</a></h2>
            </hgroup>
        </footer>
      </article>
      </main>
    ); //부모 node인 div는 무조건 하나만 있어야 함!
}
export default Hello; //똑같은 이름으로 내보내야 함
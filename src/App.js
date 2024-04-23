/* eslint-disable */
import './App.css'; // css 경로
import { useState } from 'react';

function App() {

  let post = "혜진's 블로그";
  let [list, setList] = useState(['삿포로 숙소 추천', '삿포로 맛집 추천', '삿포로 쇼핑 추천']);
  let [liek, setLike] = useState(0); //setLike = state 변경 함수
  let [likeSymbol, setSymbol] = useState('👍');
  let [hi, setHi] = useState('안녕');

  let [day, setDay] = useState('2024년 4월 4일');

  let sortListAlphabetically = () => {
    let sortedList = [...list].sort((a, b) => a.localeCompare(b, 'ko'));
    setList(sortedList);
  };

  let toggleLikeSymbol = () => {
    if(likeSymbol === '👍') {
      setSymbol('👎');
    }
  };

  return (
    <div className="App">
      <div className='nav'>
          <h4>{post}</h4>
      </div>

      <button onClick={() => { 
        let copy = [...list]; // ... = 괄호없애는 문법
        copy[0] = '삿포로 숙소 비추천';
        setList(copy); // 텍스트 체인지

        toggleLikeSymbol(); // 심볼 체인지
        }}>텍스트 수정
      </button>

      <button onClick={sortListAlphabetically}>가나다순 정렬</button>

      <div className='list'>
        <h4>{list[0]} <span onClick={() => { setLike(liek+1) }}>{likeSymbol}</span>{liek}
        </h4>
        <p>{day}</p>
      </div>
      <div className='list'>
        <h4>{list[1]} <span onClick={() => { setHi('반가워') }}>🖐</span>{hi}</h4>
        <p>{day}</p>
      </div>
      <div className='list'>
        <h4>{list[2]}</h4>
        <p>{day}</p>
      </div>
      <Modal></Modal>
    </div>
  );
}

function Modal(){ //Component 
  return(
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;

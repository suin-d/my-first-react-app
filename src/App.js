import React, { useState } from "react";
import "./App.css";
import First from "./components/First";
import Second from "./components/Second";

function App() {
  // 리액트에서 JS코드는 여기서 사용
  // const [open, setOpen] = useState(true);
  // 변수, 함수               // open이 처음에 가지게 되는 기본 값
  // const open = true;

  const [open, setOpen] = useState("안눌렸어요" /* true */);
  const toggle = () => {
    // setOpen(!open);
    setOpen("눌렸어요");
  };
  const number = 5;
  const string = "안녕하세요 문자열이에요";
  // const isTrue = true;

  return (
    <div className="App">
      <button onClick={toggle}>토글</button>
      {
        // /*isTrue*/ open ? (
        //   <First myNumber={number} />
        // ) : (
        //   <Second myString={string} />
        // )
        open
      }
      {/* 부모에서 자식으로는 전달 가능/자식에서 부모로는 전달 불가 */}
    </div>
  );
}

export default App;

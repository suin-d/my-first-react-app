import React from "react";
import Second from "./Second";

export default function First({ myNumber }) {
  return (
    <div>
      <h1>{myNumber}번째 리액트 프로젝트입니다!</h1>
      <Second myString={12333322}></Second>
    </div>
  );
}

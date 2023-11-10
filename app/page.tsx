"use client";

import Screen from "./component/Screen";
import Wrapper from "./component/wrapper";
import ButtonBox from "./component/buttonBox";
import Button from "./component/button";
import ButtonMap from "./component/ButtonMap";
import CalcProvider from "./context/CalContext";
const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "*"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];
console.log(btnValues);
export default function Home() {
  return (
    <CalcProvider>
      <Wrapper>
        <Screen />
        <ButtonBox>
          {/* {btnValues.flat().map((btn, i) => {
        Check if btn is a string or number before rendering
        if (typeof btn === 'string' || typeof btn === 'number') {
          return <Button value={btn} key={i} />;
        }
        return null; // Handle other cases or return null
      })} */}
          {/* {btnValues.map((item)=> { return item.map((btn,i)=>{ return  <Button key={i}>{btn}</Button>})})} */}
          <ButtonMap values={btnValues} />
        </ButtonBox>
      </Wrapper>
    </CalcProvider>
  );
}

import { CalcContext } from "../context/CalContext";
import { useContext } from "react";

const Screen = () => {
  const { calc } = useContext(CalcContext);
  console.log(calc);
  

  return (
    <div
        mode="multiple"
        max={100}
        forceSingleModeWidth={true}>
          2131232122131232132213
        {calc.num? calc.num : calc.resç}
      </div>
    // <Textfit mode="single" className="h-17 mt-8">867</Textfit>
  );
};

export default Screen;
// {calc.num? calc.num : calc.resç}
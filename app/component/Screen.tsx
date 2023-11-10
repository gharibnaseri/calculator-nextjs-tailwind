import { CalcContext } from "../context/CalContext"
import { useContext } from "react"

const Screen = () => {
  const {calc} = useContext(CalcContext)
  console.log(calc);
  
  
  return (
    <div className="h-8 mb-80">
      
1234    </div>
  )
}

export default Screen

import { useContext, useMemo, useState } from "react"
import { CountContext } from "./context";



function App() {

  const [count, setCount] = useState(0);
  return (
    <div>
        <CountContext.Provider value={{count,setCount}}>
        <Count/>
        </CountContext.Provider>
     
    </div>
  )
}

function Count() {
  console.log(" Count is re-rendered");
  return <div>
    <CountRenderer />
    <Buttons/>
  </div>
}

function CountRenderer() {
  
  const {count} = useContext(CountContext)
  console.log(" CountREderer is re-rendered");
  return <div>
    <b>
      {count}
    </b>
    
  </div>
}



function Buttons() {
  
  console.log("buttons re-rendererd");
  const {count,setCount} = useContext(CountContext);

  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}

export default App

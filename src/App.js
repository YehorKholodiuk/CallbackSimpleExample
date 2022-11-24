import {useState} from "react";
import ChildComponent from "./ChildComponent";

function App() {
  let [counter, setCounter] = useState(0);
  let callback = valueFromChild => setCounter(valueFromChild);
  return (
      <div>
        <p>Value of counter: {counter}</p>
        <ChildComponent callbackFunc={callback} counterValue={counter} />
      </div>
  );
}
export default App;

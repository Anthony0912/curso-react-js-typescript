import { Counter } from "./bases/counter";
import { CounterBy } from "./bases/counterBy";
import { CounterEffect } from './bases/counter-effect';
import { CounterHook } from './bases/counter-hook';
import { CounterReducerComponent } from "./counter-reducer/counter-reducer";
// import { CounterReducerComponent } from './bases/counter-reducer';

function App() {
  return (
    <>
      <Counter initialValue={15}/>
      <CounterBy />
      <CounterEffect />
      <CounterHook />
      <CounterReducerComponent />
    </>
  );
}

export default App;

import { useCallback, useState } from 'react';
import './App.css';
import One from './One';
import Three from './Three';
import Two from './Two';

function App() {

  const [inputOne, setInputOne] = useState('');
  const [inputTwo, setInputTWo] = useState('');

  var inputOneHandler=useCallback((event)=> {
    setInputOne(event.currentTarget.value);
  }, [inputOne])

  var inputTwoHandler=(event)=> {
    setInputTWo(event.currentTarget.value);
  }

  return (
    <div className="App">
      
      <One inputOneHandler={inputOneHandler} />
      <Two inputOne={inputOne} inputTwoHandler={inputTwoHandler} />
      <Three inputTwo={inputTwo} />

    </div>
  );
}

export default App;

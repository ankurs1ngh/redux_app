import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incrementNum , decrementNum} from './actions/index';


const App = () => {

  const changeCounter = useSelector(state => state.changeCounter);
  
  const dispatch = useDispatch();

  return (
    <>
    <div className='main-div'>
    <div  className='container'>
      <h1>Increment & Decrement Counter</h1>
      <h3>Using React & Redux</h3>
      <div className="quantity">
      <a className="quantity__minus" onClick={()=>{dispatch(decrementNum())}} title="Decrement" ><span>-</span></a>
        <input class="quantity__input" name="quantity" type="text" value={changeCounter} />
        <a className="quantity__plus" onClick={()=>{dispatch(incrementNum())}} title="Increment" ><span>+</span></a>
      </div>
    </div>
    </div>
    </>
  )
}

export default App
import { useState } from 'react';
import './App.css';
import PostList from './Components/PostList';

function App() {
  const[toggle, settoggle]= useState(true)
  return (
    <div className="App">
      <button className='post-btn' onClick={()=>settoggle(!toggle)}>{toggle? "Get Posts": "Hide Posts"}</button>
      <div>
        {toggle? "" : <PostList />}
      </div>
    </div>
  );
}
export default App;
import React from 'react';
import './App.css';
import { Button } from 'antd';
const App = () =>{
  return (
    <div className="App">
      <Button type="primary">按钮</Button>
      { process.env.REACT_APP_MODE }
    </div>
  );
};
export default App;

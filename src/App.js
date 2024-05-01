import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/functionalGreet';
import Welcome from './components/classWelcome';
import Hello from './components/jsxHello';
import Messages from './components/statemessage';
import ClassMessage from './components/classMessage';
import Counter from './counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import { PureComp } from './components/PureComponent';
import { ParentComp } from './components/ParentComp';
import { MemoComp } from './components/MemoComp';
import Parent1 from './components/parent1';

// function App() {
  class App extends React.Component{
    render(){
  return (
    <div className="App">
      {/* <Greet name='vyshu'>
        <p>This is children Component</p>
      </Greet> */}
      {/* <FunctionClick/>
      <ClassClick/>
      <EventBind/> */}
      {/* <ParentComponent/> */}
      <NameList/>
      <ParentComp/>
      <Parent1/>
      {/* <MemoComp/> */}
{/* <Messages/> 
<ClassMessage/> */}
{/* <Counter/> */}
      {/* <Welcome name="vyshu class"/> */}
      <UserGreeting/>
      {/* <Hello/> */}
    </div>
  );
}
  }

export default App;

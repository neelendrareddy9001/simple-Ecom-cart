import React from 'react'
import  ReactDOM  from 'react-dom/client';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useThemeHook} from './GlobalComponents/ThemeProvider'
import Header from './components/Header';

function App() {
  const [theme] = useThemeHook();
  return (
    <div className="App">
        <main className={theme? 'bg-black' : 'bg-light-2'} style={{ height: '100vh', overflowY: 'auto'}}>
          <Header/>
        </main>
    </div>
  )
}

export default App;

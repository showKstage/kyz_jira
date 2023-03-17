import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ProjectListScreem } from 'screens/project-list';
import { LoginScreen } from 'screens/login';
function App() {
  return (
    <div className="App">
      <LoginScreen />
      {/* <ProjectListScreem /> */}
    </div>
  );
}

export default App;

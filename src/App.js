import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer';
import Home from './pages/Home';
import Parser from './pages/Parser';
import FileContext from './store/fileStore';
export default function App() {
  const [tempObj, setTempObj] = useState({
    title: "",
    cells: []
  })
  const [appMsg, setAppMsg] = useState("");
  const state = { tempObj, setTempObj, appMsg, setAppMsg }
  return (
    <FileContext.Provider value={state}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/parser" component={Parser} />
        </Switch>
        <Footer />
      </Router>
    </FileContext.Provider>
  )
}

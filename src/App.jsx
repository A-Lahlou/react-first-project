import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './blury.css'
import Franchises from "./components/Franchises/Franchises";
import BestScorers from "./components/BestScorers/BestScorers";
import Mvpleader from "./components/MvpLadder/mvpladder";
import Contact from "./components/Contact/Contact";
import Last from "./components/Last/Last";



function App() {
  return (
    <div className="App">
        <div>
      <div className="white-gradient"/>
      <Header/>
     <Hero/>
     </div>
<Franchises/>
<BestScorers/>
<Mvpleader/>
<Contact/>
<Last/>
      </div>

   
  );
}

export default App;

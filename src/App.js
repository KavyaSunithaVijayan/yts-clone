import './App.css';
import Header from "./components/common/header";
import HomePage from './page/HomePage';
import Footer from './components/common/footer';
import DetailPage from './page/DetailPage';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="detail" element={ <DetailPage/> } />
      </Routes>
      <Footer/>
      </div>  
  );
}

export default App;
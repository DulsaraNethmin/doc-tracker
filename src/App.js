import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Chat from './components/Chat';
import { BrowserRouter as Router,Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Document from './components/Document';
import Notification from './components/Notification';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
       <Routes>
        <Route path="/documents" exact element={<Document/>} />
        <Route path="/chat" exact element={<Chat />} />
        <Route path="/notification" exact element={<Notification />} />

        </Routes>
      <Chat/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

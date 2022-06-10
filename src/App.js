import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

import { BrowserRouter as Router,Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Document from './components/Document';
import Notification from './components/Notification';
import DocumentList from './components/DocumentList';
import Mail from './components/Mail';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
       <Routes>
        <Route path="/documents" exact element={<Document/>} />
        <Route path="/chat" exact element={<Mail />} />
        <Route path="/notification" exact element={<Notification />} />
        <Route path="/documents/viewdoc" exact element={<DocumentList />} />

        </Routes>
     
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

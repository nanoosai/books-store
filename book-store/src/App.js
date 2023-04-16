import { Routes,Route } from "react-router-dom";


import Header from "./components/Header";
import Home from "./components/Home";
import Addbook from "./components/Addbook"
import Books from "./components/Book/Books";
import About from "./components/About";
import BookDetail from "./components/Book/BookDetail";

function App() {
  return (
    <div >
    <header>
     <Header/>
     </header>
     <main>
     <Routes>
     <Route path='/' element={<Home/>} exact />
     <Route path='/add' element={<Addbook/>} exact />
     <Route path='/books' element={<Books/>} exact />
     <Route path='/about' element={<About/>} exact />
     <Route path='/books/:id' element={<BookDetail/>} exact />
     </Routes>
     </main>
    </div>
  );
}

export default App;

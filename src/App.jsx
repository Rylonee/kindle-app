import Navigation from './Navigation.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ReactReader } from 'react-reader';

import { aboutMeText } from './txt/AboutMe.jsx';

// Defines what the main page looks like.
function Home() {
    return (
        <div>
            <h1 style={{ textAlign: 'center '}}>Hello, welcome to my website!</h1>
            <Navigation/>
        </div>
    );
}

// Just code I had while trying to learn how the Router worked.
function About() {
    return (
        <div>
            <h1>About me</h1>
            <p style={{ whiteSpace: 'pre-wrap' }}>{aboutMeText}</p>
        </div>
    );
}

function Book() {
    return (
        <div style={{ height: '200vh'}}>
            <h1>This is my favorite book</h1>
            {/* This is how you use the generic look of the of react-reader. The book is in public/books/. I am looking into if there are more ways to customize it. */}
            <ReactReader
                url="/books/alice.epub"
            />
        </div>
    )
}

// The Routes is how you define what each page will look like. The path is what the path will be in the browser, and the
// element says what function (the functions above) defines what that pages looks like.
function App() {
    return (
        <BrowserRouter>
            <Link to="/">Home</Link>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/favbook" element={<Book/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App

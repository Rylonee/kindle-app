import Navigation from './Navigation.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ReactReader } from 'react-reader';

import { aboutMeText } from './txt/AboutMe.jsx';

function Home() {
    return (
        <div>
            <h1 style={{ textAlign: 'center '}}>Hello, welcome to my website!</h1>
            <Navigation/>
        </div>
    );
}

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
            <ReactReader
                url="/books/alice.epub"
                location={location}
                locationChanged={(epubcfi) => setLocation(epubcfi)}
            />
        </div>
    )
}

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

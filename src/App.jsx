import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Game from './components/game/Game';
import QuestionEditor from './components/questionEditor/QuestionEditor';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';

function App() {
    return (
        <Router>
            <Nav />

            <Routes>
                <Route exact path='/' element={<Home />}></Route>
                <Route exact path='/tic-tac-toe' element={<Game />}></Route>
                <Route
                    exact
                    path='/tic-tac-toe/questions'
                    element={<QuestionEditor />}
                ></Route>
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;

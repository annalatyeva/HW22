import './App.css';
import Footer from './components/mainPage/Footer';
import Header from './components/mainPage/Header';
import WordList from './components/mainPage/WordList';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <WordList></WordList>
      <Footer></Footer>
    </div>
  );
}

export default App;

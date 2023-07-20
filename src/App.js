import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import Banner from './components/Banner/Banner';

function App() {
  return (
    <div className="App bg-sky-950">
      <Header></Header>
      <Banner></Banner>
      <Cart></Cart>
    </div>
  );
}

function addItem(){
   const addItems = document.getElementById('image1_id');
   console.log(addItems);
}

addItem();

export default App;

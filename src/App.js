import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Slider from './Slider';
import Title from './Title'
import About from './About';
import Card from './PizzaTypes'
import Footer from './Footer'


function App() {
  return (
    <div>
      <Header />
      <Slider />
      <Title />
      <About />
      <Card />
      <Footer />
    </div>
  );
}

export default App;

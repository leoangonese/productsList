import './App.css';
import Home from './components/Home';
import { productsMockup } from './models/products';

function App() {
  return (
    <div className='w-full min-h-screen'>
      <Home products={productsMockup} />
    </div>
  );
}

export default App;

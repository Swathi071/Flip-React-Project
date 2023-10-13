import './App.css'
import './css/bootstrap.css'
import Fsearch from './components/Fsearch';
import Searchbar from './components/Searchbar'
import Slidebar from './components/Slidebar';
import Bank from './components/Bank';
import Products from './components/Products';
import Forms from './components/Forms';

function App() {
  return (
    <>
    <div className='container-fluid sample'>
      <div className='row'>
    <Fsearch/>
    </div>
    <div className='row'>
    <Searchbar/>
       </div>
       <div className='row'>
        <Slidebar/>
       </div>
       <div className='row'>
        <Bank/>
        <Products/>
       </div>
       <div className='row'>
        <Forms/>
        </div>
    </div>
    </>
  );
}
export default App;

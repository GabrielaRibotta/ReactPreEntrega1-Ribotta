import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer.js'
import ItemListContainer from './components/itemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <Header />
      <ItemListContainer greeting="Bienvenido a la tienda" />
      <Footer />
    </div>
  );
}

export default App;

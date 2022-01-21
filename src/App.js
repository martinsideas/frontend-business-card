import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
//---------------------------------------
import './styles/styles.css'

function App() {
  return (
<>
    <div className="great-container">
      <div className="container">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </div>
</>
  );
}

export default App;
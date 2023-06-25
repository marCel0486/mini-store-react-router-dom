// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook



import './App.css'
import  {BrowserRouter,Route,Routes}  from  'react-router-dom'
import Produto from './Componetes/Produto.jsx'
import Header from './Componetes/Header.jsx'
import Footer from './Componetes/Footer.jsx'
import Contato from './Componetes/Contato'
import ProdutoPg from './Componetes/ProdutoPg'

function App() {
  

  return (
    <div className='App'>
  
  <BrowserRouter>
<Header/>

<div className='content'>
  <Routes>

  
    
  <Route path='/' element={<Produto/>}/>
  <Route path='produto/:id' element={<ProdutoPg/>}/>

  <Route path='contato' element={<Contato/>}/>

  </Routes>
  </div>
<Footer/>
  </BrowserRouter>

  </div>

  )
}

export default App

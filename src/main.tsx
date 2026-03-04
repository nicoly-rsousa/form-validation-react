import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Sucesso from './pages/sucesso'  
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>          
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/sucesso" element={<Sucesso />} /> 
    </Routes>
  </BrowserRouter>
)
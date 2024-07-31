import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Footer, Navbar } from "./components";
import { About, Contact, Home, Projects } from "./pages";

const App = () => {
  return (
    // O componente principal é envolvido em uma tag <main> com uma classe CSS
    <main className='bg-slate-300/20'>

      {/* Define o roteamento da aplicação */}
      <Router>

        {/* Renderiza a barra de navegação */}
        <Navbar />

        {/* Define as rotas da aplicação */}
        <Routes>

          {/* Rota para a página inicial */}
          <Route path='/' element={<Home />} />

          {/* Rota com wildcard para outras páginas */}
          <Route
            path='/*'
            // Renderiza os componentes da página e o rodapé
            element={
              <>
                {/* Define as rotas secundárias */}
                <Routes>
                  <Route path='/about' element={<About />} />
                  <Route path='/projects' element={<Projects />} />
                  <Route path='/contact' element={<Contact />} />
                </Routes>

                {/* Renderiza o rodapé */}
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};


export default App;
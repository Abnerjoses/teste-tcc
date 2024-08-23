import './App.scss';

function App() {
  return (
    
    <div className="valhalla">
      <header>

        <div className='img-val'>

        <img src="/assets/valhalla-logo.png" alt="" />

        </div>
        
        <div className='as'>

        <a href="">Criação</a>
        <a href="">Recursos</a>
        <a href="">Preços</a>
        <div>

        <a href="" className='traco'>|</a>
        </div>

        </div>
      
        <div className='mundo'>
          <img src="/assets/image.png" alt="" />
          <button>Entrar</button>
        </div>
    
      </header>

      <div className='corpo'>
     
      <div className='left'>

      <h4>EXEMPLOS DE SITES FEITOS COM VALHALLA</h4>
      
      <h1>A inspiração de web design que você estava procurando</h1>

      </div>

      <div className='right'>
      <p>
          Explore estes exemplos de sites criados por usuários Valhalla reais e obtenha inspiração de web design e práticas recomendadas para criar seu site da maneira que você quiser</p>

      </div>

      </div>

    </div>
  );
}

export default App;

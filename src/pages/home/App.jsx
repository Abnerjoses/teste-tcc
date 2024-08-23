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
      <div className='mãe1'>

        <div className='textos'>
          <h1 className='titulo1'> Exemplos de sites feitos com Valhalla</h1>
        <h2 className='titulo2'>A inspiração de web design que você estava procurando.</h2></div>

        
        
        </div>

        <div className='mãe2'>
        <p className='texto'>
        Explore estes exemplos de sites criados por usuários Valhalla reais e obtenha inspiração de web design e práticas recomendadas para criar seu site da maneira que você quiser</p>

        <hr className='quebra-de-linha'/>

        <button  className='botão' href='#' >Crie seu site</button>



      </div>
    </div>
  );
}

export default App;

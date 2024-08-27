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
     

      <h4>EXEMPLOS DE SITES FEITOS COM VALHALLA</h4>

      <div className='centro'>
       
      <h1>A inspiração de web design que você estava procurando</h1>

      <p>
          Explore estes exemplos de sites criados <br /> por usuários Valhalla reais e obtenha <br />inspiração de web design e práticas <br />recomendadas para criar seu site da <br />maneira que você quiser</p>
    
    </div>

    <div className='segunda'>

      <hr className='linha'/>

      <button className='botao'>Crie seu site</button>

    </div>
    <div className='terceira'> 

      <img  className='print'src="/assets/images/image-removebg-preview.png"/>
      
      
      
      <h1 className='titulo'>Vikings</h1>
      <h2 className='subtitulo'>Explorar site</h2>
   



    </div>

    <div className='quarta'>
      <h1>Envie seu site para ter a chance<br/>
      de aparecer em nossa página</h1>

      <button className='button'>Enviar</button>
    </div>
          



    

      </div>

    </div>
  );
}

export default App;

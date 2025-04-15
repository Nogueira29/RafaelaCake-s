import './App.css'
import './styles.css'
import Cardapio from './assets/componentes/cardapio'

function App() {
  
  return (
    <>

      <div className="social-icons">
				<a href="https://www.linkedin.com/in/robson-silva-a40b711b4/" target="_blank"><i class="fab fa-linkedin"></i></a>
				<a href="https://github.com/Nogueira29" target="_blank"><i class="fab fa-github"></i></a>
				<a href="https://www.instagram.com/robsonrj29/" target="_blank"><i class="fab fa-instagram"></i></a>
				<a href="mailto:robsonnogueira59@gmail.com"><i class="far fa-envelope"></i></a>
				<a href="https://wa.me/5521991568222" target="_blank" class="whatsapp-link"><i class="fab fa-whatsapp"></i></a>
			</div>

      <div class= "titcardapio">    
                <img class='logo' src="./imagens/logo2.jpg" alt="" />
      </div>  


   
          <Cardapio />
      

       <footer>
          <p>Desenvolvido por <a href="https://github.com/Nogueira29" target="_blank">Robson Nogueira</a>, no Curso de Programador FrontEnd do Senai (2025) Todos os direitos reservados</p>
      </footer>
    </>
  )
}

export default App

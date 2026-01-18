import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import RotatingText from './components/RotationText'
import './App.css'

function App() {

  // 🔹 Estado que controla qual página está ativa
  const [paginaAtual, setPaginaAtual] = useState('introducao')

  return (
    <>
      <Header />

      {/* Enviamos a função para o Sidebar */}
      <Sidebar mudarPagina={setPaginaAtual} />

      <main className="conteudo-principal">
        <div className="container-principal">

          {/* INTRODUÇÃO */}
          {paginaAtual === 'introducao' && (
            <>
              <h1 className='H1-intro'>Introdução</h1>

              <p className='P-introduçao'>
                Este site é um espaço onde eu reúno, exploro e apresento todas as animações que desenvolvi usando React. Cada animação aqui foi criada como parte do meu processo de aprendizado, testes e experimentação com interfaces modernas, focadas em fluidez, interação e experiência do usuário.             
              </p>

              <p className='P-introduçao2'>
                Mais do que efeitos visuais, as animações deste site mostram como o React pode ser usado para criar interfaces vivas, dinâmicas e funcionais, unindo código limpo, lógica bem estruturada e criatividade.
              </p>

              <p className='P-introduçao2'>
                Sinta-se à vontade para explorar, interagir e aprender com as animações apresentadas aqui. Estou sempre aberto a feedbacks, sugestões e colaborações, então não hesite em entrar em contato se algo chamar sua atenção.
              </p>

              <h1 className="H1-intro">Missão</h1>

              <p className='P-introduçao'>
                A missão deste site é documentar e demonstrar minha evolução no desenvolvimento de animações em React, servindo como um laboratório pessoal de experimentação e, ao mesmo tempo, como um portfólio prático. Aqui, cada animação representa: Um conceito aprendido Um problema resolvido Uma ideia transformada em interface Meu objetivo é continuar explorando novas técnicas, melhorar a qualidade das interações e compartilhar soluções que mostrem, na prática, o poder do React na criação de experiências modernas para a web.
              </p>

              <p className="P-introduçao2">
                Espero que este site sirva como um recurso valioso para quem deseja entender melhor como as animações podem melhorar a experiência do usuário em aplicações React. Vamos juntos nessa jornada de aprendizado e inovação!
              </p>
            </>
            
          )}

          {/* texto Rotativo */} 
          {paginaAtual === 'texto-Rotativo' && ( 
            <>
            <div className='div-texto-rotativo'>
              <h1 className='H1-elemento-1'>Rotating Text Animation</h1>
              <p>Animação de Texto Rotativo.</p> 

            <div className="Caixinha-texto-rotativo">
                <div className="linha-texto-rotativo">
                  <span className="texto-fixo">Programador</span>
                    <RotatingText texts={['Pensativo', 'Competitivo', 'Criativo', 'legal!']} />
                </div>
              </div>
            </div>
            </>
          )}

          {/* ZOOM */}
          {paginaAtual === 'text-reload' && (
            <>
              <h1>Zoom Animation</h1>
              <p>Aqui vai sua animação de zoom.</p>
            </>
          )}

          {/* ROTATE */}
          {paginaAtual === 'rotate' && (
            <>
              <h1>Rotate Animation</h1>
              <p>Aqui vai sua animação de rotate.</p>
            </>
          )}

        </div>
      </main>
    </>
  )
}

export default App

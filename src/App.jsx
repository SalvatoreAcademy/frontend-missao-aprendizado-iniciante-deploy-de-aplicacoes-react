import './App.css'
import Card from './components/Card/Card'

function App() {
  const java = {
    nome: 'Java',
    imagem: 'https://salvatore.academy/devmon/1_java.png',
    evoluiPara: 'Kotlin'
  }

  const kotlin = {
    nome: 'Kotlin',
    imagem: 'https://salvatore.academy/devmon/2_kotlin.png',
    evoluiPara: 'Android'
  }

  const android = {
    nome: 'Android',
    imagem: 'https://salvatore.academy/devmon/3_android.png'
  }

  const c = {
    nome: 'C',
    imagem: 'https://salvatore.academy/devmon/4_c.png',
    evoluiPara: 'C++'
  }

  const devmons = [java, kotlin, android, c]

  return (
    <>
      <div className="cards">
        {devmons.map(function (devmon) {
          return <Card key={devmon.nome} item={devmon} />
        })}
      </div>
    </>
  )
}

export default App

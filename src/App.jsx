import Headers from './components/Header'
import Card1 from './components/Card1'
import Card2 from './components/Card2'
import Card3 from './components/Card3'
import styles from './App.module.css'
import Card4 from './components/Card4'
function App() {
  return (
    <div className={styles.container}>
      <Headers></Headers>
     <div className={styles.flexCards}>
     <Card1></Card1>
      <Card2></Card2>
      <Card3></Card3>
     </div>
     <Card4></Card4>
    </div>
  )
}

export default App
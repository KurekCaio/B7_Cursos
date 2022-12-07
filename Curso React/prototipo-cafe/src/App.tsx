import {useState} from 'react'
import styles from './App.module.css';
import logoMaua from './assets/logo-IMT.png'
import logoNspi from './assets/nspi-logo.png'

const App = () => {

const [name, setName] = useState("")
const [phone, setPhone] = useState(0)
// const [coffe, setCoffe] = useState(0)

  return (
    <div className={styles.main}>

      <header className={styles.headerContainer}>
        <div>
          <img src={logoMaua} alt="" width={200} />
        </div>
        <div>
          <img src={logoNspi} alt="" width={200}/>
        </div>
      </header>

      <div className={styles.titleContainer}> 
        <h1>CAS</h1>
        <h2>Coffe Advanced Service</h2>
      </div>

      <div className={styles.container}>
        <div className={styles.leftSide}>
          <p>Peça seu café preenchendo os campos abaixo:</p>

          <input type="string"
          placeholder="Digite seu nome"
          defaultValue={''}
          onChange={e => setName(e.target.value)}
          />

          <input type="number"
          placeholder="Digite seu n° de celular"
          defaultValue={''}
          onChange={e => setPhone(parseInt(e.target.value))}
          />

          <select name="t1">
            <option disabled selected>--Escolha o sabor do café--</option>
            <option value="0">Café puro</option>
            <option value="1">Capuccino</option>
            <option value="2">Creme brullê</option>
          </select>

          <button>Realizar pedido</button>
        </div>

        <div className={styles.rightSide}>bbb</div>
      </div>
    </div>
  );
}

export default App;
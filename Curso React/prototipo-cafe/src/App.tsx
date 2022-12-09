import {useState} from 'react'
import styles from './App.module.css';
import logoMaua from './assets/logo-IMT.png'
import logoNspi from './assets/nspi-logo.png'

const App = () => {

const [name, setName] = useState("")
const [phone, setPhone] = useState(0)
const [coffe, setCoffe] = useState(0)

const sendRequest = () => {
  if (name && phone) {
    alert('a')
  } else {
    alert({coffe})
  }
}

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

          <select name="t1" onChange={e => setCoffe(parseInt(e.target.value))}>
            <option value="-1" disabled selected>--Escolha o sabor do café--</option>
            <option value="0">Café puro</option>
            <option value="1">Capuccino</option>
            <option value="2">Creme brullê</option>
          </select>

          <label>
            <input type="checkbox" value='info' className={styles.checkbox}/>
            Gostaria de receber informativos da Mauá?
          </label>
          
          <button onClick={sendRequest}>Realizar pedido</button>
        </div>

        <div className={styles.rightSide}>blob</div>
      </div>
    </div>
  );
}


// criar classe com nome, numero, sabor e *opcional* checkbox info
// onClick no botao salvar as infos na classe
// exibir resultado na direita


export default App;
import {useState, useEffect} from 'react'
import Axios from 'axios'
import styles from './App.module.css';
import logoMaua from './assets/logo-IMT.png'
import logoNspi from './assets/nspi-logo.png'
import {useForm} from 'react-hook-form'

const App = () => {

useEffect(() => {
  Axios.get('http://localhost:3001/api/get').then((response) => {
  // console.log(response.data)
  setList(response.data)
  })
}, [])

const [name, setName] = useState("")
const [phone, setPhone] = useState(0)
const [coffee, setCoffee] = useState(0)
const [info, setInfo] = useState(false)
const [list, setList] = useState<any[]>([])

const sendRequest = () => {
  if (name && phone && coffee) {
    Axios.post('http://localhost:3001/api/insert', {
      name: name, 
      phone: phone, 
      coffee: coffee,
      info: info
    })

    setList([...list, {name: name, phone: phone}])

    setName("")
    setPhone(0)
    setCoffee(0)
    setInfo(false)

  } else {
    alert("Preencha todos os campos")
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
        <h2>Coffee Advanced Service</h2>
      </div>

      <div className={styles.container}>
        <div className={styles.leftSide}>
          <p>Peça seu café preenchendo os campos abaixo:</p>

          <input 
          type="text"
          placeholder="Digite seu nome"
          value={name.length > 0 ? name : ''}
          onChange={e => setName(e.target.value)}
          pattern="[A-Za-Z].{3}"
          minLength={2}
          maxLength={15} 
          required
          />

          <input 
          type="number"
          placeholder="Digite seu n° de celular"
          value={phone > 0 ? phone : ''}
          onChange={e => setPhone(parseInt(e.target.value))}
          minLength={8}
          maxLength={30}
          required
          />

          <select 
          id='saborCafe' 
          onChange={e => setCoffee(parseInt(e.target.value))} 
          value={coffee !== 0 ? coffee : 0}
          >
            <option value="0" disabled>--Escolha o sabor do café--</option>
            <option value="1">Café puro</option>
            <option value="2">Capuccino</option>
            <option value="3">Creme brullê</option>
          </select>


          <div className={styles.checkboxDiv}>
            <input 
              type="checkbox"
              value='info' 
              className={styles.checkbox}
              checked={info} 
              onChange={e => {setInfo(e.target.checked)}} />
            <p>Gostaria de receber informativos da Mauá?</p>
          </div>
          
          <button onClick={sendRequest}>Realizar pedido</button>
        </div>

        <div className={styles.rightSide}>
          {list.map((val, key) => {
            return (<h4 key={key}>Nome: {val.name} | Phone: {val.phone}</h4>)
          })}
          BLOB
        </div>

      </div>
      
    </div>
  );
}

export default App;
import styles from './App.module.css';
import poweredImg from './assets/powered.png'
import {useState} from 'react';
import {levels,calculateImc} from './helper/imc'
import { Grid } from './components/Grid'

const App = () => {

const [height, setHeight] = useState(0);
const [weight, setWeight] = useState(0);

const calculate = () => {
  if(height && weight) {
    calculateImc(height,weight)
  } else {
    alert("Digite todos os campos!");
  }
}

  return (
    <div className={styles.main}>
      <header className={styles.headerContainer}>
      <div>
        <img src={poweredImg} alt="" width={150} />
      </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>

          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
        
          <input 
            type="number"
            placeholder='Digite sua altura. Ex: 1.5 (em metros)'
            value={height > 0 ? height : ''}
            onChange={e => setHeight(parseFloat(e.target.value))}
            /> 

          <input 
            type="number"
            placeholder='Digite seu peso. Ex: 65.3 (em kg)'
            value={weight > 0 ? weight : ''}
            onChange={e => setWeight(parseFloat(e.target.value))}
            />

            <button onClick={calculate}>Calcular</button> 
        </div>

        <div  className={styles.rightSide}>
          <div className={styles.grid}>
            {levels.map((item,key)=>(
              <Grid item={item }key={key}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

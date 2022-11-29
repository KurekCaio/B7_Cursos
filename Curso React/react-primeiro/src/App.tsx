import { useState } from 'react';

function App() {
  const [show, setShow] = useState(false);

  const clique = () => {
    setShow( !show ) 
  }

  return (
    <div>
      <button onClick={clique}>{show ? 'Ocultar' : 'Mostrar'}</button>

      {show === true &&
      <div>Bla bla bla</div>
      }
      </div>
  );   
}
export default App;
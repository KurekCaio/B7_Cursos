import * as C from './AppStyles'

function App() {
  return (
    <C.Container bgColor="#CCC">
         Texto do Container.
         <a className="link" href="">Linkzada</a>
         <C.Botao bg="#FF0000" >Clique maior</C.Botao>
         <C.Botao bg="#00FF00" small>Clique menor</C.Botao>
    </C.Container>
  );   
}
export default App;




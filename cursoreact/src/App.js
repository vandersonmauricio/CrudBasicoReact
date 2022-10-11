
import './App.css';

import FirstComponent from './component/FirstComponent';
import AnotherComponent from './component/AnotherComponent';
import Imagem from './component/Imagem';
import Hooks from './component/Hooks';
import List from './component/List';
import RenderCond from './component/RenderCond';
import Fragment from './component/Fragment';
import Container from './component/Container';

function App() {
  return (
    <div className="App">
     <h2>Hello react</h2>
     <FirstComponent/>
      <AnotherComponent/>
      <Imagem/>
      <Hooks/>
      <List/>
      <RenderCond x ={5}/>
      <Fragment/>
      <Container>
        <h1>teste container</h1>
      </Container>
    </div>
  );
}

export default App;

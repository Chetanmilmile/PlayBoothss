
import {BrowserRouter,BrowserRouter as ,Route,Routes}from'react-router-dom';
import Home from './Screens/Home';
import Playground from './Screens/Platground';
import Error from './Screens/Error';
import { GlobalStyle } from './style/global';
function App() {
  return (
    <BrowserRouter>
    <GlobalStyle/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/playground" element={<Playground/>}/>
       <Route path="*" element={<Error/>}/>
     </Routes>   
    </BrowserRouter>
  );
}

export default App;

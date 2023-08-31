
import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './Home';
import Dummy from './Dummy';
import Topbar from './Topbar';
import Dashboard from './components/Dashboard';
import Pricing from './components/Pricing';
import Form from './components/Form';


function App() {
  const data={
    course:"web page development",
    duration:  ": 2 months"
  }
  return (
    <div>
      
  <Topbar course={data}></Topbar>

        <Dummy simple={data}></Dummy>
        <Home></Home>
        <Dashboard appdata={data}></Dashboard>
        <Pricing></Pricing>
        <Form/>
        


    </div>
  );
}

export default App;

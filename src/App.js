import {Switch, Route} from 'react-router-dom';
import './App.css'

import Navbar from './components/Navbar/Navbar'
import HomeScreen from './screens/HomeScreen/HomeScreen'
import CatsScreen from './screens/CatsScreen/CatsScreen'
import StatsScreen from './screens/StatsScreen/StatsScreen'

function App() {
  return (
    <>
      <Navbar />
      <main className="main__container">
        <Switch>
          <Route path="/cats" component={CatsScreen} />
          <Route path="/stats" component={StatsScreen} />
          <Route path="/" component={HomeScreen} />
        </Switch>
      </main>
    </>
  );
}

export default App;

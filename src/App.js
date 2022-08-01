import React from 'react';
import { BrowserRouter as Router , Route , Redirect , Switch} from 'react-router-dom';
import Users from './user/pages/Users';
import Newplace from './places/pages/Newplace';
import Mainnaviagation from './shared/Navigation/Mainnaviagation';

// without switch it will go untill matching end
/// with switch if it finds same it will stop

function App() {
  return <Router>
    <Mainnaviagation/>
    <main>
    <Switch>
      <Route path ="/" exact ><Users/></Route> 
      <Route path  = "/places/new" exact ><Newplace/></Route>
      <Redirect to =  "/" />
    </Switch>
    </main>
 </Router>
}

export default App;

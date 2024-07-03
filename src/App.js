import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form';
import Team from './components/Team';

/*
basically I just created two components (.js files)
and brought them here like a normal HTML tag
*/

function App() {

  const [usersList, setUsersList] = useState([]);

  const saveUser = (data) => {
    console.log(data);
    setUsersList([...usersList, data]);
    console.log(usersList);
  }

  return (
    <div className="App">
      <Banner/>
      <Form savingUser={data => saveUser(data)} />

      <Team title="Counter Strike" />
      <Team title="Rocket League" />
      <Team title="Fortnite" />
    </div>
  );
}

export default App;

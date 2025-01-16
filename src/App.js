import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Footer from './components/Footer';

/*
basically I just created some components (.js files)
and brought them here like a normal HTML tag
*/

function App() {

  const teams = [
    {
      "name": 'Counter Strike',
      "firstColor": '#FFBA05',
      "secondColor": '#FFF5D9'
    },
    {
      "name": 'Rocket League',
      "firstColor": '#E06B69',
      "secondColor": '#FDE7E8'
    },
    {
      "name": 'Fortnite',
      "firstColor": '#82CFFA',
      "secondColor": '#E8F8FF'
    }
  ];

  const [usersList, setUsersList] = useState([]);

  const saveUser = (data) => {
    setUsersList([...usersList, data]);
  }
  
  return (
    <div className="App">
      
      <Banner imagePath='/imagens/banner.png' altText='page_banner' />

      <Form savingUser={data => saveUser(data)} teams={ teams.map(item => item.name) } />

      { teams.map(item => <Team key={item["name"]} title={item["name"]} priColor={item["firstColor"]} secColor={item["secondColor"]} team={usersList.filter(user => user.team === item.name)} />) }

      <Footer/>
    </div>
  );
}

export default App;

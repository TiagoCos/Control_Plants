import { useEffect, useState } from 'react';

const plants_Url = "https://plant.id/api/v3";
const apiKey = "45xsL3fMn7u4LeG3OIM6v0Z2zAkTqSoeC6wzrWU5Nhwj7Io2IK";

const Home = () => {
  const [listPlants, setListPlants] = useState([]);

  const getPlants = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setListPlants(data);
    console.log(data)
  };

  useEffect(() => {
    const Url_final = `https://servicos.jbrj.gov.br/flora/genus/pitaiya`;
    getPlants(Url_final);
  }, []); // vetor de condição vazio

  return (
    <div className='container'>
      <div className="plants-container">
         { /*<div>{listPlants.length && listPlants.map((plants) => <p>{plants.id}</p>)}</div>*/}
      </div>
      <p>{listPlants}</p>
    </div>
  );
};

export default Home;
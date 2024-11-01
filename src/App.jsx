import React from 'react';
import { Block } from './Block';

function App() {
  const [rates, setRates] = React.useState([])

  React.useEffect(() => {
    try {
      const req = fetch('http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/currency')
      .then(res => res.json())
      console.log(req);
      
    } catch (error) {
      console.error('Error - ', error)
    }
  })

  return (
    <div className="App">
      <Block value={0} currency="RUB" onChangeCurrency={(cur) => console.log(cur)} />
      <Block value={0} currency="USD" />
    </div>
  );
}

export default App;
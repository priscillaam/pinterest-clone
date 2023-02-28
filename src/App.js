import './App.css';
import React, {useState} from 'react'
import Navigation from './components/Navigation';
import PinTemplate from './components/PinTemplate';
import unsplash from './api/unsplash'

function App() {
  const [pins, setPins] = useState([]);

  const getImages = (term) => {
    return unsplash.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term
      }
    });
  }

  const onSearch = (term) => {
    console.log('term: ', term);
    getImages(term).then((res)=>{
      let results = res.data.results;

      let newPins = [
        ...results,
        ...pins,
      ]

      // newPins.sort(function(a, b) {
      //   return 0.5 - Math.random();
      // });
      setPins(newPins);
    })
  }


  return (
    <div className="App">
      <Navigation onSubmit={onSearch}/>
      <PinTemplate pins={pins}/>
    </div>
  );
}

export default App;

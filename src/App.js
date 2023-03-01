import './App.css';
import React, {useState, useEffect} from 'react'
import Navigation from './components/Navigation';
import PinTemplate from './components/PinTemplate';
import unsplash from './api/unsplash'

function App() {
  const [pins, setPins] = useState([]);

  const getImages = (term) => {
    return unsplash.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term,
        per_page: 30
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
//only when Home is pressed to randomize pins
  // const getNewPins = () => {
  //   let promises = [];
  //   let pinData = [];

  //   let pins = ['ocean', 'Tokyo', 'dogs', 'cats'];

  //   pins.forEach((pinTerm) => {
  //     promises.push(
  //       getImages(pinTerm).then((res) => {
  //         let results = res.data.results;

  //         pinData = pinData.concat(results);

  //         pinData.sort(function(a, b){
  //           return .5 - Math.random();
  //         });
  //       })
  //     )
  //   })
  //   Promise.all(promises).then(() => {
  //     setPins(pinData);
  //   });
  // };

  // useEffect(() => {
  //   getNewPins()
  // }, []);


  return (
    <div className="App">
      <Navigation onSubmit={onSearch}/>
      <PinTemplate pins={pins}/>
    </div>
  );
}

export default App;

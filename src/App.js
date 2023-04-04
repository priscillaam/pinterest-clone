import './App.css';
import React, {useState} from 'react'
import Navigation from './components/Navigation';
import PinTemplate from './components/PinTemplate';
import unsplash from './api/unsplash';
import Footer from './components/Footer.js';
import TodayTemplate from './components/TodayTemplate';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';


/* Read me please!!!

Current fixes to do: 
**make buttons into functional dropdown menus selectors
 1. Fully responsive navigation profile and selector buttons
 2. Home pins
 3. Search pins
 4. Today pin board with functional board pin accumulation
 5. update build for netlify and run

 optimize performance code splitting: https://www.youtube.com/watch?v=j8NJc60H294
 pwa: https://www.youtube.com/watch?v=IaJqMcOMuDM
 pins: https://www.youtube.com/watch?v=wV734HJbrpc&t=7777s
 
 **update build for netlify again

*/


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
      <Router>
        <Navigation onSubmit={onSearch}/>
        <Routes>
          <Route exact path="/" element={<PinTemplate pins={pins}/>}/>
          <Route exact path ="/today" element={<TodayTemplate pins={pins} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

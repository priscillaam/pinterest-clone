import './App.css';
import React, {useState, useEffect} from 'react'
import Navigation from './components/Navigation';
import PinTemplate from './components/PinTemplate';
import unsplash from './api/unsplash';
import TodayTemplate from './components/TodayTemplate';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchTemplate from './components/SearchTemplate';
import ProfileTemplate from './components/ProfileTemplate';

/* Read me please!!!

Current to do:
 7. Connect firebase to save show saved pins - google authentication (you can do it!) - optional

 optimize performance code splitting: https://www.youtube.com/watch?v=j8NJc60H294

*/

function App() {

  const getImages = (term) => {
    return unsplash.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term,
        per_page: 30
      }
    });
  }

  const getTodayImages = (term) => {
    return unsplash.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term,
        per_page: 1,
        orientation: 'portrait'
      }
    });
  }


  const [searchPins, setSearchPins] = useState([]);
  const onSearch = (term) => {
    setSearchPins([]);
    console.log('term: ', term);
    getImages(term).then((res)=>{
      let results = res.data.results;

      let newPins = [
        ...results,
      ]

      newPins.sort(function(a, b) {
        return 0.5 - Math.random();
      });
      setSearchPins(newPins);
    });
  }
  const [homePins, setHomePins] = useState([]);

//only when Home is pressed to randomize pins
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getNewPins = () => {
    let promises = [];
    let pinData = [];


    let homePins = ['skincare', 'flower shop', 'summer fashion', 'interior design'];

    homePins.forEach((pinTerm) => {
      promises.push(
        getImages(pinTerm).then((res) => {
          let results = res.data.results;

          pinData = pinData.concat(results);

          pinData.sort(function(a, b){
            return .5 - Math.random();
          });
        })
      )
    })
    Promise.all(promises).then(() => {
      setHomePins(pinData);
    });
  };

  const [todayPins, setTodayPins] = useState([]);
  const getTodayPins = () => {
    let promises = [];
    let pinData = [];


    let todayPins = ['skincare', 'flower store', 'summer style', 'interior decoration', 'outdoor patio decoration', 'ethnic meal', 'jewelry aesthetic'];

    todayPins.forEach((pinTerm) => {
      promises.push(
        getTodayImages(pinTerm).then((res) => {
          let results = res.data.results;

          pinData = pinData.concat(results);
        })
      )
    })
    Promise.all(promises).then(() => {
      setTodayPins(pinData);
    });
  };

  useEffect(() => {
    getNewPins();
    getTodayPins();
  }, []);

  return (
    <div className="App">
      <Router>
        <Navigation onSubmit={onSearch}/>
        <Routes>
          <Route exact path="/" element={<PinTemplate pins={homePins}/>}/>
          <Route exact path ="/today" element={<TodayTemplate pins={todayPins} />} />
          <Route exact path="/search" element={<SearchTemplate pins={searchPins} />} />
          <Route exact path="/profile" element={<ProfileTemplate pins={homePins}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

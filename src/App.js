import { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import DogProfile from './DogProfile';
import { Routes, Route } from 'react-router-dom';
import DogList from './DogList';
import hazel from './images/hazel.jpg';
import tubby from './images/tubby.jpg';
import whiskey from './images/whiskey.jpg';


class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  }
  render() {
    const getDog = props => {
      let name = props.match.params.name;
      let currentDog = this.props.dogs.find(
        dog => dog.name.toLoweCase() === name.toLoweCase()
      );
      return <DogProfile {...props} dog={currentDog} />;
    }
    return (

      <div>
        <Navbar />
        <Routes>
          <Route path='/dogs' element={<DogList dogs={this.props.dogs} />} />
          <Route path='/dogs/:name' render={getDog} />
        </Routes>
      </div>
    )
  }

}


export default App;

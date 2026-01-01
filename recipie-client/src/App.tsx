import { useEffect } from 'react'
import Button from './components/Button'
import IconButton from './components/IconButton'
import SearchBar from './components/SearchBar'
import axios from 'axios'
import './App.css'

function App() {

  


  useEffect(() => {
    axios.get('http://localhost:5250/recipie')
      .then(response => {
        console.log('Backend health check response:', response.data);
      })
      .catch(error => {
        console.error('Error during backend health check:', error);
      });

    axios.get('http://localhost:5250/mealplan/week?year=2025&week=52')
      .then(response => {
        console.log('Ingredient endpoint response:', response.data);
      })
      .catch(error => {
        console.error('Error accessing ingredient endpoint:', error);
      });
  }, []);

  return (
    <>
      <Button text="Click Me" onClick={() => alert('Button Clicked!')} />
      <IconButton />
      <SearchBar />
      <div style={{display: 'flex', columnGap: '3rem'}}>
        
      </div>
    </>
  )
}

export default App

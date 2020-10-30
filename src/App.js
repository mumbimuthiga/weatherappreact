import React from 'react'
import './App.css';
import Weather from './components/weather.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css';
const APIKEY='c4c8bbf816b272d30cd4ff0a4f56d6b5';



class App extends React.Component{
  constructor(){
    super();
    this.state={
      city:undefined,
      country:undefined
    };
    this.getWeather();
  }
  
 getWeather=async()=>{
   const api_call=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=${APIKEY}`)
   const response=api_call.json();
   console.log(response);
   this.setState({
     city:response.name,
     country:response.sys.country
   });
   
 }

  render(){
   
    return(
      <div className="App">
      <Weather city={this.state.city} country={this.state.country}></Weather>
     
     
       
     </div>
    )

      
  }
 
}
export default App;


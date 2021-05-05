import React, {Component} from 'react';
class App extends Component{
constructor(props) {
  super(props)
  this.state={
    items : [],
    isLoaded:false,
  }
 }

componentDidMount() {
  fetch ('https://restcountries.eu/rest/v2/')
  .then(res=> res.json())
  .then(json=> { 
    this.setState({
      isLoaded: true,
      items : json,
    })

   });
}
  
  render(){
    var{isLoaded, items} = this.state;
    if(!isLoaded){
      return<div>Loading.... </div>
    }
    else{ 
      return (
        <div className="App">
          <ul> "Countries and Their Capital"
            {items.map(item=>(
              <li key={item.id}>
                Name: {item.name} <br></br>
                Capital: {item.capital} <br></br>
                                
              </li>
            ))};


          </ul>
       </div>
     );
    }
   }
   
}
   
export default App;

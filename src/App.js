import React, {useState, useEffect, useReducer} from 'react';
import NavBar from './components/NavBar';
import FilterPanel from './components/FilterPanel'
import ProductsList from './components/ProductsList';


import { Container, Grid, makeStyles, Checkbox, FormControlLabel } from "@material-ui/core";

const reducer = (state, action)=>{
  switch(action.type){

      //case "CATEGORY": if(state.map())

      // case  "PRICE":
      // case  "BRAND":
  }
}

function App() {
  const [search, setSearch]=useState('');
  const [checked, setChecked ] =useState([]);
  const [data, setData]=useState([]);
  const [ category, setCategory] = useState([]);
  const [ rating, setRating]= useState([]);
//  const [ state, dispatch] =useReducer(reducer, [...data])


  

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products', {
      method: 'GET',
  })
  .then((response) => response.json())
  .then((responseData) => { setData(responseData) })
  .catch((error) => { console.log(error) });
  
  },[]);

  const handleChange=()=>{
    console.log("hjh")
  }

  const categories=[
    {id:1, category:'Mens clothing'}, {id:2, category:'electronics'}
  ]
  return (
    <div className="App">
      <NavBar search={search} onChange={(e)=>setSearch(e)}/>

      <Grid container>
        <Grid item sm={2} xs={2}>
          <FilterPanel />
        </Grid>

        <Grid item sm={10} xs={10}>
          <ProductsList search={search} data={data} category={category} ratings={rating}/>
        </Grid> 
      </Grid>
    </div>
  );
}

export default App;

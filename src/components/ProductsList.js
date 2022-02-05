import React, {useEffect, useState, useReducer} from 'react';
import { Grid, makeStyles, Container } from "@material-ui/core";
import CardView from './CardView'




const ProductsList = (props) =>{

    
    const [filtered, setFilteredProducts]=useState([props.data]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products', {
          method: 'GET',
      })
      .then((response) => response.json())
      .then((responseData) => { setFilteredProducts(responseData) })
      .catch((error) => { console.log(error) });
      
      },[]);

    useEffect(()=>{
       
        if(props.search.length >0){
        console.log(props.search)
        const filtered = filtered.filter(
            product =>
                product.title.toLowerCase().indexOf(props.search) > -1 || product.description.toLowerCase().indexOf(props.search)
        );
        setFilteredProducts(filtered);
        console.log(filtered)
        }
        else if(props.category.length > 0){
            const filtered = filtered.filter(
                product =>
                   filtered.filter(element => product.category.toLowerCase() === element )
            )
            setFilteredProducts(filtered)
        }
        else if(props.ratings.length > 0){
            const filtered = filtered.filter(
                product =>
                   filtered.filter(element => product.ratings.toLowerCase() === element )
            )
            setFilteredProducts(filtered)
        }

    },[props.data, props.search])

        
    return(
        <>
        <Container>

        <Grid container spacing={3}>
           

-      {filtered && filtered.map((row)=>(
    
            <Grid item xs={12}  sm={12} md={4}  >
                <CardView  row={row}/>
            </Grid>))
        }
        </Grid>
        </Container>
        </>
    )
}

export default ProductsList;
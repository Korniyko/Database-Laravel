import React, { useEffect } from "react";
import './Reset.scss'

 
type AppProps= {
    getProducts:()=> void
 }

const App = ({getProducts}:AppProps)=>{

    useEffect(()=> {
        getProducts()
   },[])
  

    return(
        <>
         
        </>
    )
}
export default App;
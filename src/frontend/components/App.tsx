import React, { useEffect } from "react";
import './Reset.scss'

 
type AppProps= {
    news:()=> void
 }

const App = ({news}:AppProps)=>{

    useEffect(()=> {
        news()
   },[])
  

    return(
        <>
         
        </>
    )
}
export default App;
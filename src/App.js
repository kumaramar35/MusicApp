import { useEffect } from "react";
import Login from "./components/Login";
import { useStateProvider } from "./Utils/StateProvider";
import { reducerCases } from "./Utils/Constants";
import Spotify from "./components/Spotify";



function App() {
  const [{token},dispatch] = useStateProvider();
  useEffect(()=>{
    const hash = window.location.hash
    // console.log(hash)
    if(hash){
      const token = hash.substring(1).split("&")[0].split("=")[1];
      dispatch({type:reducerCases.SET_TOKEN,token});
      // console.log(token)
    } 
  },[token,dispatch])
  return (
    <div className="App">
    {token ? <Spotify/>:<Login/>}
    </div>
  );
}

export default App;

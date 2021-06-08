import './App.css';
import {useState} from "react"
import {ThemeButton,InputOne} from "./Styles"


  function App() {


    const  [backgroundColor, setBackgroundColor] = useState("black");
    const swit =( )=>{
      if (backgroundColor==="black"||"yellow"||"red") {
        setBackgroundColor("blue")}
       
      else  setBackgroundColor("black")     
} 
const switOne =( )=>{
  if (backgroundColor==="black"||"yellow"||"blue") {
    setBackgroundColor("red")}
   
  else  setBackgroundColor("black")     
} 
const switTwo =( )=>{
  if (backgroundColor==="black"||"blue"||"red") {
    setBackgroundColor("yellow")}
   
  else  setBackgroundColor("black")     
} 
const switThree =( )=>{
  if (backgroundColor==="blue"||"yellow"||"red") {
    setBackgroundColor("Black")}
   
  else  setBackgroundColor("black")     
} 

const  [fontweight, SetFontWeight] = useState("normal");
const switbold =( )=>{
  if (fontweight==="normal") {
    SetFontWeight("bold")}
   
  else  SetFontWeight("normal")     
} 
const swititalic =( )=>{
  if (fontweight==="normal") {
    SetFontWeight("italic")}
   
  else  SetFontWeight("normal")     
} 
const  [under, setUnder] = useState("normal");

const switunder =( )=>{
  if (under==="normal") {
    setUnder("underline")}
   
  else  setUnder("normal")     
} 
  return (
  

    <div className="App">
       <ThemeButton onClick={()=>switbold("bold")}>bold</ThemeButton>
 <ThemeButton onClick={()=>swititalic("italic")} >italic</ThemeButton>
 <ThemeButton onClick={()=>switunder("underline")}>underline</ThemeButton>


 
 <ThemeButton  onClick={()=>swit("blue")}>blue</ThemeButton>

   <InputOne backgroundColor={backgroundColor}fontweight={fontweight}under={under}type="text"></InputOne>  


     <ThemeButton onClick={()=>switThree("black")}>black</ThemeButton>
    <ThemeButton onClick={()=>switOne("red")}>red</ThemeButton>
    <ThemeButton onClick={()=>switTwo("yellow")}>yellow</ThemeButton>

  
    </div>
  );
}

export default App;

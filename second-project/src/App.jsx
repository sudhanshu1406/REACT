import Navbar from "./navbar"
import Card from "./Card"
import Child1 from "./Child1";
function App() {

  let para = {
    color:"red",
    margin:"20px"
  };

  let para1 = {
    color:"yellow",
    margin:"20px"
  };

  let name = "shiva";

  // let input = prompt("what is your name");

  let object = {
    fname : "quasim",
    lname : "sir",
    age : 40
  }

  function fun(){
    alert("function working")
  }

  function add(a){
    return a+a;
  }

  return (
    <>
      <Navbar/>
      <Card/>
      <h1 style={{margin:"20px",fontSize:"50px",color:"red"}}>welcome</h1>
      <h1 style={{margin:"20px",fontSize:"25px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloremque consequatur cupiditate nisi non quod asperiores minima similique omnis illum reprehenderit nam a exercitationem, voluptatem eius provident in cum. Voluptatibus?</h1>
      <h1 style={para}>my name is sudhanshu</h1>
      <h1 style={para}>my name is {name}</h1>
      <h1 style={para1}>my name is {object.fname}</h1>
      <h1 style={para}>my name is {object.lname}</h1>
      <h1 style={para1}>my name is {object.age}</h1>
      {fun()}
      <h1 style={para}>{add(20)}</h1>
      <Child1 name="ritik" age="20"/>
    </>
  )
}

export default App

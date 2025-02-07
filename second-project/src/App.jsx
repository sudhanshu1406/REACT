import Navbar from "./navbar"
function App() {

  let para = {
    color:"blue",
    margin:"20px"
  }

  return (
    <>
      <h1 style={{margin:"20px",fontSize:"50px",color:"red"}}>welcome</h1>
      <h1 style={{margin:"20px",fontSize:"25px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloremque consequatur cupiditate nisi non quod asperiores minima similique omnis illum reprehenderit nam a exercitationem, voluptatem eius provident in cum. Voluptatibus?</h1>
      <h1 style={para}>my name is sudhanshu</h1>
      <Navbar/>
    </>
  )
}

export default App

import Footer from "./Footer"
import GetAdvice from "./GetAdvice"
import GetCatPic from "./GetCatPic"

function App() {
  return (
    <>
      <div id="content">
        <h1>Cat Pictures</h1>
    	  <GetCatPic />
        <hr></hr>
        <h1> Advice from Cats </h1>
        <GetAdvice />
        <hr></hr>
        <Footer />
      </div>
    </>
  )
}

export default App

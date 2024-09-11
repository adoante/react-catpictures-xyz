import Footer from "./Footer"
import GetAdvice from "./GetAdvice"
import GetCatPic from "./GetCatPic"

function App() {
  return (
    <>
      <div id="content">
        <h1>Cat Pictures</h1>
    	  <GetCatPic />
        <h2> Advice from Cats </h2>
        <GetAdvice />
        <Footer />
      </div>
    </>
  )
}

export default App

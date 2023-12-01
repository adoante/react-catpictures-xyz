import Footer from "./Footer"
import GetAdvice from "./GetAdvice"
import GetCatPic from "./GetCatPic"

function App() {
  return (
    <>
    <h1>Cat Pictures</h1>
	  <GetCatPic />
    <h2> Advice from Cats </h2>
    <GetAdvice />
    <Footer />
    </>
  )
}

export default App

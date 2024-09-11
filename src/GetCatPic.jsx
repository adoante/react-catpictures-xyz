function getFetch(id) {
	//change the limit to however many images to use
	const url = "https://api.thecatapi.com/v1/images/search?limit=1";
	const api_key = "live_Wxa2msnPAOBVTVSR47Y0ggWT3davbBWWtzmjtRx4Eyry2zBSM27ZkplxJ454Asdq";

	 fetch(url,{headers: {
	      'x-api-key': api_key
	    }})
	 .then((response) => {
	   return response.json();
	 })
	.then((data) => {
	  document.getElementById(id).src = data[0].url;
	})
}

function GetCatPic() {

	getFetch("cat")

	return (
		<>
		<img id="cat" src=" "></img>
		<button onClick={() => getFetch("cat")}>Click for More!</button>
		</>
	);

}

export default GetCatPic
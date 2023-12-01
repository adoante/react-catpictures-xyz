function GetAdvice() {

	catchAdvice("advice");

	return (
		<>
			<blockquote id="advice"></blockquote>
			<button onClick={() => catchAdvice("advice")}>Click for More!</button>
		</>
	);
}

export default GetAdvice

catchAdvice().catch(error => {
	console.log(error);
	console.error(error);
});

async function catchAdvice(id) {
	const response = await fetch('https://api.adviceslip.com/advice');
	const data = await response.json();
	document.getElementById(id).innerText = data.slip.advice;
}
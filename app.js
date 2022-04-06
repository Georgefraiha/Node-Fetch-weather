import fetch from 'node-fetch';


try {
	const response = await fetch('http://api.weatherstack.com/current?access_key=e6925657a97110a4bb96f1453a8306e2&query=Beirut');
    const body = await response.json();
    const data= body.current;
    console.log("It is currently "+data.temperature+" degrees out. There is a "+data.precip+"% chance of rain");
} catch (error) {
	console.log(error);
}

const city = 'London'; //デフォルト
const appId = "4b5774e9f3d2a07b84f0f2f88e486224";
// イベント発生したときにプルダウンの選択した都市を取得
const selectCity = () => {
	const city = document.getElementById('city').value;
	console.log(city);
	const requestUrl = "https://api.openweathermap.org/data/2.5/weather?APPID=" + appId + "&lang=ja&units=metric&q=" + city + ",jp;";

	// API呼び出す
	async function callApi(){
		const res  = await fetch(requestUrl);
		const weather = await res.json();//jsonメソッドで呼び出す
		console.log(weather);
		console.log(weather.weather[0].main);
		console.log(weather.name);
		console.log(weather.main.temp);
		console.log(weather.main.humidity);
		console.log(weather.main.temp_max);
		console.log(weather.main.temp_min);
		console.log(weather.weather[0].icon)

	}
	callApi()
	.then(weather =>{
		var decode_json = JSON.stringify(weather)
	})
	.catch(err =>{
		console.log(err);
	})
}

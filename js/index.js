const city = 'London'; //デフォルト
const appId = "4b5774e9f3d2a07b84f0f2f88e486224";
// イベント発生したときにプルダウンの選択した都市を取得
const selectCity = () => {
	const city = document.getElementById('city').value;
	console.log(city);
	const requestUrl = "https://api.openweathermap.org/data/2.5/weather?APPID=" + appId + "&lang=ja&units=metric&q=" + city + ",jp;";

	// API呼び出す
	async function callApi() {
		const res = await fetch(requestUrl);
		const weather = await res.json();//jsonメソッドで呼び出す
		console.log(weather);
		console.log(weather.weather[0].main);
		console.log(weather.name);
		console.log(weather.main.temp);
		console.log(weather.main.humidity);
		console.log(weather.main.temp_max);
		console.log(weather.main.temp_min);
		console.log(weather.weather[0].icon)
		// 取得したJSONを分割して表示させる
		// 時間
		const current = new Date();
		const clock = document.getElementById('clock');
		clock.textContent = current.toLocaleDateString() + current.toLocaleTimeString();
		// 選択した都市
		const yourLocation = weather.name;
		document.getElementById('yourLocation').innerHTML = yourLocation;
		// 天気の結果
		const result = weather.weather[0].main;
		document.getElementById('result').innerHTML = result;
		// お天気アイコン
		const iconcode = weather.weather[0].icon;
		const iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
		const img_element = document.createElement('img');
		img_element.src = iconurl;
		img_element.alt = 'weather_icon';
		const icon = document.getElementById('icon');
		icon.appendChild(img_element);
		// 温度
		const temp = weather.main.temp;
		document.getElementById('temp').innerHTML = temp;
		// 湿度
		const humidity = weather.main.humidity;
		document.getElementById("humidity").innerHTML = humidity;
	}
	callApi()
		.then(weather => {
			var decode_json = JSON.stringify(weather)
		})
		.catch(err => {
			console.log(err);
		})
}

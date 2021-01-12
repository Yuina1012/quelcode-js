// API呼び出す
async function callApi(city = 'London') {
	const appId = "4b5774e9f3d2a07b84f0f2f88e486224";
	const requestUrl = "https://api.openweathermap.org/data/2.5/weather?APPID=" + appId + "&lang=ja&units=metric&q=" + city + ",jp;";
	const res = await fetch(requestUrl);
	const weather = await res.json();//jsonメソッドで呼び出す
	// 取得したJSONを分割して表示させる
	// 時間を表示
	const current = new Date();
	const clock = document.getElementById('clock');
	clock.textContent = current.toLocaleDateString() + '\n' + current.toLocaleTimeString();
	// 選択した都市名を表示
	const yourLocation = weather.name;
	document.getElementById('yourLocation').innerHTML = yourLocation;
	// 天気の結果
	const result = weather.weather[0].main;
	document.getElementById('result').innerHTML = result;

	// 温度
	const temp = weather.main.temp;
	document.getElementById('temp').innerHTML = temp;
	// 湿度
	const humidity = weather.main.humidity;
	document.getElementById("humidity").innerHTML = humidity;
	// お天気アイコン
	const icon = document.getElementById('icon');
	const iconcode = weather.weather[0].icon;
	const iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
	document.getElementById('icon').innerHTML = '<img src = ' + iconurl + '>'
	// イベント発生したときにプルダウンの選択した都市を取得
}
const selectCity = () => {
	const city = document.getElementById('city').value;
	callApi(city)
		.catch(err => {
			console.log(err);
		})
}
callApi()
	.catch(err => {
		console.log(err);
	})

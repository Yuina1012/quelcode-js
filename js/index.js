const city = 'London'; //デフォルト
const appId = "4b5774e9f3d2a07b84f0f2f88e486224";
// イベント発生したときにプルダウンの選択した都市を取得
const selectCity = () => {
	const city = document.getElementById('city').value;
	console.log(city);
	const requestUrl = "https://api.openweathermap.org/data/2.5/weather?APPID=" + appId + "&lang=ja&units=metric&q=" + city + ",jp;";

}

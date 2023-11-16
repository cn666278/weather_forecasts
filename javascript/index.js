/**
 * 目标1：默认显示-北京市天气
 *  1.1 获取北京市天气数据
 *  1.2 数据展示到页面
 */
// 获取并渲染城市天气函数
function getWeather(cityCode) {
    // 1.1 获取北京市天气数据
    myAxios({
        url: 'http://hmajax.itheima.net/api/weather',
        params: {
            city: cityCode
        }
    }).then(result => {
        console.log(result)
        const wObj = result.data
        // 1.2 数据展示到页面
        // 阳历和农历日期
        const dateStr = `<span class="dateShort">${wObj.date}</span>
        <span class="calendar">Lunar Calendar&nbsp;
            <span class="dateLunar">${wObj.dateLunar}</span>
        </span>`
        document.querySelector('.title').innerHTML = dateStr
        // 城市名称
        document.querySelector('.area').innerHTML = wObj.area
        // 当天气温
        const tempStr = `<div class="tem-box">
        <span class="temp">
            <span class="temperature">${wObj.temperature}</span>
            <span>°</span>
        </span>
    </div>
    <div class="climate-box">
        <div class="air">
            <span class="psPm25">${wObj.psPm25}</span>
            <span class="psPm25Level">${wObj.psPm25Level}</span>
        </div>
        <ul class="weather-list">
            <li>
                <img src="${wObj.weatherImg}" class="weatherImg" alt="">
                <span class="weather">${wObj.weather}</span>
            </li>
            <li class="windDirection">${wObj.windDirection}</li>
            <li class="windPower">${wObj.windPower}</li>
        </ul>
    </div>`
        document.querySelector('.weather-box').innerHTML = tempStr

    })
}

// 默认进入网页，显示北京市天气
getWeather(110100)
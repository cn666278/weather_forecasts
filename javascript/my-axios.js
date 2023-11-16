function myAxios(config) {
    // 返回一个Promise对象
    return new Promise((resolve, reject) => {
        // 创建xhr对象
        const xhr = new XMLHttpRequest();
        // 设置请求行
        if (config.params) {
            const paramsObj = new URLSearchParams(config.params)
            const queryString = paramsObj.toString()
            config.url += `?${queryString}`
        }
        // 设置请求头
        xhr.open(config.method || 'GET', config.url); // 默认GET请求
        // 绑定事件监听，处理响应结果
        xhr.addEventListener('loadend', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(JSON.parse(xhr.response))
            } else {
                reject(new Error(xhr.response))
            }
        })
        // 设置请求体
        if (config.data) {
            const jsonStr = JSON.stringify(config.data)
            xhr.setRequestHeader('Content-Type', 'application/json')
            xhr.send(jsonStr)
        } else {
            xhr.send()
        }
    })
}
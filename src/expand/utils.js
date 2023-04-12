//新建Cookie

export function setCookie(name, value, expires) {
    document.cookie = `${name}=${value};expires=${expires}`
}

//根据name查找Cookie
export function getCookie(name) {
    let cookies = document.cookie.split(';')
    for (let index in cookies) {
        if (cookies[index].trim().split('=')[0] === `${name}`) {
            return cookies[index].trim().split('=')[1]
        }
    }
}

//时间转换
export function tsToDate(timestamp) {
    let date = new Date(parseInt(timestamp)).toLocaleString().replace(/:\d{1,2}$/,' ');
    if (date !== null) {
        return date
    } else {
        return 'error'
    }
}

export function dateToTimestamp(date) {
    let timestamp = (new Date(date)).getTime()
    if (isNaN(timestamp)) {
        return 0
    } else {
        return timestamp
    }
}

//拷贝对象
export function copyObject(object) {
    return JSON.parse(JSON.stringify(object))
}

export function formatJSON(jsonString) {
    let indentLevel = 0;
    let result = "";

    for (let i = 0; i < jsonString.length; i++) {
        let char = jsonString[i];

        if (char === '{' || char === '[') {
            result += char + "\n" + indent(++indentLevel);
        } else if (char === '}' || char === ']') {
            result += "\n" + indent(--indentLevel) + char;
        } else if (char === ',') {
            result += char + "\n" + indent(indentLevel);
        } else {
            result += char;
        }
    }

    return result;
}

function indent(level) {
    return "  ".repeat(level);
}

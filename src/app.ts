console.log(getHelloWithDate())

/**
 *  「こんにちは」を取得する
 *  @return {string} 文字列
 */
function getHello(): string
{
    return "こんにちは"
}

/**
 *  時間によって挨拶を返す関数
 *  @return {string} 文字列
 */
function getHelloWithDate(): string
{
    const date = new Date()
    const hour = date.getHours()

    if (hour >= 5 && hour < 12) {
        return "おはよう"
    }else if (hour >= 12 && hour < 18) {
        return "こんにちは"
    }else if (hour >= 18 && hour < 0) {
        return "こんばんは"
    }else {
        return "おやすみ"
    }
}
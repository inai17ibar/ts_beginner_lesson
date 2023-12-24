console.log(mergeString('俺は', '明日', '勉強する')) // 俺は明日勉強する

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

/**
 *  0から100までを表示する
 *  @return {void}
 */
function showHundred1(){
    for (let i = 0; i <= 100; i++) {
        console.log(i)
    }
}

/**
 *  0から100までを表示する。5の倍数ごとに改行する。
 *  @return {void}
 */
function showHundred2(){
    for (let i = 0; i <= 100; i++) {
        if (i % 5 === 0) {
            //process.stdout.write("\n")
            console.log("\n")
        }
        console.log(i)
        //process.stdout.write((i.toString() + " "))
        //terminalでうまく改行されない
    }
}

/**
 *  3つの文字列を連結した文字列を返す
 *  @param {string} str1 文字列1
 *  @param {string} str2 文字列2
 *  @param {string} str3 文字列3
 *  @return {string} 連結した文字列
 */
function mergeString(str1: string, str2: string, str3: string): string
{
    return str1 + str2 + str3
}
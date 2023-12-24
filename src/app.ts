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

enum CalcType {
    Add = "Add",
    Sub = "Sub",
    Mul = "Mul",
    Div = "Div"
}
/**
 *  二つの値の足し算、引き残、掛け算、割り算の計算
 *  @param {number} a 値
 *  @param {number} b 値
 *  @param {CalcType} type 計算種別（enumで定義してください。）
 *  @return {number} 出力結果
 */
function calc(a: number, b: number, type: CalcType): number {
    switch (type) {
        case CalcType.Add:
            return a + b;
        case CalcType.Sub:
            return a - b;
        case CalcType.Mul:
            return a * b;
        case CalcType.Div:
            if (b === 0) {
                throw new Error("Division by zero is not allowed.");
            }
            return a / b;
        default:
            throw new Error(`Unknown calculation type: ${type}`);
    }
}

// const a = 10;
// const b = 2;
// console.log('Add', calc(a, b, CalcType.Add))      // Add 12
// console.log('Sub', calc(a, b, CalcType.Sub))      // Sub 8
// console.log('Multi', calc(a, b, CalcType.Mul))  // Multi 20
// console.log('Div', calc(a, b, CalcType.Div))      // Div 5

/**
 *  配列を任意の倍数にする
 *  @param {number[]} nums 対象データ配列
 *  @param {number} multiple 倍数
 *  @return {number[]} 出力結果 multipleの値で掛けたnumsの結果
 */
function multiple(nums: number[], multiple: number): number[]{
    return nums.map((num) => num * multiple)
}
//console.log('multiple', multiple([10, 2, 4, 1], 3)) // multiple [ 30, 6, 12, 3 ]

/**
 *  * を描画する
 *  @param {number} size *の最大個数
 *  @param {boolean} isReverse true:*が多い順に表示, false：*が少ない順に表示
 *  @return {void}
 */
function drawAsterisk1(size: number, isReverse: boolean) {
    let result: string = ''
    /**
     * for文とif文を使ってresultに*を連結して作成してください。
     */
    if (isReverse) {
        result = '*'.repeat(size+1)
    } 
    for (let i = 0; i < size; i++) {
        if (isReverse) {
            result = result.slice(0, -1)
        } else {
            result += '*'
        }
        console.log(result)
    }
}

//drawAsterisk1(5, true)
//drawAsterisk1(5, false)

/**
 *  * を描画する
 *  @param {number} size *の最大個数
 *  @param {boolean} isReverse true:*が多い順に表示, false：*が少ない順に表示
 *  @return {void}
 */
function drawAsterisk2(size: number, isReverse: boolean) {
    let result: string = ''
    let star: string = ''
    /**
     * for文とif文を使ってresultに*を連結して作成してください。
     */
    if (isReverse) {
        star = '*'.repeat(size+1)
    }
    for (let i = 0; i < size; i++) {
        if (isReverse) {
            star = star.slice(0, -1)
            result = ' '.repeat(i) + star
        } else {
            result = ' '.repeat(size-i-1) + '*'.repeat(i+1)
        }
        console.log(result)
    }
  }

//drawAsterisk2(5, true)
//drawAsterisk2 (5, false)

/**
 *  * を描画する
 *  @param {number} size *の個数
 *  @param {boolean} isReverse true:*が多い順に表示, false：*が少ない順に表示
 *  @return {void}
 */
function drawAsterisk3(size: number, isReverse: boolean) {
    let result: string = ''
    /**
     * for文とif文を使ってresultに*を連結して作成してください。
     */
    for (let i = 0; i < size; i++) {
        if (isReverse) {
            result = ' '.repeat(i) + '*'
        } else {
            result = ' '.repeat(size-i-1) + '*'
        }
        console.log(result)
    }
  }

//drawAsterisk3(5, true)
//drawAsterisk3 (5, false)

/**
 *  テキストから任意のワードを検索する
 *  @param {string} text 検索対象のテキスト
 *  @param {string} searchWord 検索するワード
 *  @return {boolean} 出力結果 true:存在する false:存在しない
 */
function isSearchText(text: string, searchWord: string): boolean
{
    return text.includes(searchWord)
}

// let sentence1: string = 'TypeScript はマイクロソフトによって開発され、メンテナンスされているフリーでオープンソースのプログラミング言語である。TypeScriptはJavaScriptに対して、省略も可能な静的型付けとクラスベースオブジェクト指向を加えた厳密なスーパーセットとなっている。C# のリードアーキテクトであり、DelphiとTurbo Pascalの開発者でもあるアンダース・ヘルスバーグが TypeScript の開発に関わっている。TypeScriptはクライアントサイド、あるいはサーバサイド (Node.js) で実行されるJavaScriptアプリケーションの開発に利用できる。'
// console.log(isSearchText(sentence1, 'TypeScript'))   // true
// console.log(isSearchText(sentence1, 'メンテナンス'))   // true
// console.log(isSearchText(sentence1, 'shohei'))       // false

/**
 *  テキストから任意のワードを検索する
 *  @param {string} text 検索対象のテキスト
 *  @param {string} searchWord 検索するワード
 *  @return {number} 出力結果 検索ヒットした回数
 */
function searchText(text: string, searchWord: string): number
{
    return text.split(searchWord).length - 1
}

// let sentence2 = "TypeScript はマイクロソフトによって開発され、メンテナンスされているフリーでオープンソースのプログラミング言語である。TypeScriptはJavaScriptに対して、省略も可能な静的型付けとクラスベースオブジェクト指向を加えた厳密なスーパーセットとなっている。C# のリードアーキテクトであり、DelphiとTurbo Pascalの開発者でもあるアンダース・ヘルスバーグが TypeScript の開発に関わっている。TypeScriptはクライアントサイド、あるいはサーバサイド (Node.js) で実行されるJavaScriptアプリケーションの開発に利用できる。"
// console.log(searchText(sentence2, 'TypeScript'))    // 4
// console.log(searchText(sentence2, 'プログラミング'))  // 1
// console.log(searchText(sentence2, 'shohei'))        // 0

/**
 *  配列のソート（挿入ソート）
 *  @param {number[]} nums ソート対象の値配列
 *  @param {boolean} isDesc 降順でのソートフラグ true:降順 false:昇順
 *  @return {number[]} 出力結果
 */
function sort(nums: number[], isDesc: boolean): number[]
{
    if (isDesc) {
        return nums.sort((a, b) => b - a)
    } else {
        return nums.sort((a, b) => a - b)
    }
}

console.log(sort([8, 4, 3, 7, 6, 5, 2, 1], true))   // [ 8, 7, 6, 5, 4, 3, 2, 1 ]
console.log(sort([8, 4, 3, 7, 6, 5, 2, 1], false))  // [ 1, 2, 3, 4, 5, 6, 7, 8 ]
console.log(sort([800, 4, 30, 700, 60, 5, 10, 1, 10], true))   // [ 800, 700, 60, 30, 10, 10, 5, 4, 1 ]
console.log(sort([800, 4, 30, 700, 60, 5, 10, 1, 10], false))  // [ 1, 4, 5, 10, 10, 30, 60, 700, 800 ]

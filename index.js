const a = {
    Make: "Apple",
    Model: "iPad",
    hasScreen: "yes",
    Review: "Great product!",
    test:["dsgh", "sdghbfs", "shdfgf"]
 };
 const b = {
    Make: "Apple",
    Model: "iPad",
    hasScreen:"",
    Review:"",
    test:["shdfgf", "dsgh"]

 };


/**
 * take two object
 * calculate the length of those object
 * carete two variable, one for match answer count and one for unmatch answer
 * create a reduce function and take default value 0
 * call Object.keys("obj") funtion for catch all keys in object
 * if object key type === "object", then match the object value between to object using  includes method
 * if object key type is sting, then compare object  between to object using ===
 * if object value match, increase match count value else increase unmatch count value
 * calculate percentage
 * return match count, unmatch count and percentage
 */

const findPersentance = (one, two) => {
    const fristLangth = Object.keys(one).length
    const secondLangth = Object.keys(two).length

    const smaller= fristLangth < secondLangth ? one : two
    const gretter = smaller === fristLangth ? two : one
    
    let matchCount = 0
    let unMatchCount = 0
    const count = Object.keys(smaller).reduce((acc, val) => {
       
        if(Object.keys(gretter).includes(val)){
            if(typeof gretter[val] === "object"){
                const isMatch = gretter[val].filter(x => smaller[val].includes(x))               
                if(isMatch.length > 0) {
                    matchCount += 1
                    return ++acc
                }
            }
            if(gretter[val] === smaller[val]){                
                matchCount += 1
               return ++acc
            }
            unMatchCount += 1
        }        
        return acc
    }, 0)
    
    return [
        {percent: (count / Math.max(fristLangth, secondLangth)) * 100 },
        {matchCount },
        {unMatchCount}
    ]

}

const restult = findPersentance(a, b)

console.log(restult)
// function getCurrentDate() {
//    return  Date.now()
// }

// module.exports = {
//    getCurrentDate 
// }

function setDate() {
    return Date.now() + global.testData
}

module.exports = {
    setDate
}
console.log(__filename)
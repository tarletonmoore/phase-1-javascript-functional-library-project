function myEach(collection, alert) {
    let newArray = checkCollection(collection)
    newArray.forEach(element => alert(element))
    return collection
}
function checkCollection(collection) {
    if (collection instanceof Array) {
        return [...collection]
    }
    else {
        return Object.values(collection)
    }
}

function myMap(collection, callback) {

    let newCol = checkCollection(collection)
    return newCol.map(element => callback(element))

}

// function checkMap(collection) {
//     if (collection instanceof Array) {
//         return [...collection]
//     }
//     else {
//         return Object.values(collection)
//     }
// }

function myReduce(collection, callback, accumulator) {

    let reduceArray = checkCollection(collection)
    if (!accumulator) {
        accumulator = reduceArray.shift()

    }
    // myReduce([1, 2, 3], function(acc, val, collection) { return acc + val; }, 10);
    for (let i = 0; i < reduceArray.length; i++) {
        accumulator = callback(accumulator, reduceArray[i], reduceArray)
    }
    return accumulator

}

function myFind(collection, predicate) {
    let findArray = checkCollection(collection)
    return findArray.find(element => predicate(element))
}

function myFilter(collection, predicate) {
    let filterArray = checkCollection(collection)
    let predArray = []
    for (let i = 0; i < filterArray.length; i++) {
        predicate(filterArray[i])
        if (predicate(filterArray[i])) {
            predArray.push(filterArray[i])
        }
    }
    return predArray
}

function mySize(collection) {
    let sizeArray = checkCollection(collection)
    return sizeArray.length
}

function myFirst(array, integer = false) {
    if (integer) {
        return array.slice(0, integer)
    }
    else { return array[0] }

}

function myLast(array, integer = false) {
    if (integer) {
        return array.slice(array.length - integer, array.length)
    }
    else { return array[array.length - 1] }
}

function myKeys(object) {
    let array = Object.keys(object)
    return array
}

function myValues(object) {
    let array = Object.values(object)
    return array
}
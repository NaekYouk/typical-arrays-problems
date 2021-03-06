exports.min = function min(array) {
    return array && array.length > 0 ? array.sort((a, b) => b - a).pop() : 0
}

exports.max = function max(array) {
    return array && array.length >0 ? array.sort((a, b) => a - b).pop() : 0
}

exports.avg = function avg(array) {
    return array && array.length > 0 ? array.reduce((sum, current) => sum + current) / array.length : 0
}

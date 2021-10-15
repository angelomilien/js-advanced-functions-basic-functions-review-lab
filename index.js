// Your code here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}


let mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(visualFlair = "*") {
    return function (attribute = "special") {
        return `You are ${visualFlair}${attribute}${visualFlair}!`
    }
}

const Calculator = {
    add: function () {
        return 1 + 3;
    },
    subtract: function () {
        return 1 - 3
    },
    multiply: function () {
        return 1 * 3
    },
    divide: function () {
        return 10 / 5;
    }
}

let actionApplyer = function (start, raylist) {
    let a = start

    for (let i = 0; i < raylist.length; i++) {
        a = raylist[i](a)
    }

    return a
}
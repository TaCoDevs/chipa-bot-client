/**
 * @param { string } str
 */

const underfull = (str) => str.split("").map(char => {
    return (char == " ") ? "_" : char
}).join("")

module.exports = underfull

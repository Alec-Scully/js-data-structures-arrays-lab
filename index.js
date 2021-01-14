// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"]
// drivers.push("Milo", "Otis", "Garfield")

function destructivelyAppendDriver(name){
    drivers.push(name)
}

function destructivelyPrependDriver(name){
    drivers.unshift(name)
}

function destructivelyRemoveLastDriver(name){
    drivers.pop(name)
}

function destructivelyRemoveFirstDriver(name){
    drivers.shift(name)
}

function appendDriver(name){
    const copyOfDriver = drivers.slice()
    copyOfDriver.push(name)
    return copyOfDriver
}

function prependDriver(name){
    const copyOfDriver = drivers.slice()
    copyOfDriver.unshift(name)
    return copyOfDriver
}

function removeLastDriver(){
    const array = drivers.slice(0, length - 1)
    return array
}

function removeFirstDriver(){
    const array = drivers.slice(1)
    return array
}

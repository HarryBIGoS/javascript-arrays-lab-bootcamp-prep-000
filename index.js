var kittens = ["Milo", "Otis", "Garfield"];

function arrays() {
  return kittens
}



function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens
}



function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens
}



function destructivelyRemoveLastKitten() {
  kittens.pop(name);
  return kittens
}



function destructivelyRemoveFirstKitten() {
  kittens.shift(name);
  return kittens
}



function appendKitten(name) {
  kittens.slice(name);
  return kittens
}
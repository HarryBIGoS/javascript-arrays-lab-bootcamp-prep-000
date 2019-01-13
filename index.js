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
  return [...kittens, name];
}




function prependKitten(name) {
  return [name, ...kittens];
}



function removeLastKitten() {
  kittens.slice(3);
  return kittens
}




function removeFirstKitten() {
kittens.slice(1);
return kittens
}
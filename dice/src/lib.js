function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time)
  )
}

function random(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function newDie() {
  return random(["one", "two", "three", "four", "five", "six"])
}

export { random, sleep, newDie }

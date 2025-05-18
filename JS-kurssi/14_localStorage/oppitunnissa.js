count = {
  value: 0,
};
//turvallinen
console.log(counter.speed || counter.velocity);

fetch("/api", (response) => {
	const values = response?.data || response?.body?.data
})

//Task increment decrement and reset the counter

const increment = (counter) => {
  counter.value++;

  console.log(counter.value);
};

const decrement = (counter) => {
  counter.value--;
  console.log(counter.value);
};

const resetCounter = (counter) => {
  counter.value = 0;
  console.log(counter.value);
};

for (let val = 0; val < 10; val++) {
  increment();
}

for (let val = 0; val < 10; val++) {
  decrement();
}

resetCounter(counter);

# Suggest to use function delegation

Suggest to use function deletgation when you need to reuse the same function more than once to keep the code **_DRY_**.

Example:

```js
// reusable function
function isPastDate(date) {
  const today = new Date();

  return date < today;
}

const date = new Date("August 19, 2000");

const anotherDate = new Date("December 25, 2022");

if (isPastDate(date)) {
  console.log(`${date} is a date in the past.`);
}

if (!isPastDate(anotherDate) && isChristmas(anotherDate)) {
  console.log(`${anotherDate} is Chrismas day in the future.`);
}
```

For the functions which will be used in different files, it is suggested to put them in specific folders.

If the function contains business knowledge, it is suggested to put inside preface/xxx/helpers. If not, it can be put inside common/helpers.

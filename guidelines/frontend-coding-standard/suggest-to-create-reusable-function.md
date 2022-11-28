# Suggest to create reusable function for duplicate contents

Suggest to use create reusable function when you need to use the same group of codes more than once to keep the code **_DRY_**.

Javascript functions allow you to create reusable blocks of code with specific names and behaviors so you don’t have to repeat the same thing multiple times, which is extremely helpful for code readability and maintenance.

This is called as **_Abstraction_**. Its definition is: There are portions of a large component or application that can be taken away, made into their own functional component and then imported into the larger component.

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

# Avoid using if-else statement

Suggest to avoid using if-else statements.

To do so, there are several suggestions to replace if-else statements.

1. Prefer switch-case over if-else statement if you need to if-else more than 2 conditions.

2. Prefer ternary operator(`?:`) over if-else statement

3. Avoid nested if-else statements by using early returns.

---

## Prefer switch-case over if-else statement

Suggest using switch-case over if-else statement if there are several options for selection.

```js
function studentGrade(marks) {
  if (marks >= 50) {
    return "You have passed the exam! 🥳";
  } else {
    return "You have failed the exam!";
  }
} // this can also be modified by ternary operator!
```

It may be fine when there are only 2 options (just like the example above). However, when there are more than 2 options, it will become unclear to read.

For example,

```js
// unclear
function studentFinalResultIf(grade) {
  if (grade === "A+") {
    return "Nailed It! 🥳";
  } else if (grade === "A") {
    return "Passed 💃";
  } else if (grade === "B+") {
    return "Passed 💃";
  } else if (grade === "B") {
    return "Passed 💃";
  } else if (grade === "C") {
    return "Barely Survived 😌";
  } else if (grade === "D") {
    return "Failed 😢";
  } else {
    return "Failed 😢";
  }
}

// better readability
function studentFinalResultSwitch(grade) {
  switch (grade) {
    case "A+":
      return "Nailed It! 🥳";
    case "A":
    case "B+":
    case "B":
      return "Passed 💃";
    case "C":
      return "Barely Survived 😌";
    case "D":
      return "Failed 😢";
    default:
      return "Failed 😢";
  }
}
```

Instead of readability problem, there may be a slight performance delay if using if-else statement in multiple-options scenerios.

- if-else statement always executes the expression to check whether the condition is satisfied or not. Things would get slower when there are more conditions to check and when the choices get complex.

- a switch statement works comparatively faster because the compiler generates a jump table for switch-cases during compile time. So when the code runs, instead of checking which cases are satisfied, it only decides which cases should be executed.

---

## Prefer ternary operator(`?:`) over if-else statement

Suggest using ternary operator(`?:`) over if-else statement to make our code more readable, shorter and cleaner.

```js
//using if - else statement
function isOdd(num) {
  if (num % 2 === 1) return "yes";
  else return "no";
}

//usign ternary operator
const isOdd = (num) => {
  return num % 2 === 1 ? "yes" : "no";
};
```

From the example above, we can notice that the one using ternary operator is shorter and clearer than the one of if-else statement.

Remarks:

- Ternary operator is mostly for declaration only, e.g. `let`, `const`

- Avoid using nested ternary operator as it is difficult to read

  ```js
  let num = 1;
  let word =
    num === 1 ? "one" : num === 2 ? "two" : num === 3 ? "three" : "unknown";
  ```

  ```js
  const enableLogin =
    username ?
      password ?
        return true
      : return false
    : return false;
  ```

---

## Early returns and less nesting

Suggest to return early when an invalid condition evaluated. It can reduce the indentation by using if-return instead of a top-level if-else, so the code is easier to read.

```js
//example with out early returns
//❌ not suggested to use nested if-else
const login = (user) => {
  if (user && user.email && user.password) {
    const profile = getUserProfile(user.email);
    if (profile) {
      if (profile.password === user.password) {
        return send(profile);
      } else {
        return raiseError("Password mismatch");
      }
    } else {
      return raiseError("User not exists");
    }
  } else {
    return raiseError("email and password required");
  }
};

//example using early returns
//✅ suggested to use
const login = (user) => {
  if (!user || !user.email || !user.password) {
    return raiseError("email and password required");
  }
  const profile = getUserProfile(user.email);
  if (!profile) {
    return raiseError("User not exists");
  }
  if (profile.password !== user.password) {
    return raiseError("Password mismatch");
  }
  return send(profile);
};
```

---

## Another methods to prevent if-else statement

### Short circuit (Using && , || operators)

- This method evaluate the expression using '&&' and '||' operators.
- The Second operand in a logical AND (&& ) expression will be evaluated only if the first operand is true.
- The second operand in an OR(||) expression is only evaluated if the first operand is false.

Example:

```js
//using if -else statement
const checkUserConnected = (name) => {
  if (connectedUsers && connectedUsers[name]) {
    return connectedUsers[name];
  } else {
    return raiseError("Not available");
  }
};

//using short circuit method
const checkUserConnected = (name) => {
  return (
    (connectedUsers && connectedUsers[name]) || raiseError("Not available")
  );
};
```

### Function delegation

This method replaces the bigger if-else blocks into individual functions and uses the short circuit method to evaluate the conditions.

Example:

```js
//with out function delegation
const checkOut = (item) => {
  if (!item) {
    return false;
  } else if (!stockAvailable(item)) {
    raiseError("Out of stock");
    clearCart();
    return false;
  } else {
    updateStock(item);
    redirectToPayment();
    return true;
  }
};

//using function delegation
const checkOut = (item) => {
  const outOfStock = () => {
    raiseError("Out of stock");
    clearCart();
    return false;
  };

  const doCheckOut = () => {
    updateStock(item);
    redirectToPayment();
    return true;
  };

  return item && (stockAvailable(item) ? doCheckOut() : outOfStock());
};
```

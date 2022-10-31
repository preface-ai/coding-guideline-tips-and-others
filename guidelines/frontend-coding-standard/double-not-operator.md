# Use `!!` to cast anything into boolean

Suggest using double not `!!` when we are expecting a boolean value in a expression

```js
const { data } = useEntity(id);
// 🤔 avoid this
if (data) {
  // do something
}

// 👍🏻 Suggest this
if (!!data) {
  // do something
}
```

---

## Double NOT `!!`

- `!!` is not an operator.

- It is actually the not `!` operator **_twice_**.

  > The first not operator converts the object to an inverted boolean value.
  > The second not operator inverts the inverted boolean value.
  > This makes it the real boolean value of the object.

### Function

- It converts an **Object to Boolean**.

- By using `!!`, “falsy” objects become false and “truthy” objects become true.

  ```js
  !!0; /*false*/

  !!"abc"; /*true*/

  const valueInSomethingElse = "ABC";
  const isValueExist = !!valueInSomethingElse; /*true*/
  ```

### When to use it?

**Situation 1:**

- When you want to return a boolean value from a function, you should ensure that the result will be actually boolean. You can use `!!` to archieve it.

- Consider a function that performs logic on non-boolean values that we want to ensure returns a boolean value:

  ```js
  function isValidUser(user: { name: string, bio: string }) {
    return !!(user.name && user.bio); // ...
  }
  ```

- Comparing with `return user.name && user.bio`, using `return !!(user.name && user.bio)` will be more explicit.

**Situation 2:**

- We can also use !! as a shortcut for checking if a list has any elements:

  ```js
  const fruit = ["apple", "orange", "grape"];

  function FruitDisplay({ fruit }) {
    return !!fruit.length;
  }
  ```

---

## “Truthy” and “Falsy” in JavaScript

In JavaScript, each and every object is associated with a boolean value. It means every JavaScript object is either true or false in a boolean context.

each object is thus “truthy” or “falsy”. In other words, when converted to a boolean value:

- "Falsy" values:

  - `0`
  - `-0`
  - `null`
  - `undefined`
  - `NaN`
  - `""` (empty string)

- Except the above values, the others are all "truthy".

```js
"abc"; /*true*/
10; /*true*/
15; /*true*/
[]; /*true*/
[1]; /*true*/

!"abc"; /*false*/
!10; /*false*/
!15; /*false*/
![]; /*false*/
![1]; /*false*/

!0; /*true*/
!null; /*true*/
!undefined; /*true*/
!""; /*true*/
```

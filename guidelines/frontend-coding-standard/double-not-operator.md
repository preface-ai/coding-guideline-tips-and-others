# Use `!!` to cast anything into boolean

## “Truthy” and “Falsy” in JavaScript

In JavaScript, each and every object is associated with a boolean value. It means every JavaScript object is either true or false in a boolean context.

each object is thus “truthy” or “falsy”. In other words, when converted to a boolean value:

- "Falsy" values:

  - `0`
  - `-0`
  - `null`
  - `undefined`
  - `""` (empty string)

- Except the above values, the others are all "truthy".

```js
!0; /* true*/
!null; /*true*/
!undefined; /*true*/
!""; /*true*/

!"abc"; /*false*/
!10; /*false*/
!15; /*false*/
![]; /*false*/
![1]; /*false*/
```

---

## Double Exclamation `!!`

- `!!` is not an operator.

- It is actually the not `!` operator **_twice_**.

- There is practically no double exclamation operator but rather a **_double not operator_**.

  > The first not operator converts the object to an inverted boolean value.
  > The second not operator inverts the inverted boolean value.
  > This makes it the real boolean value of the object.

### Function

- It converts an **Object to Boolean**.

- By using `!!`, “falsy” objects become false and “truthy” objects become true.

```js
!!0; /*false*/

!!"abc"; /*true*/

let name = "gordon";
!name; /*false*/

let amount = 0;
!amount; /*true*/

const valueInSomethingElse = "ABC";
const isValueExist = !!valueInSomethingElse; /*true*/
```

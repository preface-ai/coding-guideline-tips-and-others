# Avoid Negative Variable Names

Avoid naming variable in its negative meaning as this makes code harder to read. It is better to name the variable without the negation and flip the value.

For example, we can use `enableSubmit` to replace `disableSubmit`.

```js
// 🤔 avoid this
const disabledSomething = true;
const denyFeeatureA = false;
const avoidDoingX = true;

// 👍🏻 Suggest this
const enabledSomething = false;
const approveFeatureA = true;
const shouldDoX = false;
```

---

Many people use nagative variable name as they think that not doing something is way more important than actually doing it: “If we’re not not doing it, then we’re gonna prepare some stuff.”

```js
const notEnoughBudget = false;

if (notEnoughBudget) {
  cancelEvent();
}
```

However, when the code is extended, we may want to do other things with that boolean, like negate it.

```js
if (!notEnoughBudget) {
  prepareEvent();
}
```

In the example above, we can find that there is a double negative in the meaning of the variable (`!notEnoughBudget` means not not enough budget).

By doing this you force people reading this code to spend extra brain cycles to flipping the double negative into a positive. This decreases the readability of codes.

Therefore, we should replace `notEnoughBudget` by `enoughBudget`.

```js
const enoughBudget = true;

if (!enoughBudget) {
  cancelEvent();
}

if (enoughBudget) {
  prepareEvent();
}
```

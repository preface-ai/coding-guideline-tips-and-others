# Avoid any context in double negations

Avoid using if not statement for conditional logic.

```js
const disabledSomething = true;
const denyFeeatureA = false;
const avoidDoingX = true;

// 🤔 avoid this
if ((!disabledSomething && !denyFeeatureA) || !avoidDoingX) {
}

const enabledSomething = false;
const approveFeeatureA = true;
const shouldDoX = false;

// 👍🏻 Suggest this
if ((enabledSomething && approveFeeatureA) || shouldDoX) {
}
```

If using if not statement in conditional logic, it may cause confusion to the users of the codes, as they need to convert it to opposite meanings when trying to undrestand the logic of the codes.

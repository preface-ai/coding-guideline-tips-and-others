# Frontend Coding Standard Draft

- All copywriting should be i18n-ed

- Import / Export
  - Prefer named import over default import
  - Similar type of import should be grouped adjacently.
  - css or other asset import should be placed at the bottom of all the import


- OK to use:
```js
// 👌🏻 use `!!` to cast anything into boolean
const valueInSomethingElse = "ABC";
const isValueExist = !!valueInSomethingElse;
```

- Avoid any context in double negations
```js
const disabledSomething = true;
const denyFeeatureA = false;
const avoidDoingX = true

if (!disabledSomething && !denyFeeatureA || !avoidDoingX) {

}

const enabledSomething = false;
const approveFeeatureA = true;
const shouldDoX = false;

if (enabledSomething && approveFeeatureA || shouldDoX) {

}
```


- Prefer switch-case over if-else statement
  - try to use switch-case when you else more than one

- Prefer ternary operator(`?:`) over if-else statement
  - mostly for declaration only
  - But, avoid using nested ternary operator

- Prefer named function instead of arrow function for react component and anything not in local scope

- Avoid using forwardRef

- Avoid misuse useEffect
 - ref: https://beta.reactjs.org/learn/you-might-not-need-an-effect


- Module css
 - use !important as last resort only


## Standard


- [date-fns](https://date-fns.org/) for date time operation

- lingui for i18n

- @tanstack/react-query for API state management(cache)

- `fetch` for API client


Storybook? questionable whether we need this?
Test? jest?

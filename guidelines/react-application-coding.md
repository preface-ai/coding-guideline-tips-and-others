# Draft

All copywriting should be i18n-ed

Import / Export

Prefer named import over default import

Similar type of import should be grouped adjacently.


OK to use:
```js
// 👌🏻 use `!!` to cast anything into boolean
const valueInSomethingElse = "ABC";
const isValueExist = !!valueInSomethingElse;
```

Avoid any context in double negations



Prefer switch-case over if-else statement

Prefer ternary operator over if-else statement

But, avoid using nested ternary operator

Prefer old named function instead of arrow function for react component and anything not in local scope

Avoid using forwardRef

Avoid misuse useEffect


Module css

use !important as last resort only


Standard


date-fns for date time operation

lingui for i18n

@tanstack/react-query for API state management(cache)

fetch for API client

Storybook? questionable whether we need this?

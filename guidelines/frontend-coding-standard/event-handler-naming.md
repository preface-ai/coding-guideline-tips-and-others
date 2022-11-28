# use `on` and `handle` as prefix to name event handler

When naming event handler functions and props, suggest to name functions by `handle` and to namr props by `on`.

Example:

```js
onAlertClick = { handleAlertClick };

onFormSubmit = { handleFormSubmit };

// To matching onAlertClick, we declare that it will house similarly-used event handler function.
//To do so, replace `on` with `handle`: handleAlertClick
```

For Props:

- if you are creating component and exposing event hooks, those props would be `on`.
- e.g. `onClick`, `onHover`, `onUsernameChanged`, `onError`
- From inside your components, these props are just functions you call on some event. You don't care what they do, your job is to just call them at the right time

For Functions:

- if you are consuming another component, you want to add handling in response to these events, so you use `handle`
- e.g. `handleChange`, `handleClick`, `handleUserLogout`
- because your job is now to handle some event and make something happen in response to it. If you don't handle, no changes to the app state will be made

To conclude, `on` is describing what actual event this will be tied to. `handle` is describing what will be called when that event fires.

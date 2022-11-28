# use `on` and `handle` as prefix to name event handler

When naming event handler functions and props, suggest to name functions by `handle` and to name props by `on` to avoid accidentally misuse of them.

Example:

```js
onAlertClick = { handleAlertClick };

onFormSubmit = { handleFormSubmit };
```

**For Props:**

- if you are creating component and exposing event hooks (call on event), those props would be `on`.
- e.g. `onClick`, `onHover`, `onUsernameChanged`, `onError`

**For Functions:**

- if you are consuming another component, you want to add handling in response to these events, so you use `handle`
- e.g. `handleChange`, `handleClick`, `handleUserLogout`

To conclude, `on` is describing what actual event this will be tied to. `handle` is describing what will be called when that event fires.

Example:

```js
const handleClick = (event) => {
  doSomethingElseHere();
  onClick(event);
};

return <button onClick={handleClick}>Bar</button>;
```

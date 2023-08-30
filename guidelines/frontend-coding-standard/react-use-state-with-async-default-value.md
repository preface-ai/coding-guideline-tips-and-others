# React useState with Async Default Value - Coding Guideline

## Introduction
When you're using React's `useState` hook, you might find yourself in a situation where you want to initialize state with a value fetched from an asynchronous data source, like an API call.
However, initial render of the component won't wait for the API call to complete, causing your initial state to be undefined.
To handle this situation, you could use a different pattern which allows the state to adopt the API value once it's ready.

## Guidelines
```js
// 1. Fetch data from API
const { data: valueFromApi } = useGetSomethingFromAPI();

// 2. Initialize state without a default value
const [valueFromState, setValue] = useState();

// 3. Use the state value if it's available, or fall back to the API value 
const value = valueFromState || valueFromApi?.option;
```

## Explanation
1. We call the API to fetch the data asynchronously. At this point, the API call may not have completed yet.

2. We declare a state variable valueFromState without providing an initial value. Therefore, valueFromState is undefined at first.

3. value is what we will use throughout the component. It first tries to use valueFromState (which is undefined initially). If valueFromState is not available (still undefined), it falls back to valueFromApi?.option.

When the component re-renders due to the API call completion, valueFromApi?.option will have a value and value will fall back to this value. However, once valueFromState has a value (i.e., after we call setValue), value will always be valueFromState because valueFromState || valueFromApi?.option always prefers valueFromState when it's not undefined or null.

## Understanding useState Initial Value
The `useState` hook in React allows you to add state to functional components. It takes an initial value as its argument and returns an array containing the current state value and a function to update it.

```js
const [state, setState] = useState(initialValue);
```

However, the initialValue is only used during the first render of the component. In subsequent renders, the initial value is not used, and state will always be the most recent state value.

Remember that when you're initializing state with an asynchronous operation, like fetching data from an API, the initial state value will be set before the data is returned from the API.
Therefore, in these cases, the initial state will be undefined unless you handle it as shown in the guidelines above.

## Reference

This bug fix in Customer portal:
https://github.com/preface-ai/customer-portal/pull/552


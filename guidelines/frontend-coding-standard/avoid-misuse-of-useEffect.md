# Avoid misuse of useEffect

Consider any other alternative methods before using useEffect hook.

---

The useEffect Hook allows you to perform side effects in your components. However, since using useEffect can make things even more complex, for example, infinite re-renders problem, it is better to read this doc to check whether your situation needs useEffect at all before using it.

- https://beta.reactjs.org/learn/you-might-not-need-an-effect

---

However, if you find that you really need to use useEffect after comparing with the situations in the doc, you can put those codes into a custom hook to:

- make the view's code clear
- easily refactor if there are any other libraries to replace / if there are any updates in useEffect

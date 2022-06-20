# Debugging in Browser

In general, you can add `console.log(something)` to your code to debug any issue in your frontend application. You can open the browser console to observe the print output.

However, sometime this is not interactive enough and at the end you have to do it again and again just to understand the actual casue of your issue, which can be very time consuming.

So, instead of just inserting `console.log(xxx)` in the code, another approach is to leverage `debugger`:
```js
  debugger;
```

It will help setting up a breakpoint for you such that you can interactively debug your code via browser development tool. Example:

In short, when that line of code being invoked with your development tool being opened, the execution will be paused
you can then basically inspect everything you want and invoke the program step by step in Source tab of development tool
Note: be sure not to commit your debugger code, this is rather for local development only :laughing:
Of course, sometime using console.log may be easier and make more sense(you don't want to pause the application within a For loop which run 100 times...).
Please use them of your own preference:nerd_face:

Read this for more detail:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger

Try it out yourself and enjoy :hugging_face: (edited) 

# Use !important as last resort only

After using `!important` rule, it will override **_ALL_** previous styling rules for that specific property on that element!

The only way to override an `!important` rule is to include another `!important` rule on a declaration with the same (or higher) specificity in the source code. This will make the CSS code confusing and the debugging will be hard, especially if you have a large style sheet!

Therefore, do not use `!important` unless you absolutely have to.

---

When you want to override some stylings, it is suggested to add the component upper-most container class name to increase the rule specificity.

e.g.

From:

```js
.description {
  padding: 0px 0px 0px 18px !important;
}
```

Converted to:

```js
.courseCard .description {
  padding: 0px 0px 0px 18px;
}
```

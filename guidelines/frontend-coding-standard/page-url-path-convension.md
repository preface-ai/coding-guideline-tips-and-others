# Page URL path convenstion

These are our agreement:

1. the path should be always in lower case
2. the path should be always in snake case
3. we should try our best to come up with a short and human-readable path name of a page.

e.g.
```
# perfer this
app.preface.ai/purchase/member-plus

# don't do this
app.preface.ai/Purchase/MemberPlus
# or not ever this
app.preface.ai/purchase/member_plus
```

## Note

Since Next.js use file based routing, this would become our excpetion case for us to have folder and file name with snake case.

```
/pages/purchase/member-plus.js
```

within this file:
```js
// use the same naming as component name(but of couse changing it camel case)
export function MemberPlus() {
 // ...
}
```

# How to handle image and link in Next.js 13

In Next.js 13, there are a new `next/image` and `next/link` which allow faster with native browser lazy loading, and simplified API with automatic <a> respectively.

For the existing codes, you have to use `next/legacy/image` and `next/legacy/link` to prevent those components bein destroyed.

## next/image

### In Next 13, alt is a required prop

```js
<Image alt="leeerob" src={avatar} placeholder="blur" />
```

### `layout` prop and `objectFit` prop are removed.

`fill={true}` is used to replace `layout={"fill"}`.
`style` or `className` prop can be used to replace `objectFit` prop

```js
<Image alt="leeerob" src={avatar} placeholder="blur" fill style={{objectFit: "cover"}}>
```

## next/link

```js
// Next 12:  `<a>` has to be nested otherwise it's excluded
<Link href="/home" passhref>
    <a target="_blank">
        CLICK HERE
    </a>
</Link>

// Next 13: `<Link>` always renders `<a>`
<Link href="/home" target="_blank">
    CLICK HERE
</Link>
```

As seen in the above example, next/link no longer requires manually adding <a> as a child.

# Encourage to wrap imported libraries & packages into custom components

It is better to wrap the imported external libraries and packages into the custom elements.

It is always implemented in elements such as button and textfield. For example, this example wraps the chip from Material UI into a custom chip component.

```js
import MaterialChip from "@mui/material/Chip";

export const CHIP_TYPE = {
  filled: "filled",
  outlined: "outlined",
};

export function Chip({
  label,
  icon,
  deleteIcon,
  variant = CHIP_TYPE.outlined,
  onIconClick,
}) {
  return (
    <MaterialChip
      deleteIcon={deleteIcon}
      icon={icon}
      label={label}
      sx={{ borderRadius: 2, height: "32px" }}
      variant={variant}
      onDelete={onIconClick}
    />
  );
}
```

Implementing it has the following advantages:

- It offers the flexibility of using the external elements in our own ways.

- It helps us to easily change the codes if exteranl library is updated or depreciated, as there is only one position which imports the library.

- The public interface of 3rd party library usually is very large(since they have to support wilder and more general use cases). Wrapping up the library allow us to expose the only necessary interfaces in our codebase. This effectively reduce misuse and enforce a minimal governance on it. Just note we still have freedom to expose more public interface when necessary.

- We can introduce our own version of default behaviour of the library and hide the detail implementation behind the wrapper, just like the above example: `icon = {icon}`

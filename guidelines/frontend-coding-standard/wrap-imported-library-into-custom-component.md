# Encourage to wrap imported libraries into custom components

It is better to wrap the imported external libraries into the custom elements.

It is always implemented in elements such as button and textfield. For example,

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

The above is the example that wrapping the chip from Material UI into a custom chip component.

---

Implementing it has the following advantages:

- It offers the flexibility of using the external elements in our own ways.
- It helps us to easily change the codes if exteranl library is updated or depreciated, as there is only one position which imports the library.

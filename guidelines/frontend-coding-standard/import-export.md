# import / export

## Prefer named import over default import

Comparing with default import/export, named import/export is more clear and understandable.

**_default import:_**

```js
import NextLink from "next/link";
```

- The above example is not importing `NextLink` inside of `next/link` module.

- It actually imports default symbol of `next/link` module and then renames it as `NextLink`.

**_named import:_**

```js
import { Link } from "rebass/styled-components";
```

- The above example is import `Link` inside of `rebass/styled-components`.

- If `Link` doesn't exist, the import will fail.

One reason is that named import specifies the name of what is importing, which allows us to get an early error if we try to import something that does not exist. It also prevents causing inconsistency if different programmers use different names in default import.

Another benefits of using named import/export is, multiple items/values can be imported/exported.

```js
import { useMutation, useQueryClient } from "@tanstack/react-query";
```

## Similar types of imports should be grouped adjacently

By grouping similar types of imports together, we can easily search for imports we want from these lines.

Example:

```js
import React from "react";
import { useRouter } from "next/router";
import Error from "next/error";
import { Trans, t } from "@lingui/macro";

import { Display } from "components/elements/Display";
import { Button } from "components/elements/Button";
import { AppLayout } from "components/business/AppLayout";
import { ThankYouBanner } from "components/business/ThankYouBanner";
import { CourseInputSection } from "components/sections/CourseInputSection";
import { TimeslotInputSection } from "components/sections/TimeslotInputSection";
```

## CSS / Asset import should be placed at the bottom of all the imports

It helps us to easily sort out the CSS and Asset import lines.

Example:

```js
import React from "react";
import { t } from "@lingui/macro";
import PropTypes from "prop-types";

import styles from "./ThankYouBanner.module.css";
import annualPassBgImg from "../../public/images/annualPassBg.jpg";
```

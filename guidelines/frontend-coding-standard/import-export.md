# import / export

## Prefer named import over default import

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

Comparing with default import/export, named import/export is more clear and understandable.

## Similar types of imports should be grouped adjacently

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

Example:

```js
import React from "react";
import { t } from "@lingui/macro";
import PropTypes from "prop-types";

import styles from "./ThankYouBanner.module.css";
import annualPassBgImg from "../../public/images/annualPassBg.jpg";

ThankYouBanner.propTypes = {
  orderDate: PropTypes.string,
  orderNo: PropTypes.number,
};
```

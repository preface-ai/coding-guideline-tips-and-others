# SEO Coding Guidelines For Public Website

## Overview

Search Engine Optimization (SEO) is essential for increasing the visibility and discoverability of web content. Proper use of meta tags such as title, description, and canonical can significantly impact how search engines crawl, interpret, and rank our pages. This guideline aims to adhere our coding standards, the importance of these props, and how to use them effectively in our projects.

### Title Tag

The title tag is super important for SEO. It's the main headline for your webpage that shows up in search results.

How to apply the correct Title Tag:
Be concise: Aim for 50-60 characters to ensure the full title is visible in SERPs.
Be descriptive: Clearly describe the page content and include relevant keywords.
Be unique: Each page should have a unique title to avoid duplicate content issues.

Example:

```js
<Layout title="Redesign the notion of classroom.">
```

### Description Meta Tag

The description meta tag is a short preview of your page content. It doesn't directly change your search ranking, but a good description can make someone more likely to visit your site.

How to apply the correct Description Tag:
Be brief: Limit descriptions to 155-160 characters to prevent them from being truncated in SERPs.
Be compelling: Write a description that accurately summarizes the page content and entices readers to click.
Include keywords: Integrate primary keywords naturally to reflect the page's content.

Example:

```js
<Layout description="Preface is a leading technology training company that helps you stay ahead of the curve in today's fast-paced, tech-driven world.">
```

### Canonical Tag

The canonical tag tells search engines which version of a page is the main one when you have similar pages. It helps avoid confusion and makes sure the right page shows up in search results.

How to apply the correct Canonical Tag:
Be consistent: Use the same URL structure for the canonical tag as the one you want search engines to index.
Be absolute: Use absolute URLs (including the https:// protocol and domain) for clarity.
Use it wisely: Only set a canonical tag when necessary, such as for pages with similar or identical content.

Example:

```js
<Layout canonical="https://www.preface.ai/">
```

## Standard Implementation

As part of our coding standards for SEO optimization, the Layout component allows us to apply the essential meta tags. These tags are critical for enhancing the page's discoverability and relevance in search engine results, conforming to our best practices in web development.

```js
import { Layout } from "../../components";

export function EasterSeriesPage() {
  return (
    <Layout
      title="Celebrate Easter with Tech Learning!"
      description="Ignite your child's spirit of exploration and innovation this Easter! Be the brightest and most tech-savvy among peers!"
      canonical="https://www.preface.ai/easter-series/"
    >
      {...children}
    </Layout>
  );
}
```

## Dynamic Implementation

When using these tags in a React component like Layout, pass the relevant information as props from the page component (e.g., BlogDetails). Ensure you derive these props from the correct promise sources, such as the content management system (CMS) fields, or other relative data sources.

```js
import { Layout } from "../../components";

export function BlogDetails({ item }) {
  return (
    <Layout
      title={item.fields.postTitle}
      description={item.fields.metaDescription}
      canonical={`https://www.preface.ai/blog/${slug}/`}
    >
      {...children}
    </Layout>
  );
}
```

## Conclusion

Proper use of the title, description, and canonical tags is essential for effective SEO. Ensure you follow this guideline for SEO in order to help improve the search engine visibility of our content, ensuring that our pages are accurately represented and easily discoverable in search results.

# Eyebrow

Before we dive into the more advance stuff, let's start by creating a super simple component. The component name is **Eyebrow**, and this is a component you would normally use to label or tag content, or to print a simple line of plain text.

### Exercise:

1. Inside **components**, create a new file called `eyebrow.js`
2. In `eyebrow.js`, add the following code:

{% tabs %}
{% tab title="/components/eyebrow.js" %}
```javascript
import React from 'react';

const Eyebrow = ({ children }) => {
  return (
    <div style={{ color: '#000' }}>
      {children}
    </div>
  );
};

export default Eyebrow;
```
{% endtab %}
{% endtabs %}

* First we import **React** to ensure we have all React-related resources available
* Next we create a function in which we declared a variable named **Eyebrow**.  Components are independent and reusable. They can either be Javascript functions or classes. Either way, they both return a piece of code that represents part of a web page.
* The `({ children })` is a React built-in prop \(short for “properties”\), that can be used as a placeholder for any data you want to pass as the component's content.
* The `return` method returns a _description_ of what you want to see on the screen.  React/Gatsby takes the description and displays the result. In particular, `return` returns a **Gatsby element**, which is a lightweight description of what to render.
* Finally, `export default Eyebrow` makes this component available so it can be reused anywhere.

### Let's use the new Eyebrow component \(only as an example\)

1. In your editor, open `components/header.js`
2. At the top of the file, import the Eyebrow component: `import Eyebrow from "./eyebrow";`
3. After the closing of the Link tag \(`</Link>`\), add the Eyebrow component as follows:

```javascript
<Eyebrow children='Learning Gatsby' />
```

* After saving your changes if you visit your site's homepage you should see "_Learning Gatsby_" under the the Site's title.
* In this example we have given the `children` prop a value of "Learning Gatsby".  This is great because this means we can reuse the Eyebrow component anywhere and we can change its value to anything we want on each instance.


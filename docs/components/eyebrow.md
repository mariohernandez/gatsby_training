# Eyebrow

Before we dive into the more advance stuff, let's start by creating a super simple component. The component name is **Eyebrow**, and this is a component you would normally use to label or tag content, or to print a simple line of plain text.

### Exercise:

1. Inside **Components**, create a new folder called **eyebrow**
2. Inside **eyebrow**, create a new file called `index.js`
3. In **index.js**, add the following code:

{% tabs %}
{% tab title="/components/eyebrow/index.js" %}
```javascript
import React from 'react';

const Eyebrow = ({ children }) => {
  return (
    <div className="eyebrow">
      {children}
    </div>
  );
};

export default Eyebrow;
```
{% endtab %}
{% endtabs %}

* First we import **React** to ensure we have all React-related resources available
* Next we create a function in which we declared a variable name of **Eyebrow**.  Components are independent and reusable. They can either be Javascript functions or classes. Either way, they both return a piece of code that represents part of a web page.
* The `({ children })` is a React built-in prop \(short for “properties”\), that can be used as a placeholder for any data you want to pass as the component's content.
* The `render` method returns a _description_ of what you want to see on the screen.  React/Gatsby takes the description and displays the result. In particular, `render` returns a **Gatsby element**, which is a lightweight description of what to render.
* Finally, `export default Eyebrow` makes this component available so it can be reused anywhere.


# Eyebrow

Before we dive into the more advance stuff, let's start by creating a super simple component. The component name is **Eyebrow**, and this is a component you would normally use to label or tag content, or to print a simple line of plain text.

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
* Next we create a function in which we declared a variable name of **Eyebrow**.  All components are functions.
* The `({ children })` is a React built-in prop \(short for “properties”\), that can be used as a placeholder for any value you want to pass as the component's content.
* The `render` method returns a _description_ of what you want to see on the screen.  React/Gatsby takes the description and displays the result. In particular, `render` returns a **Gatsby element**, which is a lightweight description of what to render.
* Finally, `export default Eyebrow` makes this component available so it can be reused anywhere.


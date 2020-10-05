# Button

The next component we will build is a Button.  This one uses all the same principles as the Eyebrow component but it also expands into a more advanced component by using logic on the data being passed to it to determine which HTML tag to use for a button. It also makes use of `prop-types`.  Let's take a closer look:

### Exercise:

1. Inside **Components**, create a new folder called **Button**
2. Inside **Button**, create a new file called `index.js`
3. In **index.js**, add the following code:

{% tabs %}
{% tab title="button.js" %}
```javascript
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './style.module.scss';

import { childrenType } from '../../global/js/customPropTypes';

const Button = ({ classes, url, children, buttonType, ...rest }) => {
  const buttonClass = classnames(styles.Button, {
    [styles.primary]: buttonType === 'primary',
  })
  return (
    <>
    {url ? (
      <a className={buttonClass} {...rest} href={url}>{children}</a>
    ):(
      <button
      className={buttonClass}
      {...rest}
    >
      {children}
    </button>
    )}
    </>
  );
};

export default Button;

Button.propTypes = {
  classes: PropTypes.string,
  buttonClass: PropTypes.oneOf(['primary']),
  children: childrenType
};

```
{% endtab %}
{% endtabs %}

#### Imports

* As usual we import React
* Next we import `prop-types` which are a built-in feature of react to allow for data types to be defined.  This is recommended since JavaScript is a loosely-typed language, in a Gatsby site we need to be more specific about our data types to avoid errors
* We import `classnames`, which is a simple JavaScript utility for conditionally joining classNames together.
* Styling on this project is done using [CSS Modules](working-with-css.md)
* We import the respective style file for this component \(`style.module.scss`\)
* The last import is the **customPropTypes** which is a custom-written list of various data types.  Having this on its own file makes our code cleaner as otherwise we would need to write logic to specify each data type in our component.

#### The Component

As we indicated in the previous exercise, every component in Gatsby is a JavaScript function. In the case of this component, we set its name as **Button** and we are passing several props placeholders.  Notice the `...rest` part?  this is to allow to add additional props to the component when we use, if needed.

Within the `return` statement, we are first running some logic to determine what HTML element we need to render based on the data we are receiving.  For example, if a URL is passed, we will render a `<a>` element, otherwise we will render a `<button>` element.

Finally, once the component is built, we define the different propTypes expected by the component to ensure data validation.  For example, for the `classes` props, we wouldn't want a boolean or number type, we want a string which basically will be a list of string values to be used as CSS classes.


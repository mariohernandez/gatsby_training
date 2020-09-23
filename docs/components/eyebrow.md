# Eyebrow

Before we dive into the more advance stuff, let's start by creating a super simple component. The component name is **Eyebrow**, and this is a component you would normally use to label or tag content, or to print a simple line of plain text.

{% tabs %}
{% tab title="/components/eyebrow/index.js" %}
```javascript
import React from 'react';
import styles from './styles.module.scss';

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


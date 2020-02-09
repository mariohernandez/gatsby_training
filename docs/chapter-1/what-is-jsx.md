# What is JSX

JSX is a syntax extension to Javascript and is use in React apps to describe what the UI should look like.  JSX may look similar to a template language but it provides the full power of Javascript.

Here's an example of a simple JSX variable declaration:

```jsx
const element = <h1>Hello, world!</h1>;
```

### Why JSX?

React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.

### Component example with JSX

```jsx
import React from "react"
function AboutPage(props) {
  return (
    <div className="about-container">
      <p>About me.</p>
    </div>
  )
}
export default AboutPage
```


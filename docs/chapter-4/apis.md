# useEffect and useQuery

Often with the term ‘static site generator’ people come in with the notion that it means there is no Javascript on the finished page, and therefore no data can be updated in the client. With Gatsby, however, the finished page is just React components! That means you can do absolutely everything you would normally do with a React application in a Gatsby site. In this case, that means you can fetch and update data via network requests, even to the data sources you used to statically build the site.

These days in React, data fetching and posts are handled almost entirely by React Hooks. While it is [certainly possible](https://www.robinwieruch.de/react-hooks-fetch-data) to write your own pattern of hooks to accomplish this, it is something that we believe is best served by a library that covers lots of edge cases and browser compatibility issues. There are several great libraries out there, most notably: [react-query](https://github.com/tannerlinsley/react-query) and [swr](https://github.com/zeit/swr). We will use react-query for this example, but no matter which one you use, that pattern is very similar. Note that these libraries are using the React hooks API, mainly `useEffect` under the hood. If you need more information on that, [you can find the excellent docs here](https://reactjs.org/docs/hooks-intro.html). This is the most basic data fetching example:

```jsx
import { useQuery } from 'react-query'

// Define a fetching function.
const fetchData = () => fetch(‘/api/route/’).then(r => r.json())

function MyComponent() {
  // useQuery returns several values based on your fetch.
  const { status, data, error } = useQuery(‘keyString’, fetchData)

  if (status === 'loading') {
    return <span>Loading...</span>
  }

  if (status === 'error') {
    return <span>Error: {error.message}</span>
  }

  // also status === 'success', but "else" logic works, too
  return (
    <ul>
      {data.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}
```

That’s really it. That’s the same example and pattern you would use in a non-Gatsby React app, and it works for Gatsby just as well. These libraries also have great docs and show things like conditional fetching, or dependent calls.


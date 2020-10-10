# Movie Card

So by now you should have a pretty good idea on how to build simple components and make them available so they can be reused throughout a website.  Now let's build a more complex component in which we will reuse previously built components.  The Card component is widely used to display individual movies as well as the large Featured Movie at the top of the homepage and in individual pages.

In this component we will reused the Eyebrow, Button and other small components to build a larger component.  This is the Atomic Design approach where you first build Atoms and then build Molecules, Organisms, etc.  The Card component is a Molecule because it combines multiple Atoms.

### Building the Movie Card Component

The Movie card component has a lot of moving pieces and to understand it better we are going to build it incrementally.

#### Importing all resources:

1. Inside the **Components** folder create a new folder called **Card**
2. Inside the Card folder create a new `index.js` file
3. Inside **index.js** add the following code:

```javascript
// Import native React & Gatsby resources
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';

// Import custom components
import Rating from '../Rating';
import Stars from '../Stars';
import Heading from '../Heading';

// Import custom styles
import styles from './styles.module.scss';

// Import custom PropTypes
import {fluidImage} from '../../global/js/customPropTypes';
```

* We're starting by importing all the dependencies we will need for this component.  First we import all React and Gatsby-native resources like`{ Link }`, `PropTypes`, `Image`, and of course, `React` itself.
* Then we import previously built components: **Rating, Stars,** and **Heading**
* To style the Card we import `styles.modules.scss` which you will create shortly
* And finally, we import `customPropTypes` which is a list of PropTypes we have written to make them reusable in any component

#### Building the Card Component:

1. Just below the last import, let's create a new JavaScript function which will use the name of our Component
2. Let's add a few props we expect the Card to use
3. And make it reusable by adding `export default Card;`

```javascript
const Card = ({ title, path, image, subtitle, rating, stars}) => {
  return ();
};

export default Card;
```

* The Card function expects several props including title, path, image, subtitle, rating, and stars.  These props are basically the fields that make up the card.
* The `return` statement will provide us with the markup and structure we expect when rendering a card on the browser.  Let's handle that markup now.

#### Writing the expected markup:

1. Modify the Card function as shown below

```javascript
const Card = ({ title, path, image, subtitle, rating, stars}) => {
  return (
    <article className={styles.Card}>
      <div className={styles.cardMedia}>
        <Image fluid={image} />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardRating}>
          <Rating rating={rating} classes={styles.rating} />
          <Stars stars={stars} />
        </div>
        <div className={styles.cardText}>
          <Heading classes={styles.movieTitle} headingLevel={3} url={path}>
            {title}
          </Heading>
          <div>
            {subtitle}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
```

* First we are using a [`<Link ...>`](../createpages/gatsby-link.md) component to wrap the card and make the entire card clickable.  The link's `to={ }` attribute uses `{path}` as its value which is the path to the full/detail page, or node.  If you are wondering where does `<Link>` come from, **Link** is a built-in Gatsby component.  We imported at the beginning to be able to use it in our component.
* We are doing something similar to Link with `<Image />`.  This too is a built-in Gatsby component. Gatsby is great at [optimizing images](https://www.sitepoint.com/automatically-optimize-responsive-images-in-gatsby/) and one way to do that is by using `fluid` or `fixed` as shown above.
* The rest of the code above is pretty self-explanatory.  We are wrapping the remaining fields in specific markup with unique CSS classes.

#### Define the Card's PropTypes:

1. After `export default Card;`, add the following block of code to define the PropTypes for the card:

```javascript
// Defining proptypes (data types)
Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  path: PropTypes.string,
  image: fluidImage
};
```

* As we indicated before, JavaScript is a loosely-typed language but Gatsby/React requires for Props to have a defined type.  Most props above are using built-in propTypes found in `prop-types`, which was imported as `PropTypes`.  However, for the Image  field, we wrote a custom propType which we are importing as `{ fluidImage }`

#### That's it!  The Card Component is done.

_See the full component code below_

```javascript
// Import native React & Gatsby resources
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';

// Import custom components
import Rating from '../Rating';
import Stars from '../Stars';
import Heading from '../Heading';

// Import custom styles
import styles from './styles.module.scss';

// Import custom PropTypes
import {fluidImage} from '../../global/js/customPropTypes';

const Card = ({ title, path, image, subtitle, rating, stars}) => {
  return (
    <article className={styles.Card}>
      <div className={styles.cardMedia}>
        <Image fluid={image} />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardRating}>
          <Rating rating={rating} classes={styles.rating} />
          <Stars stars={stars} />
        </div>
        <div className={styles.cardText}>
          <Heading classes={styles.movieTitle} headingLevel={3} url={path}>
            {title}
          </Heading>
          <div>
            {subtitle}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;

// Defining proptypes (data types)
Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  path: PropTypes.string,
  image: fluidImage
};
```

Next, we are going to make use of the Card component to build the movie listings.


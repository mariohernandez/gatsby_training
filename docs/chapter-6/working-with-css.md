# Working with CSS

As with other platforms, there are several ways to work with CSS in a Gatsby project.  One common way is using **CSS Modules**.  A **CSS Module** is a CSS file in which all class names and animation names are scoped locally by default.

One advantage of using CSS Modules in Gatsby is that they more closely resemble the way CSS or SCSS work traditionally.  For example, on a non-Gatsby project, I would create a .SCSS file for each component I build.  CSS Modules works the same way and this allows for better scope managing of styles. 

### Working with CSS Modules

#### **Naming convention**

Let's say I want to style a Hero component which is located in `components/hero/index.js`.  

* First I would create a new CSS Module file within the same folder of the component and call the file `components/hero/styles.module.scss`\).  **styles.modules.scss** is how Gatsby knows we are using CSS Modules.
* Then, inside the component's **index.js** I would import **styles.module.scss** the same way I'd import a JavaScript object, `import styles from './style.module.scss';` 

#### **Writing Styles in CSS Modules**

Writing CSS in CSS Modules is not much different than traditional CSS.  The main difference is how selectors classes are written.  In CSS Modules we use camelCase for selector classes.  For example:  `.mainNavigation`, `.siteLogo`, `.featuredNews`, etc.  The CSS rules are written the same way you would write them in traditional css or SCSS.  See example below:

{% tabs %}
{% tab title="components/hero/styles.module.scss" %}
```css
.hero {
  overflow: hidden;
  width: 100%;
}

.heroContent {
  position: absolute;
  height: 100%;
}

.heroCta {
  text-decoration: none;
}
```
{% endtab %}
{% endtabs %}

#### **Using the available styles**

To apply the styles above to the Hero, we need to define each selector we intend to style within the component's **JSX** file.  See the example:

{% tabs %}
{% tab title="components/hero/index.js" %}
```javascript
<section className={styles.hero}>
  <div className={styles.heroMedia}>
    <Image fluid={image}></Image>
  </div>
  <div className={styles.heroContent}>
    <Link to={path} className={styles.heroCta}>
      <Heading className={styles.title} level={1}>
        {title}
      </Heading>
    </Link>
    <div className={styles.heroBody}>
    <p className={styles.bodyText}>{body}</p>
  </div>
</section>
```
{% endtab %}
{% endtabs %}

* In Gatsby `class` is a reserved keyword and therefore we can't use it to assign CSS classes to selectors.  Instead, we use `className` as shown above
* The code in the curly brackets above \(i.e. `[styles.hero}`, `{styles.HeroMedia}`,  `[styles.heroCta}`, etc.\), is how CSS Modules applies the classes to each selector.  These classes are the ones written inside the `styles.module.scss`above.
* Doing this ensure the scope of our styles are uniquely coupled to the component they are intended for.  There is no risk of styles leaking into other areas of the website.




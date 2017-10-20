# What is BEM

BEM is a naming convention used when naming CSS classes. It's very popular with front end web developers as it ties in nicely with creating component based layouts. When building websites or web apps, especially larger ones, there are often components that are reused across many parts of the site. These components can end up sitting in different areas of a page's layout and within other components on a page. Creating styles that don't interfere with existing components or require multiple overrides to make them look right when sitting within another component has lead to a few naming conventions being created. BEM is one of these.

BEM stands for Block Element Modifier. The block is the component itself. A block should be named so that there is little chance of there being another block with the same name (or we will end up with clashes and overrides). The length of a name doesn't really matter but it should be written with SINGLE HYPHENS.

```
.search {}
.page-navigation {}
.shopping-cart-receipt {}
```

The longer/more unique the name is, the less chance of a future clash will happen. In the example above `.search` would be better with a more specific name like `.site-search-bar`.

Before we start to look at the element part of BEM I will digress into what a component should be. A component is something that could be taken from one area and used somewhere else with no modifications necessary. `.page-navigation` could be used in the header, a side bar or the footer. All `.page-navigation` should be interested in is how it display's itself. That is it's one job. It's up to the header, sidebar or footer to worry about where and how they fit that element in.

Note. If it does need a 'tweak' to fit better to it's location then it can use a modifier, however when we come to modifers later it should be noted that if you need to change a component with multiple modifiers then it may be worth considering if it is actually better suited to being another component. Don't go component mad, and don't resist using them. It's a balancing game that you will learn over time.

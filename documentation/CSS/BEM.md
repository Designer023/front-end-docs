# What is BEM

BEM is a naming convention used when naming CSS classes. It's very popular with front end web developers as it ties in nicely with creating component based layouts. When building websites or web apps, especially larger ones, there are often components that are reused across many parts of the site. These components can end up sitting in different areas of a page's layout and within other components on a page. Creating styles that don't interfere with existing components or require multiple overrides to make them look right when sitting within another component has lead to a few naming conventions being created. BEM is one of these.

## Why is it called BEM?

BEM stands for Block Element Modifier. If we think of each component on a web page then the top level element for each component can be considered to be the Block. That could be a ```profile-panel``` or it could be a ```image-gallery-slider```. The elements inside this top level component (the block) are the Element. That could be a 
```profile-panel__image```, ```profile-panel__user-details``` or ```image-gallery-slider__picture```. Any of the blocks or elements can have a modifier. These are used to tweak something when there is a variant. These could be ```profile-panel__image--featured```, ```image-gallery-slider__picture--pinned``` or ```button--warning```. In general it's usually Blocks and Elements that are used heavily as they make up the structure of pages. Modifiers are generally used sparingly.

## What is a Block

The block is the component itself. It should be thought of as something that could be picked up and put somewhere else, even in another project and it would retain it's styles. With this in mind, it's important to name blocks with a unique name so that the likelyhood of there being another block with the same block name is as low as possible. The length of a name doesn't really matter but it should be written with SINGLE HYPHENS. 

```
.search {}
.page-navigation {}
.shopping-cart-receipt {}
```

The longer/more unique the name is, the less chance of a future clash will happen. In the example above `.search` would be better with a more specific name like `.site-search-bar`.

## What is an Element?

An element is any of the markup that is within the component. All elements within a component MUST start with the component name. The element name follows the component name with a DOUBLE UNDERSCORE and can be hypenated with SINGLE HYPHENS. If you were creating a ```profile-card``` then the elements would be ```profile-card__user-image``` and ```profile-card__blurb``. 

```
<div class="profile-card">
    <img class="profile-card__user-image" src="..." />
    
    <div class="profile-card__blurb">
        ...
    </div>
</div>
```

From the markup above it's very clear which HTML elements are  all part of the same component. Obviously we could have elements within elements so it's important to note that even though an element is within another, it's naming should be based on the component and not the element or sub element it sits within


```
// Wrong markup
<div class="profile-card">
    <img class="profile-card__user-image" src="..." />
    
    <div class="profile-card__blurb">
        <h2 class="profile-card__blurb__heading">
            ... This is wrong! ...
            <a href="..." class="profile-card__blurb__heading__link">
                ... Wrong on so many levels ...
            </a>
        </h2>
        <div class="profile-card__blurb__content">
            ... This is also wrong! ...
        </div>
    </div>
</div>

// Correct markup
<div class="profile-card">
    <img class="profile-card__user-image" src="..." />
    
    <div class="profile-card__blurb">
        <h2 class="profile-card__user-heading">
            ... This is correct! ...
            <a href="..." class="profile-card__user-heading-link">
                ... Right on so many levels ...
            </a>
        </h2>
        <div class="profile-card__user-content">
            ... This is also correct! ...
        </div>
    </div>
</div>

```

This is a common beginner mistake. Why? Each element belongs to the component and not to another element. Elements can be moved around within a component. They can become nested in others, un nested all in the the process of building a webpage. It happens.
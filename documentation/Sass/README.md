# Sass

## What is Sass

Sass is an extension of CSS. You can write normal CSS in a Sass file!

```
// Sass
.selector {
    display: block;
}

// Compiles to CSS
.selector {
    display: block;
}

```

But that's not why we use Sass. Sass is used because it adds in a load of useful features which can make writing code easier.

## Nesting

Nesting allows related selectors to be easily grouped without having to rewrite parent selectors each time.

```
// Nested Sass

.parent {
    display: block;

    .child {
        display: inline;
    }
}

// Complied nested Sass

.parent {
    display: block;
}

.parent .child {
    display: inline;
}

```

With the use of the ampersand we can also join classes and pseudo classes together.

```
// Nested Sass

.parent {
    display: block;

    // Note the &
    &.extra-class {
        display: inline;
    }
}

// Complied CSS

.parent {
    display: block;
}

.parent.extra-class {
    display: inline;
}

```

```
// Nested Sass

.link {
    color: red;

    // Note the &
    &:hover {
        color: blue;
    }
}

// Complied CSS

.link {
   color: red;
}

.link:hover {
    color: blue;
}

```
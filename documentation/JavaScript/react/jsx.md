# JSX

JSX is a JavaScript extension syntax that allows the use of HTML within a JavaScript document. This makes is very easy to bind (link) a components data and actions directly into the HTML that is created when an app compiles.

```
<div>
  Hello JSX!
</div>
```
It looks just like HTML, because it shares the same syntax. However when JSX is compiled it can convert variables into actual HTML

```
let my_var = 'Hello you!'

...

<div>
  {my_var}
</div>

// Would render as:

<div>
  Hello you!
</div>
```

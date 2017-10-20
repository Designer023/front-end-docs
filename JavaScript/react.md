# A rough guide to React


## What is React?

React is a JavaScript library for building state driven user interfaces. Simply put, React keeps a user interface in sync with the state (data) that it is representing.

### How is React used?

A UI is built up from components and each component can subscribe or 'listen' to the applications state/data. When the state updates then then React uses the new data to update the UI where it needs to. This update in state can either come through a user generated action (clicking or submitting something) or from another source (a new message is posted into a conversation or a server).

React checks the current UI against it's new updated UI and updates only the parts it needs to. This makes it quick and light on resources (compared to updating a page structure using jQuery) meaning nice snappy applications.

React code is written using JSX.

### What is JSX

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

### Why does React need to be compiled

Because React code is written in JSX (mostly) it means that browsers don't natively understand the code. We use a compiler to change the JSX into normal JavaScript that browsers understand. Because we compile the code we can also use the more modern versions of JavaScript (ES6) that includes the ability to import other libraries and components. This means our code can be more modular too!

As JavaScript has advanced as a language the newer web browsers have kept up, however, we still need to support older browsers. By compiling our React code we can add in backwards compatibility quickly and easily without having to write out of date code that is harder to maintain. There are many ways to compile React (and other modern Frameworks/Libraries) but the most common one is WebPack.

### What is WebPack, and can I not just use Gulp!

WebPack is a bundler. It takes code from many sources (e.g. your code and installed packages) and bundles them into one a set of code. Note: It can be configured to split out CSS from JS if required depending on the setup.

You can use WebPack without Gulp or with it depending on your project setup and needs. Most web apps just use WebPack, however some projects may need to use Gulp. Gulp can tell WebPack to run a script so both can be used together.



## Using React



### What is rendering

Rendering is the process that takes the initial code and, using the state/data it is given, generates the resulting markup that a browser displays. You will see render functions in almost every React component.

To render our favorite message "Hello World!" into a ```<div>``` we do the following.

```
...
render() {
  return (
      <div>
        Hello World!
      </div>
  )
}
...
```

In the example below I have assumed that a prop(erty) has been passed to this component with the variable of message. In React a prop is accessed using this.props.WHATEVER_THE_PROP_NAME_IS!

```
...
render() {
  let message = this.props.message;

  return (
      <div>
        { message }
      </div>
  )
}
...
```

To keep the return function cleaner it's often easier to define new variables from properties or state eg. ```this.props.message``` to the cleaner named ```message```. You can also apply logic when defining these new variables so we can have if statements, map out data to sub objects and do everybody's favorite... Maths!

We can add ```this.props.message_count``` and ```this.props.friend_request_count``` together and then check if the result is above 0. If it is then we would show the count. If not then we can show a message instead!


```
...
render() {
  let notifications_count = this.props.message_count + this.props.friend_request_count;

  if (notifications_count == 0) {
    notifications_count = 'Nothing to do! Hurrah!'
  }

  return (
      <div>
        { notifications_count }
      </div>
  )
}
...
```

Or if we want to display a list of data we can ```map``` it with a function and return some markup for each item in the list eg. Assuming: ```this.props.staff ``` contains the data ```['Alice', 'Bob', 'Clark', 'DaVinci', 'Edwardo']``` then we can render a HTML list with the data:

```
...
render() {
  let people = this.props.staff.map(function(person) {
    return (
        <li>{person}</li>
      )
  })

  return (
      <ul>
        { people }
      </ul>
  )
}
...
```

Note: All React components must return a single DOM element at the top level. The following would fail to compile and run

```
...
render() {
  return (
      <div>
        Hello World!
      </div>

      <div>
        Hear me roar!
      </div>
  )
}
...
```

So If you end up with more than one element then wrap them in something.


```
...
render() {
  return (
    <div>
        <div>
          Hello World!
        </div>

        <div>
          Hear me roar!
        </div>
    </div>
  )
}
...
```

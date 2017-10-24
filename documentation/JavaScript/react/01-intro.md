# An introduction to React

## What is React?

React is a JavaScript library for building state driven user interfaces. Simply put, React keeps a user interface in sync with the state (data) that it is representing.

### How is React used?

A UI is built up from components and each component can subscribe or 'listen' to the applications state/data. When the state updates then then React uses the new data to update the UI where it needs to. This update in state can either come through a user generated action (clicking or submitting something) or from another source (a new message is posted into a conversation or a server).

React checks the current UI against it's new updated UI and updates only the parts it needs to. This makes it quick and light on resources (compared to updating a page structure using jQuery) meaning nice snappy applications.

React code is written using JSX and compiled into regular JavaScript.


### Why does React need to be compiled

Because React code is written in JSX (mostly) it means that browsers don't natively understand the code. We use a compiler to change the JSX into normal JavaScript that browsers understand. Because we compile the code we can also use the more modern versions of JavaScript (ES6) that includes the ability to import other libraries and components. This means our code can be more modular too!

As JavaScript has advanced as a language the newer web browsers have kept up, however, we still need to support older browsers. By compiling our React code we can add in backwards compatibility quickly and easily without having to write out of date code that is harder to maintain. There are many ways to compile React (and other modern Frameworks/Libraries) but the most common one is WebPack.

### What is WebPack, and can I not just use Gulp!

WebPack is a bundler. It takes code from many sources (e.g. your code and installed packages) and bundles them into one a set of code. Note: It can be configured to split out CSS from JS if required depending on the setup.

You can use WebPack without Gulp or with it depending on your project setup and needs. Most web apps just use WebPack, however some projects may need to use Gulp. Gulp can tell WebPack to run a script so both can be used together.

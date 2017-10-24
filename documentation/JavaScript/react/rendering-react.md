# Rendering HTML in a React / JSX component

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

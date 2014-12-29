# &lt;countdown-timer&gt;

> A web component to make countdowns easily

# Install
```
$> bower install https://github.com/BraulioVM/countdown-timer
```

## How-to
```html
<!doctype html>
<html>
<head>
  (...)
  <!-- Include the web components polyfill -->
  <script src="bower_components/webcomponentsjs/webcomponents.min.js"></script>

  <!-- Include countdown-timer -->
  <link rel="import" href="bower_components/countdown-timer/element.html">

  (...)
</head>
<body>
  (...)
  <countdown-timer hours="1" minutes="30" seconds="0" running="true"></countdown-timer>
</body>
</html>
```
## Attributes
You can find all the attributes in the example above

## Methods
You can access the element as if it were any other html element.
```javascript
var ct = document.querySelector("countdown-timer");
```
### run
```javascript
ct.run(); // Sets the countdown running
```

### stop
```javascript
ct.stop();  // Stops the countdown
```

## Events

#### count-ended
```javascript
ct.addEventListener("count-ended", function(){
  alert("The bomb is going to explode right now");
});
```

### count-stopped
```javascript
ct.addEventListener("count-stopped", function(){
  alert("Someone stopped the bomb, yay!");
})
```

### count-running
```javascript
ct.addEventListener("count-running", function(){
  alert("Oh no! The time is going down");
});
```

## Styling
Style it as you'd style any other element

```css

countdown-timer.bomb-countdown {
  font-size: 400%;
  color: red;
  background-color: black;
  border: 5px solid red;
}

```



## License
Licensed under the MIT license.

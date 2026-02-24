Question Answer-

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

=>These are all DOM selectors.
getElementById() selects an element by its id name, since id is unique, it returns a single element . If it doesn’t find anything, it returns null.

getElementsByClassName() selects elements by class names. It returns an html collection(like an array but not array). And it’s live, if the DOM changes, the collection updates automatically.

querySelector() selects elements using css selector. It returns the first matching element. If nothing matches, it returns null.

querySelectorAll() also uses css selector , but it returns all matching element. It returns a node list, which is static (collection doesn’t update automatically.


2. How do you create and insert a new element into the DOM?

=>To create and insert a new element into the DOM, first need to create the element using document.createElement(). Then  add content or class and then insert it using append() or appendChild().

3. What is Event Bubbling? And how does it work?

=>Event Bubbling means when an event happens on a child element and it doesn’t stop there and  goes upward to its parent, then grandparent, up to document level.
so if  a button click inside a div, first the button event runs, then the div event runs then it  runs event upward through its ancestors. The event running upwards like a bubble in water that’s why it’s called event bubbling.

4. What is Event Delegation in JavaScript? Why is it useful?

=>Event delegation means instead of adding event listener to multiple child elements, adding one listener to their parent and handle the event from there using event.target.
It is useful because it is cleaner, improves performance and  works dynamically( the parent automatically  handle if new element added )

5. What is the difference between preventDefault() and stopPropagation() methods?

=>preventDefault() stops the browser’s default action or behavior. For example, stopping a form from submitting and refreshing the page when a user clicks a submit button, preventing a checkbox or radio button from toggling its checked state .
stopPropagation() stops the event from bubbling up to parent elements.for example, If a button  is inside a div and both have click event listeners, clicking the button would normally trigger both listeners due to event bubbling. so calling event.stopPropagation() on the button's event handler ensures only the button's handler runs and the div's handler is not executed.
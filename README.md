### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer:
1. getElementById():
(I) Can selects an HTML element by id only.
(II) Returns one single element.
(III) Returns an element object.
(IV) Fastest and most efficient for id selection.

2. getElementsByClassName():
(I) Can selects one or more HTML element by class only.
(II) Returns multiple elements.
(III) Returns an HTMLCollection.
(IV) Good for dynamic class-based updates.

3. querySelector() / querySelectorAll():
Both methods CSS selectors to find elements in the DOM.
(I) querySelector() returns single element.
(II) querySelectorAll() returns a collection of all matching elements as a NodeList.

### 2. How do you create and insert a new element into the DOM?
Answer:
step-1: create the element
const newDiv = document.createElement('div');

step-2: add content
newDiv.innerText = 'Creating A New Div';

step-3: append inside the DOM
document.body.append(newDiv);

### 3. What is Event Bubbling? And how does it work?
Answer: Event bubbling is a DOM event propagation mechanism where an event starts at the target element and then propagates upward through its parent elements up to the root (document). Each ancestor can handle the same event unless propagation is stopped using event.stopPropagation().

### 4. What is Event Delegation in JavaScript? Why is it useful?
Answer: Event Delegation is a pattern used to handle events efficiently by attaching a single event listener to a parent element instead of adding listeners to multiple similar child elements.

### 5. What is the difference between preventDefault() and stopPropagation() methods?
Answer: 
preventDefault():

stoPropagation(): stoPropagation() is use to stop the flow of an event through the DOM. This is particularly useful for controlling event bubbling, where an event triggered on a child element also triggers handlers on all of its parent elements.
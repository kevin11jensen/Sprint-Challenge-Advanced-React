- [ ] Why would you use class component over function components (removing hooks from the question)?
        Class components are the 'old' way of writing code in React. The new way is much cleaner and saves time. The reason you would use a class component would be because you may be looking at an old React program that was written before they made the change.
        The main reason, and the one I believe this question is looking for, is that React life cycle methods cannot be used in functional components but can be used in class components.

- [ ] Name three lifecycle methods and their purposes.

    'render()' would be the first and most common because it is required when using a class component. The purpose of render is to handle the rendering of your component during mounting and updating. 'componentDidMount()' would be another one and it is called when the component is mounted and ready. The purpose of it is allowing us use of 'setState()' which will cause another rendering but ensure the user won't see double rendering. There is also 'componentDidUpdate()' which is invoked when the updating happens. The most common purpose is updating the DOM to responding to prop or state changes.

- [ ] What is the purpose of a custom hook?

    The purpose of custom hooks is to reuse stateful logic. They are just a wrapper type function that surrounds our existing hooks.


- [ ] Why is it important to test our apps?

        it is important to test our apps because there may be bugs that come up later in the development process and they will be very difficult to figure out where they are and fix them if you already have written thousands of lines of code. Better to test from the beginning then wait until the end when it is nearly impossible on a real world company project that could be massive.
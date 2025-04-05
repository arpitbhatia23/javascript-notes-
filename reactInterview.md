## React Interview Questions and Answers (Asked in Chandigarh Companies)

1. **What is React?**
   - A JavaScript library for building user interfaces using a component-based approach.

2. **What is JSX?**
   - JSX stands for JavaScript XML. It allows us to write HTML in React.

3. **What are components in React?**
   - Components are the building blocks of a React application. They can be class or function components.

4. **What is the difference between functional and class components?**
   - Functional components are stateless until hooks. Class components have lifecycle methods and state.

5. **What are props in React?**
   - Props are inputs to components used to pass data and event handlers.

6. **What is state in React?**
   - State is a built-in object to store property values that belong to the component.

7. **What are React Hooks?**
   - Functions like `useState`, `useEffect` that allow functional components to use state and lifecycle features.

8. **What is useEffect hook?**
   - Performs side effects in function components. Runs after render.

9. **What is the virtual DOM?**
   - A lightweight copy of the real DOM. React uses it to improve performance.

10. **How does React update the DOM?**
   - Using diffing algorithm, React compares virtual DOM with real DOM and updates only changed parts.

11. **What is a key in React and why is it important?**
   - A unique identifier for list items that helps React identify which items have changed.

12. **What is the use of useRef hook?**
   - To persist values across renders without causing re-renders, and for direct DOM access.

13. **What is useContext?**
   - It allows access to context values without using a Context.Consumer wrapper.

14. **What is React Router?**
   - A library for routing in React applications to enable navigation between views.

15. **How do you conditionally render components in React?**
   - Using ternary operator, logical &&, or if-else statements.

16. **What is lifting state up in React?**
   - Moving state to a common ancestor to share it among child components.

17. **What is the difference between controlled and uncontrolled components?**
   - Controlled components have state managed by React; uncontrolled ones use DOM directly.

18. **What is React.memo?**
   - A higher-order component that prevents unnecessary re-renders.

19. **What is the purpose of useCallback?**
   - Returns a memoized version of a callback to prevent re-creation on every render.

20. **What is useMemo?**
   - Memoizes the result of a calculation to avoid expensive recalculations on each render.

21. **How do you handle forms in React?**
   - By using state to control form inputs (controlled components) or using libraries like Formik/react-hook-form.

22. **What is prop drilling?**
   - Passing props through intermediate components unnecessarily.

23. **What are portals in React?**
   - Allow rendering children into a DOM node outside the parent component hierarchy.

24. **What is an error boundary?**
   - A component that catches JavaScript errors anywhere in its child component tree.

25. **What is the use of StrictMode?**
   - Helps highlight potential problems in an application during development.

26. **How to optimize performance in React?**
   - Use memoization, lazy loading, virtualization, code splitting, and avoiding unnecessary renders.

27. **What is lazy loading in React?**
   - Technique to load components only when they’re needed using `React.lazy` and `Suspense`.

28. **What is Redux?**
   - A predictable state container for JavaScript apps, often used with React.

29. **What are actions in Redux?**
   - Plain JavaScript objects that describe what happened in the app.

30. **What is a reducer in Redux?**
   - A function that determines how the state should change in response to an action.

31. **What is the Redux store?**
   - The single source of truth for your app's state.

32. **What is middleware in Redux?**
   - Functions that sit between dispatching an action and the moment it reaches the reducer.

33. **What is React DevTools?**
   - A browser extension for inspecting the React component hierarchy.

34. **What is reconciliation in React?**
   - The process of comparing the new virtual DOM with the previous one and updating the real DOM accordingly.

35. **How do you perform side effects in React?**
   - By using the `useEffect` hook.

36. **Can you explain the component lifecycle?**
   - For class components: Mounting, Updating, Unmounting phases with methods like `componentDidMount`, etc.

37. **How do you share logic between components?**
   - Using custom hooks, higher-order components, or render props.

38. **What are forward refs?**
   - Allows ref to be passed from parent to child component using `React.forwardRef`.

39. **How do you handle errors in React?**
   - Using try/catch, error boundaries, or error-handling logic inside hooks.

40. **What are fragments in React?**
   - Short syntax `<></>` used to group multiple elements without adding extra nodes to the DOM.

41. **What is the significance of defaultProps?**
   - Provides default values for props if none are passed.

42. **What are synthetic events in React?**
   - React's cross-browser wrapper around the browser's native event.

43. **What is hydration in React?**
   - The process of attaching event listeners and converting static content into dynamic React components.

44. **What is reconciliation algorithm?**
   - The diffing algorithm used by React to optimize DOM updates.

45. **What are compound components?**
   - Pattern where multiple components work together with shared implicit state.

46. **What are render props?**
   - A technique where a component's child is a function to dynamically decide what to render.

47. **What is the difference between Context API and Redux?**
   - Context is simpler and used for smaller-scale state sharing, Redux is better for large applications.

48. **What is code splitting in React?**
   - Splitting code into smaller chunks to improve performance and loading time.

49. **What is server-side rendering (SSR)?**
   - Rendering components on the server and sending HTML to the client.

50. **How do you debug a React application?**
   - Using React DevTools, console logs, error boundaries, and breakpoints in dev tools.


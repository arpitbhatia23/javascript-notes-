## CSS Interview Questions and Answers (Asked in Chandigarh Companies)

1. **What is CSS?**
   - CSS stands for Cascading Style Sheets. It is used to style HTML elements.

2. **What are the different types of CSS?**
   - Inline, Internal, and External CSS.

3. **What is the difference between id and class in CSS?**
   - `id` is unique and used once per page; `class` can be reused multiple times.

4. **What is the box model in CSS?**
   - Consists of content, padding, border, and margin.

5. **What is specificity in CSS?**
   - Determines which CSS rule is applied by the browser when multiple rules match.

6. **What is the difference between relative, absolute, fixed, and sticky positioning?**
   - Relative: positioned relative to its normal position. Absolute: positioned relative to the nearest positioned ancestor. Fixed: relative to the viewport. Sticky: toggles between relative and fixed.

7. **What are pseudo-classes in CSS?**
   - Used to define a special state of an element like `:hover`, `:nth-child()`.

8. **What are pseudo-elements in CSS?**
   - Used to style specific parts of an element, like `::before` and `::after`.

9. **What is the difference between em and rem units?**
   - `em` is relative to the parent element, `rem` is relative to the root element.

10. **What is z-index in CSS?**
   - Controls the vertical stacking order of elements.

11. **What are media queries?**
   - Used to apply CSS based on screen size, resolution, or device type.

12. **What is the difference between visibility: hidden and display: none?**
   - `visibility: hidden` hides the element but retains its space; `display: none` removes it from the layout.

13. **What is the default position of an HTML element?**
   - Static.

14. **What is the difference between inline, block, and inline-block elements?**
   - Inline: no line break. Block: starts on a new line. Inline-block: like inline but accepts height/width.

15. **How do you center a div?**
   - Horizontally: `margin: auto;`. With Flexbox or Grid for vertical centering.

16. **What is Flexbox in CSS?**
   - A layout model for distributing space along a single row or column.

17. **What is the difference between justify-content and align-items?**
   - `justify-content` aligns items along the main axis. `align-items` aligns along the cross axis.

18. **What is a pseudo-selector?**
   - Selects elements in a specific state, e.g., `:hover`, `:checked`.

19. **What is a combinator in CSS?**
   - Explains relationship between selectors: descendant, child (`>`), adjacent sibling (`+`), general sibling (`~`).

20. **What is important in CSS and when to use it?**
   - Overrides all previous rules. Use sparingly when no other option is viable.

21. **What is the difference between min-width, max-width, and width?**
   - `width`: exact. `min-width`: at least. `max-width`: at most.

22. **What are transitions in CSS?**
   - Allow smooth changes between property values over time.

23. **What are animations in CSS?**
   - Keyframe-based sequences for animating elements.

24. **What is the difference between relative and absolute units?**
   - Relative: depend on other values (em, rem, %). Absolute: fixed sizes (px, cm).

25. **What is a CSS preprocessor?**
   - Tools like Sass, LESS that add functionality like variables and nesting to CSS.

26. **What is the difference between Sass and SCSS?**
   - Sass: indented syntax. SCSS: uses curly braces and semicolons like CSS.

27. **What is Grid in CSS?**
   - A 2D layout system for arranging items in rows and columns.

28. **How do you create a responsive design?**
   - Use media queries, flexible grids, and relative units.

29. **What is a viewport?**
   - The visible area of a web page on a device.

30. **What is a reset CSS?**
   - Removes default browser styling for consistency.

31. **What is the difference between attribute selector and class selector?**
   - Attribute selector targets elements by attributes; class selector by `class` attribute.

32. **What are CSS variables?**
   - Custom properties declared with `--` and accessed with `var()`.

33. **What is the use of calc()?**
   - Performs calculations to set property values dynamically.

34. **What is layering in CSS?**
   - Stack order managed using z-index and position properties.

35. **What are shadows in CSS?**
   - `box-shadow` and `text-shadow` create visual depth.

36. **What is the use of object-fit property?**
   - Controls how an image or video fits within its container.

37. **What is the difference between nth-child and nth-of-type?**
   - `nth-child`: selects based on position. `nth-of-type`: based on tag type.

38. **How can you apply styles to multiple elements?**
   - Use grouped selectors: `div, p, span {}`

39. **What is the default display value of a span element?**
   - Inline.

40. **How do you create a triangle in CSS?**
   - Using borders on a zero-sized element.

41. **What is the clear property in CSS?**
   - Prevents elements from wrapping around floated elements.

42. **What is overflow in CSS?**
   - Specifies how content is handled when it overflows its container.

43. **What is the difference between auto and 100% width?**
   - `auto` adjusts based on content. `100%` stretches to container’s width.

44. **What are vendor prefixes in CSS?**
   - Used for experimental CSS features, e.g., `-webkit-`, `-moz-`.

45. **What is a sticky header?**
   - A header that stays at the top of the page while scrolling.

46. **How do you disable a button in CSS?**
   - Use `pointer-events: none; opacity: 0.5;`

47. **What is backdrop-filter?**
   - Applies a filter to the area behind an element (e.g., blur).

48. **How do you hide an element but keep it accessible?**
   - Use `visibility: hidden` or `opacity: 0` and keep in DOM.

49. **What is isolation in CSS?**
   - Creates a new stacking context using `isolation: isolate;`

50. **What is the difference between align-content and align-items?**
   - `align-items` aligns items in a single line. `align-content` aligns multiple lines (in flex/grid).

---

## Tailwind CSS Interview Questions and Answers

1. **What is Tailwind CSS?**
   - A utility-first CSS framework for rapidly building custom user interfaces.

2. **How does Tailwind differ from Bootstrap?**
   - Tailwind uses utility classes, whereas Bootstrap provides pre-styled components.

3. **What is a utility-first framework?**
   - A framework that uses small, reusable classes to build components.

4. **How do you apply custom colors in Tailwind CSS?**
   - Extend the theme in `tailwind.config.js` under `theme.colors`.

5. **How do you enable dark mode in Tailwind?**
   - Set `darkMode: 'class'` or `'media'` in the config file.

6. **What is the purpose of `@apply` in Tailwind CSS?**
   - Allows you to group utility classes inside custom CSS.

7. **How do you install Tailwind CSS in a project?**
   - Using PostCSS or via CDN for basic usage.

8. **How can you make a responsive layout with Tailwind?**
   - Use responsive prefixes like `sm:`, `md:`, `lg:` etc.

9. **How do you add hover effects in Tailwind CSS?**
   - Use `hover:` prefix, e.g., `hover:bg-blue-500`.

10. **Can we use Tailwind with React?**
   - Yes, Tailwind integrates well with React and other frameworks.

11. **How do you control spacing in Tailwind CSS?**
   - Using margin (`m-4`, `ml-2`) and padding (`p-4`, `px-2`) utility classes.

12. **What are variants in Tailwind CSS?**
   - Modifiers like `hover:`, `focus:`, `active:` applied to utility classes.

13. **What is PurgeCSS in Tailwind?**
   - Tool to remove unused CSS in production builds.

14. **How can you customize Tailwind configuration?**
   - Modify `tailwind.config.js` file.

15. **What is JIT mode in Tailwind CSS?**
   - Just-in-Time compiler that generates styles on-demand for better performance.

16. **What is a plugin in Tailwind CSS?**
   - Allows custom utilities, components, or themes to be added.

17. **How do you style pseudo-elements in Tailwind?**
   - Use plugin or extend config as Tailwind does not support `::before`/`::after` natively.

18. **How do you center a div using Tailwind?**
   - Use `flex justify-center items-center`.

19. **What are breakpoints in Tailwind CSS?**
   - Predefined screen sizes: `sm`, `md`, `lg`, `xl`, `2xl`.

20. **How do you add animations in Tailwind?**
   - Use built-in classes like `animate-spin`, or define custom keyframes in config.


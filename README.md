# light-dark-theme

## Work in progress

Keep in mind that this is my first attempt at creating a npm module, more of a learning excercise than a legitimate tool :)

It's a very simple module for adding a switch to toggle the page's light/dark theme in javascript.

1. Import the module into your js file:
   `import setTheme from "@shannqa/light-dark-theme";`

2. Create or select an element which is going to be your toggle, for example:
   `const themeSetter = document.createElement("button");`

3. Run the function from the module, using the above element as an argument:
   ` setTheme(themeSetter);`

4. (Optional) Add styling and append the element to the DOM:

```
themeSetter.classList.add("theme-toggle");
header.appendChild(themeSetter);
```

5. In your CSS file, add following selectors:

```
:root,
:root.light {
}
:root.dark {
}
```

6. Add your preferred styling to the light and dark root classes using variables, for example:

```
--bg-color: white;
--font-color: black;
--secondary-color: rgb(82, 12, 90);
```

7. Use the variable colors in your regular CSS selectors, for example:

```
body {
background-color: var(--bg-color);
color: var(--font-color);
}
```

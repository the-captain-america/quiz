# HTML ELEMENTS

## Link

- How do we define a link tag?
- Answer:

```html
<link />
```

- Link to documentation on the link:
  [Learn about the link tag](https://www.w3schools.com/tags/tag_link.asp)

- What are the two primary attributes on the link tag?
  a. rel
  b. href

- How do we define a rel attribute?
- Answer:

```html
<link rel="put_rel_type_here" />
```

- What string should we add to the rel attribute if we are using the link tag to import a css file?
- Answer: "stylesheet"

```html
<link rel="stylesheet" />
```

- How do we specify on a link tag the file / file path / url that we want the link tag to fetch / grab for us?
- Answer: Use the href attribute.
- How do we define the href attribute if we wanted to import a .css file that was sitting right beside the html file?
- First take a look at your files directory, check to see where the `.css` file is located. If there is no .css file, then perhaps you need to add it. Once you have located where your .css file is located inside your application folder structure, then check to see if it is inside of another folder. For example, if the .css file is inside another folder than you will need to add the folder name to the `href` attribute on the link tag. See example below (Note that the example code below is based on the fact that the .css file is inside a `styles` folder right next to the .html file you are working on / defining the link tag on):

```html
<link rel="stylesheet" href="./styles/styles.css" />
```













## Website (working html structure)

```html
<html lang="en">
  <head>
    <title>This is the title</title>
    <script href="../index.js" />
  </head>

  <body>
    <div id="vinu" />
  </body>

  <script>
  
  </script>
</html>


```


## index.js

```js

```

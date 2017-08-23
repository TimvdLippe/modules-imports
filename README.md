# What is this project?

Given the look of the Polymer 3 preview with JS modules, several developers expressed their preference for sticking with HTML files.
This project aims to explore the possibility of loading the Polymer 3 preview from elements that continue to be defined with HTML imports.
As you can see in the files, you still can, by taking advantage of `<script type="module">` (**Requires Chrome Canary at the time of writing**).

Do note though that as soon as you define your custom element inside a HTML file, you are not able to load it from JavaScript.
Loading thus follow these rules:

1. You can load JS modules from JS modules. E.g. Polymer from a JS custom element file
2. You can load JS modules from HTML files. E.g. Polymer from a HTML custom element file
3. You can NOT load HTML files from JS modules. E.g. a HTML custom element file from a JS custom element file.

# Implications

This project shows that you can still define custom elements inside HTML files, the only difference is the loading mechanism used to load Polymer.
However, custom element authors who publish reusable custom elements should define their custom elements in JS files.
That way, your custom element is loadable by both HTML and JS custom element files.

If you control the definitions of all elements in your application, you can choose to use HTML imports to load all of your defined elements.
Keep in mind that you will require a polyfill on major browsers, whereas JS modules are natively available in Chrome, Safari and Opera.
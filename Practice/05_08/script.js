/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 
Practice:
-Find an element and add two new classes
-Remove only one of the new classes
-Add a new attribute to an element

Additional Practice
-Request the value of the attribute
-Change the values of the attribute
-Add some inline CSS to an element by specifying the style property
and setting its value
-Query the style property of an element in the console to get a list
of all the style properties available

has/get/set/removeAttribute

document.querySelector("header").hasAttribute("class");
true
document.querySelector("header").setAttribute("class","newClass2 new class");
undefined
document.querySelector("header").getAttribute("class");
'newClass2 new class'
document.querySelector("header").setAttribute("class","newclass2 new");
undefined
document.querySelector("header").getAttribute("class");
'newclass2 new'
document.querySelector("header").setAttribute("data-set", "data-value1")
undefined
document.querySelector("header").getAttribute("data-set");
'data-value1'
document.querySelector("header").setAttribute("data-set", "data-value2")
undefined
document.querySelector("header").getAttribute("data-set");
'data-value2'
document.querySelector("header").style
CSSStyleDeclaration{accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}
document.querySelector("header").style.backgroundColor="purple"
'purple'
document.querySelector("header").style
CSSStyleDeclaration{0: 'background-color', accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}
 */

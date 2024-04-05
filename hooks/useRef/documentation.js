/*

? The useRef() Hook


NOTES

1. useRef is used to return a reference to the DOM element within a 
   React component for manipulation purposes.

   const refObject = useRef(initialValue);

2. refObject.current will return a mutable object that will persist 
   for the full lifetime of the component.

3. Mutating the refObject.current value will not cause a re-render.

4. useRef doesn’t notify you when its content changes.

*/

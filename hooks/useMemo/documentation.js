/*

? The useMemo() Hook

NOTES
1. Similar to useCallback but instead of memoising a function, 
   the useMemo() is used to memoise a value.
2. The memoised value will recompute only when the dependencies have changed.
3. When there are expensive calculations in the react component, 
   useMemo() is useful to memoise the calculated values.

   const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);


4. The function passed runs only during rendering. DO NOT mistake it with 
   side effects like as in useEffect() hook.
5. If no array is provided in dependencies, a new value will be computed 
   on every render.
6. In the future, React may choose to “forget” some previously memoized 
   values and recalculate them on next render.
   ( e.g. to free memory for offscreen components )
7. Write your code so that it still works without useMemo 
   and then add it to optimize performance.

*/

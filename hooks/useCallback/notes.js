/*
? useCallback() hook

NOTES:
1. This returns a memoised callback function that changes if dependencies change.
2. Used when you pass callbacks to child components to prevent unnecessary re-renders.
3. Uses reference equality to prevent re-renders.
4. useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).
5. Every value referenced inside the callback should also appear in the dependencies array.
*/

// Example
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);

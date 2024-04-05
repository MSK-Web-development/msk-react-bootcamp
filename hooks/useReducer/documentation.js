/* 
? The useReducer() Hook

Notes:
1. useReducer is usually preferable to useState when:
- You have complex state logic that involves multiple sub-values
- when the next state depends on the previous one

2. Improves performance as callbacks need not be passed for component deep updates. You can pass the "dispatch" instead.

3. React guarantees that dispatch function identity is stable and won’t change on re-renders.

4. If you return the same state from the reducer, react will not rerender the component.

*/

/*
 ? Lazy initialization can be done by passing a third arguement "init"
      - This method is used when you don't know initialArgs. 
        They could be coming as component props.

*/

function init(initialArgs) {
  return { count: initialArgs };
}

const [state, dispatch] = useReducer(reducer, initialArgs, init);

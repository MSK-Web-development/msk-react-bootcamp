/*

? The useContext() Hook

NOTES:

1. Used to store the context for a react component through a context provider
2. Wrap the provider to the component like below

   <MyContext.Provider value={initialValue}>
      <MyComponent>
   </MyContext.Provider>

3. Access the context like below inside MyComponent

   const value = useContext(MyContext) 

4. The value of the context will be the value passed to the nearest parent provider.

5. When the nearest parent provider updates, <MyComponent /> will get 
   re-rendered with the latest context value.

*/

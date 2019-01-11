# Thursday, January 10, 2019

## Tasks

## Notes

## Redux Notes

1. Sometimes the concern is raised that storing the whole state in one huge JavaScript object
   might be wasteful. But since objects are reference-type values and the state is just an object
   holding references to other objects, it doesn’t have any memory implications; it is the same
   as storing many objects in different variables.
2. (For the createStore function) The initialState parameter is optional, and usually we delegate the task of building an
   initial state to reducers, as described in the Reducers chapter. However, it can be useful
   when you want to load the initial state from the server to speed up page load times. (Server-side rendering);
3. The only way to cause a change of the state is by passing
   actions to the reducer function. Actions sent to the store are passed to the reducer and the result is
   used as the new global state.
4. Code splitting—separating the production bundle into multiple files and loading them on
   demand when the user performs some interaction or visits a specific route—is commonly
   done if the application is too large to bundle into a single file or if you want to gain extra
   performance. Implementing lazy loading is outside the scope of this book, but you might
   want to know that code splitting also can be applied to the Redux store, thanks to the
   replaceReducer() method.
5. With redux-thunk installed, we can start writing action creators that return functions instead of
   objects.
6. Redux thunk allows => a single action creator caused the dispatch of two actions: ADD*RECIPE*-
   STARTED and ADD_RECIPE. This gives us a new tool, allowing us to generate as many granular actions
   as needed and even to dispatch no actions at all in certain conditions.
7. When redux-thunk notices the action is actually a function, redux-thunk will call it, passing it the dispatch() and
   getState() functions as parameters and sending the return value to the reducers.
8. Another feature we gain by using redux-thunk is access to the state when processing the action. This
   allows us to dispatch or suppress actions according to the current application state. For example, we
   can prevent actions from trying to add recipes with duplicate titles
9. use `getState()` to get access to the full application
   state and use a **return statement that made our action creator emit no action** at all:
10. While it is possible to handle validation logic in reducer, it adds complications to the reducer and causes it to be aware of multiple parts of the state tree. Therefore, it is better to have the validation logic in actions or middleware.

```js
function output(message) {
  console.log(message);
}

function withTimeHOC(fn) {
  return function(...args) {
    console.log(`Executed at ${Date.now()}`);
    fn(...args);
  };
}

// Usage Example
const timedOutput = withTimeHOC(output);
timedOutput("Hello World");

// instead of const wrapped = third(second(first(originalFn)));
const wrapped = compose(
  third,
  second,
  first
)(originalFn);
wrapped();
```

```js
// With redux-thunk, we can access state and act accordingly
const addRecipe = title => (dispatch, getState) => {
  const trimmedTitle = trimTitle(title);
  // We don't allow duplicate titles
  if (getState().recipes.find(place => place.title == trimmedTitle)) {
    return; // No action is performed
  }
  dispatch({
    type: ADD_RECIPE,
    payload: { title: trimmedTitle }
  });
};
```

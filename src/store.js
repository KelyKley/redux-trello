import createStore from 'redux-zero';

const TODOS = [
   {
      id: 0,
      user: 'Exposicion',
   },
   {
      id: 1,
      user: 'Presentación',
   }
];

const initialState = {
   todos: TODOS,
   selectedTodo: -1
};

const store = createStore(initialState);
export default store;

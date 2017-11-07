import store from './store';

export const addTodo = (user) => {
   let oldList = store.getState().todos;
   const newList = oldList.concat({
      id: oldList.length,
      user: user
   });
   store.setState({
      todos: newList
   });
};


/*
export const removeTodo = (todo, text, user) => {

    let oldList = store.getState().todos.filter(item => item !== todo);
    const newList = oldList.splice({
       id: oldList.target,
       text: text,
       user: user
    });
    store.setState({
       todos: oldList
    });
}*/


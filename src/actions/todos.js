/*

Create a todo
List all Todos
click for completed todo
delete a todo
deleted all completed todos

*/

export const CREATE_TODO = 'CREATE_TODO';

export function createTodo(text) {
    return {
        type: CREATE_TODO,
        text
    }
}
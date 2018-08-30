//force conversion of observable
//interfaces of the recieved JSON objects

export interface ICompleteTodo{
    owner: string;
    todos: Array<Todo>;
}

class Todo{
    description: string;
    category: string;
}
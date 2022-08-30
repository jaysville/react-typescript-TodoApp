class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = (Math.random() * 100).toFixed(3).toString();
  }
}

export default Todo;

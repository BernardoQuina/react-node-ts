import TodoList from './components/TodoList'

const App = () => {
  const todos = [{ id: 't1', text: 'Finish the course' }]
  return (
    <div className="App">
      {/* A component that adds todos */}
      <TodoList items={todos} />
    </div>
  )
}

export default App

import { useSelector } from 'react-redux';
import './App.css';
import AddForm from './components/addForm';

function App() {
  const state = useSelector((state) => state.todo)

  return (
    <>
      <h1>할 일 리스트</h1>
      {state.map((v) =>(
        <div key = {v.id}>{v.id} {v.todo}</div>
      ))}
      <AddForm state={state}/>
    </>
  );
}

export default App;

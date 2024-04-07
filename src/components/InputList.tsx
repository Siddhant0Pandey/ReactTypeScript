import "./styles.css";

interface Props {
  todos: string;
  setTodos: React.Dispatch<React.SetStateAction<string | undefined>>;
}

function InputList({ todos, setTodos }: Props) {
  return <div>InputList</div>;
}

export default InputList;

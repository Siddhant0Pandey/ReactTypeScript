import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string | undefined>>;
  handleAdd: () => void;
}

function InputFields({ todo, setTodo, handleAdd }: Props) {
  return (
    <div>
      <form className="input" onSubmit={handleAdd}>
        <input
          type="input"
          placeholder="Where is the task?"
          className="input__box"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        ></input>
        <button type="submit" className="input_submit">
          GO
        </button>
      </form>
    </div>
  );
}

export default InputFields;

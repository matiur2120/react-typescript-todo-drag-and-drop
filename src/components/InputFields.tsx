import React, { useRef } from "react";
type InputFieldProps = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
};
const InputFields: React.FC<InputFieldProps> = ({
  todo,
  setTodo,
  handleAdd,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="inputForm"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        className="textInput"
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
        type="text"
        placeholder="Enter a task"
      />
      <button className="submitButton" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputFields;

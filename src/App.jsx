import { useState } from "react";
import Input from "./components/shared/Input";

function App() {
  // a way to handle state of input in react but there is better using reducers
  // const [username, setUsername] = useState("");
  // and instead of one input field => we can use formInput state that handles all form values as object

  const [input, setInput] = useState({ username: "", age: "" });
  // then we can compute the value of the username and age from the state by destructing them;
  const { username, age } = input;
  const [error, setError] = useState("");

  // here you can validate on the whole form by looping over the form -> e.target
  function handleSubmit(e) {
    e.preventDefault();
    console.log(username);

    if (username.length < 3) {
      setError("the minimum length must be 3");
      return;
    }
    if (username.length === 0) {
      setError("field is required");
      return;
    }

    console.log(username, "is submitted");
  }
  // you can add more validation
  // #region One State
  // function handleChange(inputValue) {
  //   if (inputValue && inputValue.length < 3) {
  //     setError("the minimum length must be 3");
  //     return;
  //   }

  //   setUsername(inputValue);
  //   setError("");
  // }

  // you can use it if you clicked on the input
  // #endregion

  // we can use this for the form fields
  const handleChange = (e) => {
    // the html-name of the input field and its value
    const { name, value } = e.target;

    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (!value) {
      setError("field is required");
      return;
    }
    if (value.length < 3) {
      setError("the minimum length must be 3");
      return;
    }
    setError("");
  };
  function handleBlur() {
    if (username.length === 0) {
      setError("field is required");
      return;
    }
    setError("");
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <Input
            type={"text"}
            placeholder={"John Doe"}
            name={"username"}
            label={"Username"}
            onChange={handleChange}
            error={error}
            onBlur={handleBlur}
          />

          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
}

export default App;

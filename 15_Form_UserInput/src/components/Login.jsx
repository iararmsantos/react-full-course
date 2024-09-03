import { useRef, useState } from "react";

export default function Login() {
  //Ref as option to handle form submit
  //positive - require less code than useState
  //negative - reset values is not clean
  const email = useRef();
  const password = useRef();
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);

  function handleSubmit(event) {
    event.preventDefault(); //prevent generate and send http request automatically

    //ref save the html properties
    //current hold actual value
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    const emailIsValid = enteredEmail.includes("@");
    if (!emailIsInvalid) {
      setEmailIsInvalid(true);
      return;
    }

    setEmailIsInvalid(false);
    console.log(enteredEmail, enteredPassword);

    //to reset the data manually
    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

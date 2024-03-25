import React from "react";

const Form = () => {
  const handleOnChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <form action="">
        <input type="text" name="name" onChange={handleOnChange} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;

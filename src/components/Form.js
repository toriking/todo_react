import React from 'react';

const Form = props => {   //引数でAppコンポーネントからpropsを受け取る。
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        onChange={props.handleChange}
        value={props.value}
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default Form;
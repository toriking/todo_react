import React from 'react';

const List = props => {
  return (
    <ul>
      {props.todos.map((todo,i) => ( //受け取ったtodosをmapメソッドにて展開
        <li key={i}>
          {todo}
          <button onClick={() => props.handleRemove(i)}>Delete</button> //引数で削除したいタスクの番号（i）を渡す
        </li>
      ))}
    </ul>
  )
}

export default List;
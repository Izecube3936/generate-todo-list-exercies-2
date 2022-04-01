import React from 'react'


function TodoApp2() {
    
    const numbers = [
      {id: 1, task: 'Syssla 1'},
      {id: 2, task: 'Syssla 2'},
      {id: 3, task: 'Syssla 3'},
      {id: 4, task: 'Syssla 4'},
      {id: 5, task: 'Syssla 5'}
    ];

    const listItems = numbers.map((number) =>
      <li>{number}</li>
      
    );
   
    return (
      <div> 
        <ul>{listItems}</ul>
        
      </div>
      
    );
  }
  
export default TodoApp2
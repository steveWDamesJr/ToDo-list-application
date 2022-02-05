const update = (todo)=>{
    todo.forEach((item, index) => {
    item.index = index + 1;
  });

  return todo;
};

export default update;
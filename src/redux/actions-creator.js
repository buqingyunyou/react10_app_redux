export const increment = (num) => {
  return {
    type: "INCREMENT",
    data: num,
  };
};

export const decrement = (num) => {
  return {
    type: "DECREMENT",
    data: num,
  };
};

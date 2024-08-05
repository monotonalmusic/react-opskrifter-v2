const Button = ({ count, setCount }) => {
  return <button onClick={() => setCount(count + 1)}>count is {count}</button>;
};

export default Button;

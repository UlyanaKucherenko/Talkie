export const NewMessage = () => {
  const formSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <input type="text" placeholder="Write a message..." />
      <button type="submit">Send</button>
    </form>
  );
};

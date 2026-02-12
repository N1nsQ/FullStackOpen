const Notification = ({ type, message }) => {
  console.log("Type: ", type);
  if (message === null) {
    return null;
  }

  return <div className={type}>{message}</div>;
};

export default Notification;

import Button from "./Button";

function AlertButton({ message }) {
  return (
    <Button
      handler={() => {
        alert(message);
      }}>
      Click me
    </Button>
  );
}

export default AlertButton;

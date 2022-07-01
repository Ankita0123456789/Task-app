import React from "react";
import Button from "react-bootstrap/Button";

type ButtonType = "reset" | "submit" | "button" | undefined;
type Props = {
  name: string;
  type: ButtonType;
  onClick?: any;
  disabled?: boolean;
};

function Buttons({ name, type, onClick, disabled }: Props) {
  return (
    <>
      <div className="pt-2 text-center">
        <Button
          className="px-4"
          type={type}
          onClick={onClick}
          variant="primary"
          disabled={disabled}
        >
          {name}
        </Button>{" "}
      </div>
    </>
  );
}

export default Buttons;

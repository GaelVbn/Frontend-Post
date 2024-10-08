import { useState } from "react";

const InputBox = ({
  disable = false,
  name,
  type,
  id,
  value,
  placeholder,
  icon,
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <div className="relative w-[100%] mb-4">
      <input
        name={name}
        id={id}
        type={
          type == "password" ? (passwordVisible ? "text" : "password") : type
        }
        defaultValue={value}
        placeholder={placeholder}
        disabled={disable}
        className="input-box"
      />

      <i className={"fi " + icon + " input-icon"}></i>

      {type == "password" ? (
        <i
          className={
            "fi fi-rr-eye" +
            (!passwordVisible ? "-crossed" : "") +
            " input-icon left-[auto] right-4 cursor-pointer"
          }
          onClick={() => setPasswordVisible((currentValue) => !currentValue)}
        ></i>
      ) : (
        ""
      )}
    </div>
  );
};

export default InputBox;

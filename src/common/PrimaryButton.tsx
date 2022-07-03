import React from "react";

const PrimaryButton: React.FC<any> = ({
  icon,
  label,
  type,
  className,
  customStyle,
  ...rest
}) => {
  const btnStyle = {
    ...customStyle,
  };

  const createRipple=(event: any)=> {
    const button = event.currentTarget;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  }

  const buttons = document.getElementsByTagName("button");
  for (const button of buttons) {
    button.addEventListener("click", createRipple);
  }

  return (
    <button type={type} style={btnStyle} className={className} {...rest}>
      {icon && icon} {label}
    </button>
  );
};

export default PrimaryButton;

/*
<PrimaryButton
											type="button"
											className="flex-center candidate-mail"
											customStyle={{ backgroundColor: "#FFFFFF" }}
											label="Send Email"
											icon={<MailOutlineIcon sx={{ marginRight: "10px" }} />}
											onClick={() => {
												singleSendEmailHandler();
											}}
										/>
										*/

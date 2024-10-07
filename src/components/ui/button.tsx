import { Link } from "@tanstack/react-router";
import { cn } from "@utils/index";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
  activeOptions?: {
    exact?: boolean;
  };
} & (
  | { as: "link"; to: string; className?: string }
  | {
      as?: "button";
      type?: "button" | "submit" | "reset";
    }
);

function Button({
  children,
  className,
  variant = "primary",
  activeOptions,
  onClick,
  ...props
}: ButtonProps) {
  const baseStyles = "font-semibold rounded-lg transition duration-300 ";
  const variantStyles = {
    primary: `${props.as === "button" ? "bg-accent-ui text-amber-500" : "text-accent-ui"} hover:text-amber-600`,
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline:
      "bg-transparent border border-accent-ui text-accent-ui hover:bg-accent-ui hover:text-accent-dark-ui",
  };

  const combinedClassName = cn(baseStyles, variantStyles[variant], className);

  if (props.as === "link") {
    return (
      <Link
        onClick={onClick}
        activeOptions={activeOptions}
        {...props}
        className={combinedClassName}
        activeProps={{
          className: "text-nav-active font-bold",
        }}
        preload="intent"
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        "py-4 px-8 text-lg font-medium",
        combinedClassName,
        className
      )}
      {...props}
      type={props.type || "button"}
    >
      {children}
    </button>
  );
}

export default Button;

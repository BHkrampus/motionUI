import React from "react";

const variantClasses = {
  h1: "font-normal sm:text-5xl md:text-5xl text-7xl",
  h2: "font-normal sm:text-5xl md:text-5xl text-[157px]",
};

const Text = ({ children, className = "", variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

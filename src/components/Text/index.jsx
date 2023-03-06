import React from "react";

const variantClasses = {
  h1: "font-semibold sm:text-[42px] md:text-[48px] text-[56px]",
  h2: "font-semibold sm:text-[38px] md:text-[44px] text-[48px]",
  h3: "font-semibold sm:text-[20px] md:text-[22px] text-[24px]",
  h4: "text-[20px]",
  h5: "font-normal text-[16px]",
  h6: "text-[15.72px]",
  body1: "text-[15.68px]",
  body2: "text-[14px]",
  body3: "font-normal text-[13.75px]",
  body4: "font-normal text-[13.72px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
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

import { forwardRef } from "react";

type ViewProps<T extends React.ElementType> = {
  as?: T;
} & React.ComponentPropsWithoutRef<T>;

const View = forwardRef<HTMLElement, ViewProps<React.ElementType>>(
  ({ as, ...props }, ref) => {
    const Element = as || "div";
    return <Element ref={ref} {...props} />;
  },
);

View.displayName = "View";

export default View;

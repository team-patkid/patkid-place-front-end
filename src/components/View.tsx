import { forwardRef } from "react";

type ViewProps<T extends React.ElementType> = {
  as?: T;
} & React.ComponentPropsWithoutRef<T>;

const View = forwardRef(
  <T extends React.ElementType = "div">(
    { as, ...props }: ViewProps<T>,
    ref: React.ComponentPropsWithRef<T>["ref"]
  ) => {
    const Element = as || "div";
    return <Element ref={ref} {...props} />;
  }
);

export default View;

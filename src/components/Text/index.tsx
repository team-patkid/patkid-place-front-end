import View from "@components/View";
import { PropsWithChildren } from "react";

type TextProps = {
  as: "p" | "span" | "div";
} & PropsWithChildren;

const Text = ({ as = "p", children }: TextProps) => {
  <View as={as}>{children}</View>;
};

export default Text;

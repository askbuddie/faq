import { MDXProvider } from "@mdx-js/react";

import MDXComponents from "./MDXComponents";

type Props = {
  children: React.ReactNode;
  author?: string;
  authorLink?: string;
  date: string;
};
export default function Question({
  children,
  author,
  authorLink,
  date,
}: Props) {
  return (
    <div>
      <MDXProvider components={MDXComponents}>{children}</MDXProvider>
    </div>
  );
}

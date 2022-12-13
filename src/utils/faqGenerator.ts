import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type FAQProps = {
  title: string;
  date: string;
  link: string;
};

const MDX_EXTENSION = ".mdx";
const POST_DIR = "faqs";
const ROOT_DIR = "./";

const faqGenerator = () => {
  const getFAQs = () => {
    const files = fs.readdirSync(path.join(ROOT_DIR, POST_DIR));

    if (!files.length) {
      return null;
    }

    const mdxFiles = files.filter(
      (file) => path.extname(file) === MDX_EXTENSION
    );

    const faqs = mdxFiles.map((file) => {
      const source = fs.readFileSync(path.join(ROOT_DIR, POST_DIR, file), {
        encoding: "utf-8",
      });

      const { data } = matter(source);

      return {
        ...data,
        link: file.replace(MDX_EXTENSION, ""),
      } as FAQProps;
    });

    return faqs;
  };

  return {
    getFAQs,
  };
};

export default faqGenerator;

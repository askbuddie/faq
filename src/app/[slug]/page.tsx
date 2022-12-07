import Answer from "../../components/Answers";
import Question from "../../components/Question";
import { faqGenerator } from "../../utils/faqGenerator";
import markdownToHtml from "../../utils/markdownToHtml";

type Props = {
  params: { slug: string };
};

export default async function FAQPage({ params }: Props) {
  const { title, date, content } = await fetchFAQ(params.slug);
  console.log({ title, content });
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <Question question={title} />
        <p className="text-lg">{date}</p>
        <div className="mt-6 flex flex-col items-center justify-center w-full">
          <Answer content={content} />
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://github.com/askbuddie"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ask Buddie Open Source
        </a>
      </footer>
    </div>
  );
}

export async function generateStaticParams() {
  const { getFAQs } = faqGenerator();
  const faqs = getFAQs();
  return faqs!.map((faq) => ({
    slug: faq.link,
  }));
}

async function fetchFAQ(slug: string) {
  const { getFAQs } = faqGenerator();
  const faqs = getFAQs();
  const faq = faqs!.find((faq) => faq.link.endsWith(slug));
  faq!.content = await markdownToHtml(faq!.content);
  return faq!;
}

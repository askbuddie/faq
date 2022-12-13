import faqGenerator, { FAQProps } from "../utils/faqGenerator";
import formatDate from "../utils/formatDate";

type Props = {
  faqs: FAQProps[];
};

const FaqList = ({ faqs }: Props) => {
  return (
    <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
      <ul>
        {faqs?.map(({ title, date, link }) => {
          const { monthAndDay, year } = formatDate(date);
          return (
            <li className="flex items-center mb-4" key={link}>
              <span className="mr-4">
                <p className="font-bold">{monthAndDay}</p>
                <p className="text-xs">{year}</p>
              </span>
              <a href="#">
                <h2 className="text-2xl font-bold">{title}</h2>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FaqList;

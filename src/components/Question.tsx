type Props = {
  question: string;
};

export default function Question({ question }: Props) {
  return <h2 className="text-2xl font-bold">{question}</h2>;
}

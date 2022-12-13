type Props = {
  content: string;
};

export default function Answer({ content }: Props) {
  return (
    <p className="text-lg" dangerouslySetInnerHTML={{ __html: content }}></p>
  );
}

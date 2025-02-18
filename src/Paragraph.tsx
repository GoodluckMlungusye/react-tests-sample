interface Paragraph {
  id: number;
  title: string;
  content: string;
}

const paragraphs: Paragraph[] = [
  {
    id: 1,
    title: "Introduction",
    content: "This is the introduction paragraph.",
  },
  {
    id: 2,
    title: "Background",
    content: "This paragraph provides background information.",
  },
  {
    id: 3,
    title: "Methodology",
    content: "Details about the methodology used are explained here.",
  },
  {
    id: 4,
    title: "Results",
    content: "This section presents the results of the study.",
  },
  {
    id: 5,
    title: "Conclusion",
    content: "Final thoughts and conclusions are shared here.",
  },
];

export const ParagraphList = ({
  onSelect,
}: {
  onSelect: (content: string) => void;
}) => {
  return (
    <div>
      <h2>Select a Paragraph</h2>
      <ul>
        {paragraphs.map((para) => (
          <li key={para.id}>
            <button onClick={() => onSelect(para.content)}>{para.title}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

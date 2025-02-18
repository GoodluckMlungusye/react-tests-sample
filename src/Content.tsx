export const ContentArea = ({ content }: { content: string }) => {
    return (
      <div>
        <h2>Content Area</h2>
        <p>{content || "Select a paragraph to read its content."}</p>
      </div>
    );
  };
  
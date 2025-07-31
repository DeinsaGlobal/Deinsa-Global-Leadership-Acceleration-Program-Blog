export default function Paragraph({ children }: { children: React.ReactNode }) {
  //Solo mostrar 15 palabras
  const textContent = String(children);
  const words = textContent.split(/\s+/).filter((word) => word.length > 0);
  const maxWords = 15;
  const isTruncated = words.length > maxWords;
  const displayedWords = words.slice(0, maxWords);
  let displayedText = displayedWords.join(' ');

  if (isTruncated) {
    displayedText += '...';
  }

  return (
    <p className="mb-4 flex-1 text-[#939393] dark:text-[#939393]">
      {displayedText}
    </p>
  );
}

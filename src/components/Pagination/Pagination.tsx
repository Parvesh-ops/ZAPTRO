
interface PaginationProps {
  page: number;
  dynamicPage: number;
  pageHandler: (page: number) => void;
}

const getPages = (current: number, total: number): (number | string)[] => {
  const pages: (number | string)[] = [];
  if (total <= 5) {
    for (let i = 1; i <= total; i++) pages.push(i);
  } else {
    if (current <= 3) pages.push(1, 2, 3, "...", total);
    else if (current >= total - 2)
      pages.push(1, "...", total - 2, total - 1, total);
    else pages.push(1, "...", current - 1, current, current + 1, "...", total);
  }
  return pages;
};

const Pagination = ({ page, dynamicPage, pageHandler }: PaginationProps) => {
  const pages = getPages(page, dynamicPage);

  return (
    <div className="mt-6 sm:mt-10 flex flex-wrap justify-center items-center gap-2 sm:gap-3">
      {/* Prev Button */}
      <button
        disabled={page === 1}
        onClick={() => pageHandler(page - 1)}
        className={`px-2 sm:px-3 py-1 sm:py-2 rounded-md text-white text-sm sm:text-base ${
          page === 1
            ? "bg-red-400 cursor-not-allowed"
            : "bg-red-500 hover:bg-red-600 cursor-pointer transition-colors"
        }`}
      >
        Prev
      </button>

      {/* Page Numbers */}
      {pages.map((item, index) => (
        <span
          key={index}
          onClick={() => typeof item === "number" && pageHandler(item)}
          className={`px-2 sm:px-3 py-1 sm:py-2 rounded-md text-sm sm:text-base ${
            item === page
              ? "font-bold text-red-600 underline bg-white/10"
              : item === "..."
              ? "text-gray-500 cursor-default"
              : "text-black hover:text-red-500 cursor-pointer transition-colors"
          }`}
        >
          {item}
        </span>
      ))}

      {/* Next Button */}
      <button
        disabled={page === dynamicPage}
        onClick={() => pageHandler(page + 1)}
        className={`px-2 sm:px-3 py-1 sm:py-2 rounded-md text-white text-sm sm:text-base ${
          page === dynamicPage
            ? "bg-red-400 cursor-not-allowed"
            : "bg-red-500 hover:bg-red-600 cursor-pointer transition-colors"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
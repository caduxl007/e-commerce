type UsePaginationProps = {
  totalPages: number;
  pageSelected: number;
  changePage: (page: number) => void;
};

export function usePagination({
  totalPages = 1,
  pageSelected = 1,
  changePage,
}: UsePaginationProps) {
  function onNext() {
    const nextPage = pageSelected + 1;
    const page = nextPage > totalPages ? pageSelected : nextPage;

    changePage(page);
  }

  function onPrevious() {
    const previewPage = pageSelected - 1;
    const page = previewPage < 1 ? pageSelected : previewPage;

    changePage(page);
  }

  return {
    onNext,
    onPrevious
  };
}

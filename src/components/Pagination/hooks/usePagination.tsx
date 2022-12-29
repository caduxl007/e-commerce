import { useMemo } from 'react';

type UsePaginationProps = {
  totalCount: number;
  pageSelected: number;
  changePage: (page: number) => void;
};

export function usePagination({
  totalCount = 1,
  pageSelected = 1,
  changePage,
}: UsePaginationProps) {
  const pages = useMemo(() => {
    const limit = 10;

    return Math.ceil(totalCount / limit);
  }, [totalCount]);

  function onNext() {
    const nextPage = pageSelected + 1;
    const page = nextPage > pages ? pageSelected : nextPage;

    changePage(page);
  }

  function onPrevious() {
    const previewPage = pageSelected - 1;
    const page = previewPage < 1 ? pageSelected : previewPage;

    changePage(page);
  }

  return {
    onNext,
    onPrevious,
    pages,
  };
}

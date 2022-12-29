import { ButtonPaginate } from './ButtonPaginate';
import { usePagination } from './hooks/usePagination';

export interface PaginationProps {
  totalCount: number;
  pageSelected: number;
  changePage: (page: number) => void;
}

export function Pagination({
  totalCount,
  pageSelected,
  changePage,
}: PaginationProps) {
  const { onNext, onPrevious, pages } = usePagination({
    totalCount,
    changePage,
    pageSelected,
  });

  return (
    <div className="flex gap-1">
      {new Array(pages).fill('').map((_, index) => (
        <ButtonPaginate
          key={index + 1}
          onClick={() => changePage(index + 1)}
          isSelect={index + 1 === pageSelected}
        >
          {index + 1}
        </ButtonPaginate>
      ))}

      <ButtonPaginate onClick={onPrevious}>{'<'}</ButtonPaginate>
      <ButtonPaginate onClick={onNext}>{'>'}</ButtonPaginate>
    </div>
  );
}

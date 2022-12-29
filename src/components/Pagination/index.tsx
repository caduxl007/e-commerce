import { ButtonPaginate } from './ButtonPaginate';
import { usePagination } from './hooks/usePagination';

export interface PaginationProps {
  totalPages: number;
  pageSelected: number;
  changePage: (page: number) => void;
}

export function Pagination({
  totalPages,
  pageSelected,
  changePage,
}: PaginationProps) {
  const { onNext, onPrevious } = usePagination({
    totalPages,
    changePage,
    pageSelected,
  });

  
  return (
    <div className="flex gap-1">
      {new Array(totalPages).fill('').map((_, index) => (
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

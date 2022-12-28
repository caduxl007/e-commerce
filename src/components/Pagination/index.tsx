import { ButtonPaginate } from './ButtonPaginate';

export interface PaginationProps {
  totalPages: number;
  pageSelected: number;
  changePage: (page: number) => void;
}

export function Pagination({
  totalPages = 1,
  pageSelected = 1,
  changePage,
}: PaginationProps) {

  function onNext() {
    changePage(pageSelected + 1);
  }

  function onPrevios() {
    changePage(pageSelected + 1);
  }

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

      <ButtonPaginate onClick={onPrevios}>{'<'}</ButtonPaginate>
      <ButtonPaginate onClick={onNext}>{'>'}</ButtonPaginate>
    </div>
  );
}

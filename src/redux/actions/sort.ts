export const SORTING = 'SORTING'

export function updateSort(data: string): UpdateSortType {
  return {
    type: SORTING,
    payload: data,
  }
}

type UpdateSortType = {
  type: typeof SORTING
  payload: string
}

export type SortAction = ReturnType<typeof updateSort>

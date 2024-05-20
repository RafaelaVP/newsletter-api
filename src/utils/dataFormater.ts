import { parse } from 'date-fns';

export function transformDate(date: string): string {
  const parsedDate = parse(date, 'dd/MM/yyyy', new Date());
  return parsedDate.toISOString();
}
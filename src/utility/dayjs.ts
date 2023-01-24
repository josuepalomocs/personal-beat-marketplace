import dayjs from "dayjs";

export function formatDate(date: Date | string, format: string) {
  return dayjs(date).format(format);
}

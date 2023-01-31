export function convertIdToFormattedBitString(id: number) {
  const bitString = id
    .toString(2)
    .padStart(16, "0")
    .match(/.{1,4}/g)
    ?.join(" ");

  return bitString;
}

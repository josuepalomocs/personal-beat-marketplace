export function formatAudioLength(seconds: number) {
  if (seconds < 60) {
    return seconds;
  }
  const minutes = Math.floor(seconds / 60);
  const secondsRemainder = seconds % 60;

  return `${minutes < 10 ? `0${minutes}` : minutes}:${
    secondsRemainder < 10 ? `0${secondsRemainder}` : secondsRemainder
  }`;
}

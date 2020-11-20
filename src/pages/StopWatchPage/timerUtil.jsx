// https://stackoverrun.com/de/q/10737568#38967294
export const convertSecondsToDuration = (seconds) => {
  seconds = Number(seconds);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor(seconds % 3600 / 60);
  const remainingSeconds = Math.floor(seconds % 3600 % 60);
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
}

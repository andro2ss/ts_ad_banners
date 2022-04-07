export function timeToEnd(currentTime: Date, endTime: Date) {
  const toDate = endTime.getTime();
  const now = currentTime.getTime();

  const diff = toDate - now;

  const day = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  let retDay: string = "";
  if (day > 0) {
    retDay = day + "d ";
  }

  let retHours: string = "";
  if (hours > 0) {
    retHours = hours + "g ";
  }
  let retMinutes: string = minutes + "m";

  if (minutes < 0) {
    return "Koniec czasu";
  }
  return "Do końca pozostało: " + retDay + retHours + retMinutes;
}

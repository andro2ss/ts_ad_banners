export function setEndDate() {
  const endTime: Date = new Date();
  endTime.setDate(endTime.getDate() + 7);
  return endTime;
}

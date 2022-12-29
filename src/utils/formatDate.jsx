export function formatDate() {
  const newDate = new Date();
  let formattedDate = `${newDate.getFullYear()}-`;
  formattedDate += `${`0${newDate.getMonth() + 1}`.slice(-2)}-`;
  formattedDate += `${`0${newDate.getDate()}`.slice(-2)}`;
  return formattedDate;
}

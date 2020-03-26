export function getMonthString(month) {
  switch (month) {
    case 1:
      return 'Janeiro';
    case 2:
      return 'Fevereiro';
    case 3:
      return 'Março';
    case 4:
      return 'Abril';
    case 5:
      return 'Maio';
    case 6:
      return 'Junho';
    case 7:
      return 'Julho';
    case 8:
      return 'Agosto';
    case 9:
      return 'Setembro';
    case 10:
      return 'Outubro';
    case 11:
      return 'Novembro';
    case 12:
      return 'Dezembro';
    default:
      return '';
  }
}

export function getDayOfWeek(day = new Date().getDay()) {
  switch (day) {
    case 0:
      return 'Domingo';
    case 1:
      return 'Segunda';
    case 2:
      return 'Terça';
    case 3:
      return 'Quarta';
    case 4:
      return 'Quinta';
    case 5:
      return 'Sexta';
    case 6:
      return 'Sábado';
    default:
      return '';
  }
}

export function formatDate(date = new Date()) {
  const dayString = getDayOfWeek();
  const day = date.getDate();
  const month = getMonthString(date.getDay());

  return `${dayString.substr(0, 3)}, ${day} ${month}`;
}

export function formatTemperature(temp) {
  return String(temp).substr(0, 2);
}

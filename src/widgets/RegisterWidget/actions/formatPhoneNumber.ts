// Функция для форматирования номера телефона
const formatPhoneNumber = (value: string) => {
  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;

  if (phoneNumberLength < 2) return phoneNumber;
  if (phoneNumberLength < 5) return `+7 (${phoneNumber.slice(1, 4)}`;
  if (phoneNumberLength < 8)
    return `+7 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)}`;
  if (phoneNumberLength < 10)
    return `+7 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(
      4,
      7
    )}-${phoneNumber.slice(7, 9)}`;

  return `+7 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(
    4,
    7
  )}-${phoneNumber.slice(7, 9)}-${phoneNumber.slice(9, 11)}`;
};

export default formatPhoneNumber;

const fields = {
  gender: {
    label: 'Пол',
    operators: [
      { value: 'equals', label: '===' },
      { value: 'notEquals', label: '!==' },
    ],
  },
  birthDate: {
    label: 'Дата рождения',
    operators: [
      { value: 'equals', label: '===' },
      { value: 'notEquals', label: '!==' },
      { value: 'isBefore', label: '<' },
      { value: 'isAfter', label: '>' },
    ],
  },
  channel: {
    label: 'Канал',
    operators: [
      { value: 'equals', label: '===' },
      { value: 'notEquals', label: '!==' },
    ],
  },
};

export default fields;

export const state = {
  startAmount: 1500.0,
  startAmountUpdatedOn: "3/2/22",
  income: [],
  bills: [
    {
      name: "Car Payment",
      isIncome: false,
      amount: 500.0,
      startDate: "3/2/22",
      frequency: "monthly",
    },
    {
      name: "House Payment",
      isIncome: false,
      amount: 700.0,
      startDate: "3/2/22",
      frequency: "monthly",
    },
  ],
  timeline: [
    {
      id: "1",
      name: "Car Payment",
      isIncome: false,
      amount: "$500.00",
      date: "3/2/22",
      total: "$1000.00",
    },
    {
      id: "2",
      name: "House Payment",
      isIncome: false,
      amount: "$700.00",
      date: "3/2/22",
      total: "$300.00",
    },
  ],
};

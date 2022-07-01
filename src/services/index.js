export const addExpense = async (expense) => {
  try {
    const response = await fetch(
      "https://expenses-project-4c352-default-rtdb.firebaseio.com/expenses.json",
      {
        method: "POST",
        body: JSON.stringify(expense),
      }
    );
    return await response.json();
      } catch (err) {
    console.log(err);
    throw new Error("Firebase connection failed");
  }
};

export const getAllExpenses = async () => {
  try {
    const response = await fetch(
      "https://expenses-project-4c352-default-rtdb.firebaseio.com/expenses.json"
    );

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    return await response.json();
  } catch (e) {
    throw new Error("Failed to get expenses");
  }
};

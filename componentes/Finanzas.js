class ExpenseManager {
    constructor() {
        this.expenses = [];

    }

    addExpense(title, amount, category) {
        if (!title || typeof amount !== 'number' || amount <= 0 || !category){
            throw new Error('Datos de gasto inválidos. Verifique el título, monto y categoría.');
        }

        const newExpense = {
            id: Date.now().toString(),
            title: title.trim(),
            amount: Number(amount.toFixed(2)),
            category: category.trim().toLowerCase(),
            date: new Date()
        };

        this.expenses.push(newExpense);
        return newExpense;
    }

    getAllExpenses() {
        return this.expenses;
    }

    calculateTotal(category = null) {
        const targetList = category ? this.getExpensesByCategory(category) : this.expenses;

        return targetList.reduce((sum, expense) => sum + expense.amount, 0);
    }
}

export default ExpenseManager;
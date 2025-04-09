import { useContext } from "react";
import { TransactionsContext } from "../contexts/TransactionContext";

export function useSummary() {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce(
    (acc, transaction) => {
      switch (transaction.type) {
        case "income":
          acc.income += transaction.amount;
          acc.balance += transaction.amount;
          break;
        case "outcome":
          acc.outcome += transaction.amount;
          acc.balance -= transaction.amount;
          break;
        default:
          console.error("An error happened while reducing transaction values.");
      }

      return acc;
    },
    {
      income: 0,
      outcome: 0,
      balance: 0,
    }
  );

  return summary;
}

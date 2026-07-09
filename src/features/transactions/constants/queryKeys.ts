export const transactionsQueryKeys = {
  all: () => ["transaction"],
  list: () => ["transaction", "list"],
  report: () => ["transaction", "report"],
  total: () => ["transaction", "report", "total"],
};

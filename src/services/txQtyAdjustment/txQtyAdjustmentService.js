import mockTransactions from "../../mock/txQtyAdjustment";

export async function searchTransactions(txId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = mockTransactions.filter((item) =>
        item.txId.toLowerCase().includes(txId.toLowerCase())
      );

      resolve(result);
    }, 500);
  });
}
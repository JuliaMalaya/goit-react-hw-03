import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
    return (
<table className={styles.table}>
  <thead>
    <tr>
        <th className={styles.tableHeaderTitle}>Type</th>
        <th className={styles.tableHeaderTitle}>Amount</th>
        <th className={styles.tableHeaderTitle}>Currency</th>
    </tr>
  </thead>

  <tbody>
{items.map(({ id, type, amount, currency }) => 
                <tr className={styles.tr} key={id}>
                    <td className={styles.tableСellСontent}>{type}</td>
                    <td className={styles.tableСellСontent}>{amount}</td>
                    <td className={styles.tableСellСontent}>{currency}</td>
                </tr>
                )}
  </tbody>
        </table>
    );
};
export default TransactionHistory;
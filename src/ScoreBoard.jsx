

const ScoreBoard = () => {
  return (
    <section className="score my-3 blockquote">
      <table className="border border-3 border-secondary"> 
        <thead>
          <th>white</th>
          <th>black</th>
        </thead>
        <tr>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>%</td>
          <td>%</td>
        </tr>
      </table>
    </section>
  );
};
export default ScoreBoard;

export default function GameLimit() {
  return (
    <div id="GameLimit">
      <section className="mt-4">
        <h3>Super Auto-Roulette</h3>
        <table>
          <thead>
            <tr>
              <th>Bet Type</th>
              <th>Bet Limits</th>
              <th>Payouts</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>STRAIGHT UP</td>
              <td>$0.1-500 </td>
              <td>35:1</td>
            </tr>

            <tr>
              <td>SPLIT</td>
              <td>$0.1-1,000 </td>
              <td>17:1</td>
            </tr>
            <tr>
              <td>STREET</td>
              <td>$0.1-1,500</td>
              <td>11:1</td>
            </tr>

            <tr>
              <td>CORNER</td>
              <td>$0.1-2,000 </td>
              <td>8:1</td>
            </tr>

            <tr>
              <td>SIX LINE</td>
              <td>$0.1-3,000</td>
              <td>5:1</td>
            </tr>

            <tr>
              <td>COLUMN</td>
              <td>$0.1-6,000 </td>
              <td>2:1</td>
            </tr>

            <tr>
              <td>DOZEN</td>
              <td>$0.1-6,000 </td>
              <td>2:1</td>
            </tr>

            <tr>
              <td>RED / BLACK</td>
              <td>$0.1-10,000</td>
              <td>1:1</td>
            </tr>

            <tr>
              <td>ODDS / EVEN</td>
              <td>$0.1-10,000</td>
              <td>1:1</td>
            </tr>
            <tr>
              <td>1-18 / 19-36</td>
              <td>$0.1-10,000</td>
              <td>1:1</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default function GameRuleInfo() {
  return (
    <div id="GameRuleInfo">
      <section>
        <h3>Game Rules</h3>
        <p>
          The goal in Roulette is to correctly guess where the ball will land by placing wagers on specific numbers or
          groups of numbers. The wheel features numbers from 0 to 36. Betting closes before the ball is released. Once
          it settles in a pocket, the winning number is announced and successful bets are paid.
        </p>

        <p>
          Players can make multiple bets per round using the inner and outer betting areas. Winning occurs when your bet
          covers the final resting place of the ball, with payouts depending on the type of bet placed.
        </p>
      </section>

      <section>
        <h3>Bet Types</h3>
        <p>
          Roulette offers various betting options, each with its own payout rate. These are divided into Inside Bets and
          Outside Bets.
        </p>
        <p>Inside Bets are placed on the numbered grid and include:</p>
        <ul>
          <li>Straight Up (single number),</li>
          <li>Split (two adjacent numbers),</li>
          <li>Street (three numbers in a row),</li>
          <li>Corner (four adjoining numbers),</li>
          <li>Line (six numbers across two rows).</li>
        </ul>
        <p>Outside Bets are placed around the main grid and cover larger groups of numbers.</p>

        <p>These include:</p>
        <ul>
          <li>Red/Black,</li>
          <li>Even/Odd,</li>
          <li>Column and Dozen (each covering 12 numbers), </li>
          <li>and 1-18/19-36 (each covering 18 numbers).</li>
        </ul>
        <p>Note that zero is not included in Outside Bets.</p>

        <p>
          The Straight Up bet offers the highest payout, while Outside Bets have lower payouts but better odds of
          winning.
        </p>
      </section>

      <section>
        <h3>Racetrack Bets</h3>
        <p>
          Neighbor bets are special wagers in Roulette that cover a specific number and its adjacent numbers on the
          wheel. These bets are placed using the racetrack, an oval-shaped betting area that represents the wheel&apos;s
          layout. To access the racetrack, click the RACETRACK button. This feature allows for more intuitive placement
          of complex bets based on wheel positions rather than the standard table layout.
        </p>
      </section>

      <section>
        <h3>Tiers du Cylindre</h3>
        <p>
          This bet covers 12 numbers on the opposite side of the wheel from zero. It requires 6 chips, placed as
          follows:
        </p>
        <ul>
          <li>5/8 split</li>
          <li>10/11 split</li>
          <li>13/16 split</li>
          <li>23/24 split</li>
          <li>33/36 split</li>
          <li>27/30 split</li>
        </ul>
        <p>This bet effectively covers about one-third of the wheel, excluding the zero section.</p>
      </section>

      <section>
        <h3>Orphelins a Cheval</h3>
        <p>
          This bet covers 8 numbers in two separate sections of the wheel not included in other announced bets. It uses
          5 chips:
        </p>
        <ul>
          <li>1 (straight up)</li>
          <li>6/9 split</li>
          <li>14/17 split</li>
          <li>17/20 split</li>
          <li>31/34 split</li>
        </ul>
        <p>This bet covers the &quot;orphaned&quot; numbers not included in Voisins or Tiers bets.</p>
      </section>

      <section>
        <h3>Voisins du Zero</h3>
        <p>Covering 17 numbers around zero, this bet uses 9 chips:</p>

        <ul>
          <li>2 chips on 0/2/3 street</li>
          <li>4/7 split</li>
          <li>12/15 split</li>
          <li>18/21 split</li>
          <li>19/22 split</li>
          <li>2 chips on 25/26/28/29 corner</li>
          <li>32/35 split</li>
        </ul>

        <p>This bet covers nearly half the wheel, including zero and its neighbors.</p>
      </section>

      <section>
        <h3>Jeu Zero</h3>
        <p>This bet focuses on 7 numbers close to zero, using 4 chips:</p>
      </section>

      <ul>
        <li>0/3 split</li>
        <li>12/15 split</li>
        <li>26 (straight up)</li>
        <li>32/35 split</li>
      </ul>
      <p>It&apos;s a smaller version of Voisins du Zero, concentrating on the immediate area around zero.</p>

      <p>
        To place a neighbor bet, select a number on the racetrack. This automatically bets on the chosen number and its
        immediate neighbors on both sides. Use the {'+'} and {'-'} buttons to adjust the number of neighbors included,
        allowing for customized coverage of wheel sections.
      </p>

      <section>
        <h3>Special Bets</h3>
      </section>
      <section>
        <h3>Favourite</h3>
      </section>

      <section>
        <h3>Payouts</h3>
        <p>Roulette winnings are determined by the type of bet placed on the table.</p>
        <table>
          <thead>
            <tr>
              <th>Bet Type</th>
              <th>Payout</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Straight Up</td>
              <td>35:1</td>
            </tr>
            <tr>
              <td>Split</td>
              <td>17:1</td>
            </tr>
            <tr>
              <td>Street</td>
              <td>11:1</td>
            </tr>
            <tr>
              <td>Corner</td>
              <td>8:1</td>
            </tr>
            <tr>
              <td>Line</td>
              <td>5:1</td>
            </tr>
            <tr>
              <td>Column</td>
              <td>2:1</td>
            </tr>
            <tr>
              <td>Dozen</td>
              <td>2:1</td>
            </tr>
            <tr>
              <td>Red/Black</td>
              <td>1:1</td>
            </tr>
            <tr>
              <td>Even/Odd</td>
              <td>1:1</td>
            </tr>
            <tr>
              <td>1-18/19-36</td>
              <td>1:1</td>
            </tr>
          </tbody>
        </table>
        <p>Any malfunction or technical issue voids all bets and results.</p>
      </section>

      <section>
        <h3>Return To Player</h3>
        <p>The theoretical Return to Player (RTP) for this Roulette game is 97.30%.</p>
      </section>

      <section>
        <h3>Winning Numbers</h3>
        <p>
          The Winning Numbers panel displays recent game outcomes. The leftmost number represents the most recent
          round&rsquo;s result
        </p>
      </section>

      <section>
        <h3>Statistics</h3>
        <p>
          The Statistics feature displays outcomes from up to 500 recent game rounds. Access it by clicking the
          STATISTICS button and use the slider to adjust the number of past results shown. Hovering over areas in the
          statistics diagram highlights corresponding bet positions on the table. To place a bet based on these
          statistics, simply click or tap the highlighted area.
        </p>
      </section>

      <section>
        <h3>Placing bets</h3>
        <p>
          The Bet Limits panel displays the minimum and maximum bet amounts allowed at the table. These limits may
          change periodically, so it&apos;s advisable to check your current limits regularly. To participate in the
          game, ensure you have sufficient funds in your account to cover your intended bets. Your current balance is
          visible on the screen. The game status is indicated by a traffic light system: Green signals betting time,
          Yellow warns that betting time is ending soon, and Red indicates that betting time has expired and no more
          bets are accepted.
        </p>
        <p>
          To place a bet, first select your desired chip value from the Chip Display. Only chip denominations that your
          current balance can cover will be available. Once you&apos;ve chosen a chip, click or tap on the appropriate
          betting area on the table. Each click increases your bet by the selected chip value, up to the maximum limit
          for that bet type. If you reach the maximum limit, you&apos;ll receive a notification, and no additional funds
          will be accepted for that bet.
        </p>
        <p>
          The Double (2x) button becomes available after you&apos;ve placed a bet. Clicking this button doubles all your
          current bets, up to the maximum limit. Ensure you have sufficient funds to cover doubling all your bets before
          using this feature. The Repeat button allows you to replicate all bets from the previous game round. This
          option is only available before placing your first chip in the current round.If you need to adjust your bets,
          the Undo button removes the last bet you placed. You can click this button repeatedly to remove bets one by
          one, in reverse order of placement. To clear all your bets at once, simply hold down the Undo button. For
          added flexibility, you can use drag-and-drop functionality to place and move bets. This feature allows you to
          drag chips of any denomination to and from any betting area on the table, providing a more interactive betting
          experience.
        </p>
        <p>
          The Total Bet indicator shows the cumulative amount of all bets placed in the current round. If you attempt to
          place a bet that exceeds your total balance, the game will notify you to adjust your bet. In cases where you
          select a chip larger than your remaining balance, the game will automatically adjust the bet to the maximum
          allowable amount within your current balance.
        </p>
        <p>
          Remember, it&apos;s crucial not to minimize your browser or open other tabs while betting time remains and you
          have active bets on the table. Such actions may be interpreted as leaving the game, resulting in your bets
          being declined for that particular game round.
        </p>
      </section>

      <section>
        <h3>Autoplay</h3>
      </section>

      <section>
        <h3>Game History</h3>
        <p>
          The Game History feature allows you to review your past gameplay. Access it by clicking the HISTORY button in
          menu. Here, you can view details of your previous game rounds, including outcomes, bet amounts, and dates
          played. The most recent rounds appear at the top of the list.
        </p>
      </section>

      <section>
        <h3>Chat</h3>
        <p>
          The Chat feature allows communication between players and the game presenter. To use it, enter your message in
          the chat field and press Enter or the arrow button to send.
        </p>
        <p>
          Players are expected to maintain respectful communication. Abusive behavior, offensive language, or
          inappropriate content may result in warnings or chat privileges being revoked. If you disagree with any
          moderation decision, contact Casino support for assistance.
        </p>
        <p>Note that chat functionality is only available when you have an active bet placed in the game.</p>
      </section>

      <section>
        <h3>Live Support</h3>
      </section>

      <section>
        <h3>Disconnection policy</h3>
        <p>
          If you experience a disconnection during an active game round, any bets you&apos;ve already placed will remain
          valid and be settled according to the game outcome. Upon reconnecting, you can check the results of your bets
          by accessing the History window, which will display the outcomes of any rounds played during your absence.
        </p>
      </section>

      <section>
        <h3>Error Handling</h3>
        <p>
          In the event of a game, system, or procedural error, the current round will be temporarily suspended. Players
          will be notified via a pop-up message or chat that the issue is under investigation. If the error can be
          promptly resolved, the game will resume normally. However, if an immediate solution isn&apos;t possible, the
          round will be cancelled and all initial bets refunded to participants.
        </p>
        <p>
          Additionally, for a round to be considered valid, the ball must complete at least three full revolutions on
          the wheel. If it fails to do so, the round will be declared invalid.
        </p>
      </section>

      <section>
        <h3>Lobby</h3>
      </section>
      <section>
        <h3>hotKeys</h3>
      </section>
    </div>
  )
}

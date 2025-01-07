document.getElementById('predictForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const player1 = document.getElementById('player1').value;
    const player2 = document.getElementById('player2').value;
    const surface = document.getElementById('surface').value;

    // Simulated API response (for demo purposes)
    const data = {
        player1_win_probability: Math.random() * 100,
        player2_win_probability: Math.random() * 100,
    };

    document.getElementById('result').innerHTML = `
        <p>${player1} Win Probability: ${data.player1_win_probability.toFixed(2)}%</p>
        <p>${player2} Win Probability: ${data.player2_win_probability.toFixed(2)}%</p>
    `;
});

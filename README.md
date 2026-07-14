⚾ MLB Win Predictor

A web application that predicts MLB game outcomes based on team statistics and provides detailed team performance metrics.

## Features

- **Team Selection Dropdowns**: Select two different MLB teams to compare
- **Aqua Predict Button**: Click to generate predictions
- **Circular Arc Visualization**: Win probabilities displayed on an elegant SVG arc chart
- **Team Statistics Display**: View comprehensive stats for both teams including:
  - Wins & Losses
  - Win Percentage
  - Runs per Game
  - ERA (Earned Run Average)
  - Current Win/Loss Streak

## How to Use

1. Select a Home Team from the first dropdown
2. Select an Away Team from the second dropdown
3. Click the **Predict** button
4. View the win probability on the circular arc
5. Check detailed statistics for both teams below

## Algorithm

The prediction is based on a weighted calculation of:
- **Win Percentage** (40% weight)
- **Offensive Performance** - Runs Per Game (35% weight)
- **Defensive Performance** - ERA (25% weight)

The model calculates each team's strength score and determines the probability based on the ratio of their strength values.

## Files

- `index.html` - Main HTML structure
- `styles.css` - Styling and responsive design
- `script.js` - Core functionality and prediction logic
- `data.js` - MLB teams database with statistics

## Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, Gradients)
- Vanilla JavaScript (ES6+)
- SVG for arc visualization

## Responsive Design

The application is fully responsive and works on:
- Desktop screens
- Tablets
- Mobile devices

## Future Enhancements

- Integration with real-time MLB API data
- Historical matchup statistics
- More sophisticated prediction models
- Game schedule integration
- Bet odds comparison

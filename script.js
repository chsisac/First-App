// Populate dropdowns with teams
function populateTeamDropdowns() {
    const homeSelect = document.getElementById('homeTeam');
    const awaySelect = document.getElementById('awayTeam');

    teams.forEach(team => {
        const option1 = document.createElement('option');
        option1.value = team.name;
        option1.textContent = team.name;
        homeSelect.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = team.name;
        option2.textContent = team.name;
        awaySelect.appendChild(option2);
    });
}

// Calculate team strength score
function calculateStrength(team) {
    const winPctWeight = 0.40;
    const runsWeight = 0.35;
    const eraWeight = 0.25;

    // Normalize values
    const winPctScore = team.winPercentage * 100;
    const runsScore = team.runsPerGame * 10;
    const eraScore = (3.5 - team.era) * 10; // Inverse for ERA (lower is better)

    return (winPctScore * winPctWeight) + (runsScore * runsWeight) + (eraScore * eraWeight);
}

// Calculate win probability
function calculateWinProbability(homeStrength, awayStrength) {
    const totalStrength = homeStrength + awayStrength;
    return (homeStrength / totalStrength) * 100;
}

// Draw SVG arc chart
function drawArcChart(homeWinPct, awayWinPct, homeTeamName, awayTeamName) {
    const svg = document.getElementById('arcChart');
    svg.innerHTML = ''; // Clear previous chart

    const width = 400;
    const height = 300;
    const centerX = width / 2;
    const centerY = height / 1.5;
    const radius = 80;
    const arcWidth = 20;

    // Background circle
    const bgCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    bgCircle.setAttribute('cx', centerX);
    bgCircle.setAttribute('cy', centerY);
    bgCircle.setAttribute('r', radius);
    bgCircle.setAttribute('fill', 'none');
    bgCircle.setAttribute('stroke', '#e0e0e0');
    bgCircle.setAttribute('stroke-width', arcWidth);
    svg.appendChild(bgCircle);

    // Home team arc (left side)
    const homeAngle = (homeWinPct / 100) * 180;
    const homeStart = 180;
    const homeEnd = homeStart - homeAngle;
    const homeArc = createArc(centerX, centerY, radius, homeStart, homeEnd);
    const homeArcPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    homeArcPath.setAttribute('d', homeArc);
    homeArcPath.setAttribute('fill', 'none');
    homeArcPath.setAttribute('stroke', '#667eea');
    homeArcPath.setAttribute('stroke-width', arcWidth);
    homeArcPath.setAttribute('stroke-linecap', 'round');
    svg.appendChild(homeArcPath);

    // Away team arc (right side)
    const awayStart = 0;
    const awayEnd = (awayWinPct / 100) * 180;
    const awayArc = createArc(centerX, centerY, radius, awayStart, awayEnd);
    const awayArcPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    awayArcPath.setAttribute('d', awayArc);
    awayArcPath.setAttribute('fill', 'none');
    awayArcPath.setAttribute('stroke', '#764ba2');
    awayArcPath.setAttribute('stroke-width', arcWidth);
    awayArcPath.setAttribute('stroke-linecap', 'round');
    svg.appendChild(awayArcPath);

    // Add percentage text
    const homeText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    homeText.setAttribute('x', centerX - 50);
    homeText.setAttribute('y', centerY - 30);
    homeText.setAttribute('font-size', '18');
    homeText.setAttribute('font-weight', '600');
    homeText.setAttribute('fill', '#667eea');
    homeText.setAttribute('text-anchor', 'middle');
    homeText.textContent = homeWinPct.toFixed(1) + '%';
    svg.appendChild(homeText);

    const awayText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    awayText.setAttribute('x', centerX + 50);
    awayText.setAttribute('y', centerY - 30);
    awayText.setAttribute('font-size', '18');
    awayText.setAttribute('font-weight', '600');
    awayText.setAttribute('fill', '#764ba2');
    awayText.setAttribute('text-anchor', 'middle');
    awayText.textContent = awayWinPct.toFixed(1) + '%';
    svg.appendChild(awayText);

    // Add team labels
    const homeLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    homeLabel.setAttribute('x', centerX - 50);
    homeLabel.setAttribute('y', centerY + 40);
    homeLabel.setAttribute('font-size', '14');
    homeLabel.setAttribute('fill', '#667eea');
    homeLabel.setAttribute('text-anchor', 'middle');
    homeLabel.setAttribute('font-weight', '600');
    homeLabel.textContent = homeTeamName;
    svg.appendChild(homeLabel);

    const awayLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    awayLabel.setAttribute('x', centerX + 50);
    awayLabel.setAttribute('y', centerY + 40);
    awayLabel.setAttribute('font-size', '14');
    awayLabel.setAttribute('fill', '#764ba2');
    awayLabel.setAttribute('text-anchor', 'middle');
    awayLabel.setAttribute('font-weight', '600');
    awayLabel.textContent = awayTeamName;
    svg.appendChild(awayLabel);
}

// Helper function to create SVG arc
function createArc(cx, cy, radius, startAngle, endAngle) {
    const start = polarToCartesian(cx, cy, radius, endAngle);
    const end = polarToCartesian(cx, cy, radius, startAngle);
    const largeArc = Math.abs(endAngle - startAngle) > 90 ? 1 : 0;
    const d = [
        'M', start.x, start.y,
        'A', radius, radius, 0, largeArc, 0, end.x, end.y
    ].join(' ');
    return d;
}

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
    };
}

// Display team statistics
function displayTeamStats(homeTeam, awayTeam, homeWinPct, awayWinPct) {
    // Home team stats
    document.getElementById('homeTeamName').textContent = homeTeam.name;
    document.getElementById('homeWins').textContent = homeTeam.wins;
    document.getElementById('homeLosses').textContent = homeTeam.losses;
    document.getElementById('homeWinPct').textContent = (homeTeam.winPercentage * 100).toFixed(1) + '%';
    document.getElementById('homeRuns').textContent = homeTeam.runsPerGame.toFixed(2);
    document.getElementById('homeERA').textContent = homeTeam.era.toFixed(2);
    document.getElementById('homeStreak').textContent = homeTeam.streak;

    // Away team stats
    document.getElementById('awayTeamName').textContent = awayTeam.name;
    document.getElementById('awayWins').textContent = awayTeam.wins;
    document.getElementById('awayLosses').textContent = awayTeam.losses;
    document.getElementById('awayWinPct').textContent = (awayTeam.winPercentage * 100).toFixed(1) + '%';
    document.getElementById('awayRuns').textContent = awayTeam.runsPerGame.toFixed(2);
    document.getElementById('awayERA').textContent = awayTeam.era.toFixed(2);
    document.getElementById('awayStreak').textContent = awayTeam.streak;
}

// Handle predict button click
document.getElementById('predictBtn').addEventListener('click', function() {
    const homeTeamName = document.getElementById('homeTeam').value;
    const awayTeamName = document.getElementById('awayTeam').value;

    if (!homeTeamName || !awayTeamName) {
        alert('Please select both teams');
        return;
    }

    if (homeTeamName === awayTeamName) {
        alert('Please select different teams');
        return;
    }

    // Find team data
    const homeTeam = teams.find(t => t.name === homeTeamName);
    const awayTeam = teams.find(t => t.name === awayTeamName);

    // Calculate strengths and probabilities
    const homeStrength = calculateStrength(homeTeam);
    const awayStrength = calculateStrength(awayTeam);
    const homeWinPct = calculateWinProbability(homeStrength, awayStrength);
    const awayWinPct = 100 - homeWinPct;

    // Display results
    drawArcChart(homeWinPct, awayWinPct, homeTeamName, awayTeamName);
    displayTeamStats(homeTeam, awayTeam, homeWinPct, awayWinPct);
    document.getElementById('resultContainer').style.display = 'block';

    // Scroll to results
    setTimeout(() => {
        document.getElementById('resultContainer').scrollIntoView({ behavior: 'smooth' });
    }, 100);
});

// Initialize app
populateTeamDropdowns();

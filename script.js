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

// Draw ESPN-style probability arc
function drawArcChart(homeWinPct, awayWinPct, homeTeamName, awayTeamName) {
    const svg = document.getElementById('arcChart');
    svg.innerHTML = ''; // Clear previous chart

    const width = 500;
    const height = 250;
    const centerX = width / 2;
    const centerY = height - 40;
    const radius = 100;
    const arcWidth = 25;

    // Background track (full arc)
    const bgPath = createArcPath(centerX, centerY, radius, 180, 0);
    const bgArc = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    bgArc.setAttribute('d', bgPath);
    bgArc.setAttribute('fill', 'none');
    bgArc.setAttribute('stroke', '#e8e8e8');
    bgArc.setAttribute('stroke-width', arcWidth);
    bgArc.setAttribute('stroke-linecap', 'round');
    svg.appendChild(bgArc);

    // Home team arc (left side - blue)
    const homeAngle = 180 - (homeWinPct / 100) * 180;
    const homeArcPath = createArcPath(centerX, centerY, radius, 180, homeAngle);
    const homeArc = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    homeArc.setAttribute('d', homeArcPath);
    homeArc.setAttribute('fill', 'none');
    homeArc.setAttribute('stroke', '#667eea');
    homeArc.setAttribute('stroke-width', arcWidth);
    homeArc.setAttribute('stroke-linecap', 'round');
    svg.appendChild(homeArc);

    // Away team arc (right side - purple)
    const awayAngle = awayWinPct / 100 * 180;
    const awayArcPath = createArcPath(centerX, centerY, radius, 0, awayAngle);
    const awayArc = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    awayArc.setAttribute('d', awayArcPath);
    awayArc.setAttribute('fill', 'none');
    awayArc.setAttribute('stroke', '#764ba2');
    awayArc.setAttribute('stroke-width', arcWidth);
    awayArc.setAttribute('stroke-linecap', 'round');
    svg.appendChild(awayArc);

    // Center needle/indicator
    const needleAngle = 180 - (homeWinPct / 100) * 180;
    const needlePos = polarToCartesian(centerX, centerY, radius, needleAngle);
    const needle = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    needle.setAttribute('x1', centerX);
    needle.setAttribute('y1', centerY);
    needle.setAttribute('x2', needlePos.x);
    needle.setAttribute('y2', needlePos.y);
    needle.setAttribute('stroke', '#333');
    needle.setAttribute('stroke-width', '3');
    needle.setAttribute('stroke-linecap', 'round');
    svg.appendChild(needle);

    // Center circle
    const centerCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    centerCircle.setAttribute('cx', centerX);
    centerCircle.setAttribute('cy', centerY);
    centerCircle.setAttribute('r', '8');
    centerCircle.setAttribute('fill', '#333');
    svg.appendChild(centerCircle);

    // Percentage labels
    const homeText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    homeText.setAttribute('x', centerX - 90);
    homeText.setAttribute('y', centerY - 80);
    homeText.setAttribute('font-size', '24');
    homeText.setAttribute('font-weight', 'bold');
    homeText.setAttribute('fill', '#667eea');
    homeText.setAttribute('text-anchor', 'middle');
    homeText.textContent = homeWinPct.toFixed(1) + '%';
    svg.appendChild(homeText);

    const awayText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    awayText.setAttribute('x', centerX + 90);
    awayText.setAttribute('y', centerY - 80);
    awayText.setAttribute('font-size', '24');
    awayText.setAttribute('font-weight', 'bold');
    awayText.setAttribute('fill', '#764ba2');
    awayText.setAttribute('text-anchor', 'middle');
    awayText.textContent = awayWinPct.toFixed(1) + '%';
    svg.appendChild(awayText);

    // Team labels below percentages
    const homeLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    homeLabel.setAttribute('x', centerX - 90);
    homeLabel.setAttribute('y', centerY - 55);
    homeLabel.setAttribute('font-size', '12');
    homeLabel.setAttribute('fill', '#666');
    homeLabel.setAttribute('text-anchor', 'middle');
    homeLabel.textContent = homeTeamName;
    svg.appendChild(homeLabel);

    const awayLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    awayLabel.setAttribute('x', centerX + 90);
    awayLabel.setAttribute('y', centerY - 55);
    awayLabel.setAttribute('font-size', '12');
    awayLabel.setAttribute('fill', '#666');
    awayLabel.setAttribute('text-anchor', 'middle');
    awayLabel.textContent = awayTeamName;
    svg.appendChild(awayLabel);

    // Tick marks on the arc
    for (let i = 0; i <= 10; i++) {
        const angle = 180 - (i / 10) * 180;
        const innerPos = polarToCartesian(centerX, centerY, radius - 15, angle);
        const outerPos = polarToCartesian(centerX, centerY, radius + 15, angle);
        
        const tick = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        tick.setAttribute('x1', innerPos.x);
        tick.setAttribute('y1', innerPos.y);
        tick.setAttribute('x2', outerPos.x);
        tick.setAttribute('y2', outerPos.y);
        tick.setAttribute('stroke', '#999');
        tick.setAttribute('stroke-width', '1');
        svg.appendChild(tick);

        // Add percentage markers
        if (i % 2 === 0) {
            const textPos = polarToCartesian(centerX, centerY, radius + 30, angle);
            const percentText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            percentText.setAttribute('x', textPos.x);
            percentText.setAttribute('y', textPos.y);
            percentText.setAttribute('font-size', '10');
            percentText.setAttribute('fill', '#999');
            percentText.setAttribute('text-anchor', 'middle');
            percentText.setAttribute('dominant-baseline', 'middle');
            percentText.textContent = (i * 10) + '%';
            svg.appendChild(percentText);
        }
    }
}

// Helper function to create SVG arc path
function createArcPath(cx, cy, radius, startAngle, endAngle) {
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

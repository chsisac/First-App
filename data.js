const teams = [
    {
        name: 'New York Yankees',
        wins: 54,
        losses: 42,
        winPercentage: 0.562,
        runsPerGame: 4.8,
        era: 3.45,
        streak: 'W2'
    },
    {
        name: 'Boston Red Sox',
        wins: 46,
        losses: 48,
        winPercentage: 0.489,
        runsPerGame: 4.2,
        era: 3.72,
        streak: 'W9'
    },
    {
        name: 'Tampa Bay Rays',
        wins: 56,
        losses: 38,
        winPercentage: 0.596,
        runsPerGame: 4.5,
        era: 3.38,
        streak: 'W3'
    },
    {
        name: 'Toronto Blue Jays',
        wins: 45,
        losses: 51,
        winPercentage: 0.469,
        runsPerGame: 4.1,
        era: 3.85,
        streak: 'L2'
    },
    {
        name: 'Baltimore Orioles',
        wins: 46,
        losses: 51,
        winPercentage: 0.474,
        runsPerGame: 4.0,
        era: 3.92,
        streak: 'L3'
    },
    {
        name: 'Houston Astros',
        wins: 47,
        losses: 51,
        winPercentage: 0.480,
        runsPerGame: 4.3,
        era: 3.68,
        streak: 'L1'
    },
    {
        name: 'Los Angeles Dodgers',
        wins: 61,
        losses: 36,
        winPercentage: 0.629,
        runsPerGame: 5.1,
        era: 3.15,
        streak: 'W5'
    },
    {
        name: 'San Francisco Giants',
        wins: 41,
        losses: 55,
        winPercentage: 0.427,
        runsPerGame: 3.9,
        era: 4.05,
        streak: 'L4'
    },
    {
        name: 'San Diego Padres',
        wins: 48,
        losses: 48,
        winPercentage: 0.500,
        runsPerGame: 4.4,
        era: 3.58,
        streak: 'W1'
    },
    {
        name: 'Arizona Diamondbacks',
        wins: 49,
        losses: 47,
        winPercentage: 0.510,
        runsPerGame: 4.6,
        era: 3.52,
        streak: 'W2'
    },
    {
        name: 'Chicago Cubs',
        wins: 54,
        losses: 42,
        winPercentage: 0.562,
        runsPerGame: 4.7,
        era: 3.42,
        streak: 'W2'
    },
    {
        name: 'Milwaukee Brewers',
        wins: 59,
        losses: 37,
        winPercentage: 0.615,
        runsPerGame: 4.8,
        era: 3.28,
        streak: 'W4'
    },
    {
        name: 'St. Louis Cardinals',
        wins: 50,
        losses: 45,
        winPercentage: 0.526,
        runsPerGame: 4.5,
        era: 3.62,
        streak: 'W1'
    },
    {
        name: 'Pittsburgh Pirates',
        wins: 50,
        losses: 47,
        winPercentage: 0.515,
        runsPerGame: 4.2,
        era: 3.75,
        streak: 'L2'
    },
    {
        name: 'Cincinnati Reds',
        wins: 43,
        losses: 52,
        winPercentage: 0.453,
        runsPerGame: 4.0,
        era: 3.98,
        streak: 'L3'
    },
    {
        name: 'Atlanta Braves',
        wins: 55,
        losses: 40,
        winPercentage: 0.579,
        runsPerGame: 4.9,
        era: 3.32,
        streak: 'W3'
    },
    {
        name: 'New York Mets',
        wins: 40,
        losses: 57,
        winPercentage: 0.412,
        runsPerGame: 3.8,
        era: 4.12,
        streak: 'L5'
    },
    {
        name: 'Miami Marlins',
        wins: 52,
        losses: 45,
        winPercentage: 0.536,
        runsPerGame: 4.3,
        era: 3.68,
        streak: 'W2'
    },
    {
        name: 'Philadelphia Phillies',
        wins: 54,
        losses: 43,
        winPercentage: 0.557,
        runsPerGame: 4.6,
        era: 3.48,
        streak: 'W3'
    },
    {
        name: 'Washington Nationals',
        wins: 48,
        losses: 49,
        winPercentage: 0.495,
        runsPerGame: 4.1,
        era: 3.82,
        streak: 'L1'
    },
    {
        name: 'Minnesota Twins',
        wins: 48,
        losses: 49,
        winPercentage: 0.495,
        runsPerGame: 4.4,
        era: 3.58,
        streak: 'W1'
    },
    {
        name: 'Chicago White Sox',
        wins: 50,
        losses: 45,
        winPercentage: 0.526,
        runsPerGame: 4.2,
        era: 3.72,
        streak: 'L1'
    },
    {
        name: 'Detroit Tigers',
        wins: 44,
        losses: 52,
        winPercentage: 0.458,
        runsPerGame: 4.0,
        era: 3.95,
        streak: 'L2'
    },
    {
        name: 'Kansas City Royals',
        wins: 38,
        losses: 59,
        winPercentage: 0.392,
        runsPerGame: 3.7,
        era: 4.28,
        streak: 'L6'
    },
    {
        name: 'Cleveland Guardians',
        wins: 51,
        losses: 46,
        winPercentage: 0.526,
        runsPerGame: 4.5,
        era: 3.52,
        streak: 'W2'
    },
    {
        name: 'Seattle Mariners',
        wins: 48,
        losses: 49,
        winPercentage: 0.495,
        runsPerGame: 4.3,
        era: 3.65,
        streak: 'L1'
    },
    {
        name: 'Los Angeles Angels',
        wins: 38,
        losses: 59,
        winPercentage: 0.392,
        runsPerGame: 3.8,
        era: 4.35,
        streak: 'L4'
    },
    {
        name: 'Texas Rangers',
        wins: 49,
        losses: 47,
        winPercentage: 0.510,
        runsPerGame: 4.4,
        era: 3.62,
        streak: 'W1'
    },
    {
        name: 'Oakland Athletics',
        wins: 41,
        losses: 55,
        winPercentage: 0.427,
        runsPerGame: 3.6,
        era: 4.42,
        streak: 'L5'
    },
    {
        name: 'Colorado Rockies',
        wins: 39,
        losses: 59,
        winPercentage: 0.398,
        runsPerGame: 4.1,
        era: 4.18,
        streak: 'L4'
    }
];

const teams = [
    {
        name: 'New York Yankees',
        wins: 85,
        losses: 77,
        winPercentage: 0.525,
        runsPerGame: 4.8,
        era: 3.45,
        streak: 'W3'
    },
    {
        name: 'Boston Red Sox',
        wins: 83,
        losses: 79,
        winPercentage: 0.512,
        runsPerGame: 4.6,
        era: 3.62,
        streak: 'L2'
    },
    {
        name: 'Tampa Bay Rays',
        wins: 81,
        losses: 81,
        winPercentage: 0.500,
        runsPerGame: 4.2,
        era: 3.50,
        streak: 'W1'
    },
    {
        name: 'Toronto Blue Jays',
        wins: 84,
        losses: 78,
        winPercentage: 0.519,
        runsPerGame: 4.7,
        era: 3.55,
        streak: 'W2'
    },
    {
        name: 'Baltimore Orioles',
        wins: 82,
        losses: 80,
        winPercentage: 0.506,
        runsPerGame: 4.4,
        era: 3.70,
        streak: 'L1'
    },
    {
        name: 'Houston Astros',
        wins: 90,
        losses: 72,
        winPercentage: 0.556,
        runsPerGame: 5.1,
        era: 3.30,
        streak: 'W4'
    },
    {
        name: 'Los Angeles Dodgers',
        wins: 91,
        losses: 71,
        winPercentage: 0.562,
        runsPerGame: 5.0,
        era: 3.25,
        streak: 'W5'
    },
    {
        name: 'San Francisco Giants',
        wins: 79,
        losses: 83,
        winPercentage: 0.488,
        runsPerGame: 4.1,
        era: 3.80,
        streak: 'L3'
    },
    {
        name: 'San Diego Padres',
        wins: 86,
        losses: 76,
        winPercentage: 0.531,
        runsPerGame: 4.5,
        era: 3.40,
        streak: 'W2'
    },
    {
        name: 'Arizona Diamondbacks',
        wins: 80,
        losses: 82,
        winPercentage: 0.494,
        runsPerGame: 4.3,
        era: 3.90,
        streak: 'L2'
    },
    {
        name: 'Chicago Cubs',
        wins: 83,
        losses: 79,
        winPercentage: 0.512,
        runsPerGame: 4.4,
        era: 3.65,
        streak: 'W1'
    },
    {
        name: 'Milwaukee Brewers',
        wins: 87,
        losses: 75,
        winPercentage: 0.537,
        runsPerGame: 4.7,
        era: 3.35,
        streak: 'W3'
    },
    {
        name: 'St. Louis Cardinals',
        wins: 82,
        losses: 80,
        winPercentage: 0.506,
        runsPerGame: 4.3,
        era: 3.75,
        streak: 'L1'
    },
    {
        name: 'Pittsburgh Pirates',
        wins: 78,
        losses: 84,
        winPercentage: 0.481,
        runsPerGame: 4.0,
        era: 4.00,
        streak: 'L4'
    },
    {
        name: 'Cincinnati Reds',
        wins: 76,
        losses: 86,
        winPercentage: 0.469,
        runsPerGame: 3.9,
        era: 4.10,
        streak: 'L5'
    },
    {
        name: 'Atlanta Braves',
        wins: 88,
        losses: 74,
        winPercentage: 0.543,
        runsPerGame: 4.8,
        era: 3.28,
        streak: 'W3'
    },
    {
        name: 'New York Mets',
        wins: 84,
        losses: 78,
        winPercentage: 0.519,
        runsPerGame: 4.5,
        era: 3.60,
        streak: 'W2'
    },
    {
        name: 'Miami Marlins',
        wins: 77,
        losses: 85,
        winPercentage: 0.475,
        runsPerGame: 4.0,
        era: 3.95,
        streak: 'L3'
    },
    {
        name: 'Philadelphia Phillies',
        wins: 85,
        losses: 77,
        winPercentage: 0.525,
        runsPerGame: 4.6,
        era: 3.50,
        streak: 'W2'
    },
    {
        name: 'Washington Nationals',
        wins: 80,
        losses: 82,
        winPercentage: 0.494,
        runsPerGame: 4.2,
        era: 3.85,
        streak: 'L2'
    },
    {
        name: 'Minnesota Twins',
        wins: 89,
        losses: 73,
        winPercentage: 0.549,
        runsPerGame: 4.9,
        era: 3.32,
        streak: 'W4'
    },
    {
        name: 'Chicago White Sox',
        wins: 79,
        losses: 83,
        winPercentage: 0.488,
        runsPerGame: 4.1,
        era: 3.88,
        streak: 'L2'
    },
    {
        name: 'Detroit Tigers',
        wins: 76,
        losses: 86,
        winPercentage: 0.469,
        runsPerGame: 3.8,
        era: 4.15,
        streak: 'L4'
    },
    {
        name: 'Kansas City Royals',
        wins: 78,
        losses: 84,
        winPercentage: 0.481,
        runsPerGame: 4.0,
        era: 4.05,
        streak: 'L3'
    },
    {
        name: 'Cleveland Guardians',
        wins: 86,
        losses: 76,
        winPercentage: 0.531,
        runsPerGame: 4.5,
        era: 3.45,
        streak: 'W3'
    },
    {
        name: 'Seattle Mariners',
        wins: 87,
        losses: 75,
        winPercentage: 0.537,
        runsPerGame: 4.6,
        era: 3.40,
        streak: 'W2'
    },
    {
        name: 'Los Angeles Angels',
        wins: 75,
        losses: 87,
        winPercentage: 0.463,
        runsPerGame: 3.9,
        era: 4.20,
        streak: 'L5'
    },
    {
        name: 'Texas Rangers',
        wins: 84,
        losses: 78,
        winPercentage: 0.519,
        runsPerGame: 4.5,
        era: 3.55,
        streak: 'W1'
    },
    {
        name: 'Oakland Athletics',
        wins: 74,
        losses: 88,
        winPercentage: 0.457,
        runsPerGame: 3.7,
        era: 4.30,
        streak: 'L6'
    },
    {
        name: 'Colorado Rockies',
        wins: 77,
        losses: 85,
        winPercentage: 0.475,
        runsPerGame: 4.2,
        era: 4.00,
        streak: 'L2'
    }
];

// Get elements
const petNameElement = document.getElementById('pet-name');
const petTypeElement = document.getElementById('pet-type');
const lastPeriodElement = document.getElementById('last-period');
const periodTableBody = document.getElementById('period-data');

// Sample data
const petData = {
    name: 'Fido',
    type: 'Dog',
    lastPeriod: '2022-01-01',
    periods: [
        { date: '2022-01-01', period: 'In heat' },
        { date: '2022-02-01', period: 'Not in heat' },
        { date: '2022-03-01', period: 'In heat' },
    ],
};

// Display pet profile
petNameElement.textContent = petData.name;
petTypeElement.textContent = petData.type;
lastPeriodElement.textContent = petData.lastPeriod;

// Display period data

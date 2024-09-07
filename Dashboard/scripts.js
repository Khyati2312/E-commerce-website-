const revenueCtx = document.getElementById('revenueChart').getContext('2d');
new Chart(revenueCtx, {
    type: 'line',
    data: {
        labels: ['5k', '10k', '15k', '20k', '25k', '30k', '35k', '40k', '45k', '50k', '55k', '60k'],
        datasets: [{
            label: 'Sales',
            data: [20, 40, 30, 50, 60, 40, 70, 50, 80, 90, 60, 100],
            borderColor: '#f39687',
            backgroundColor: 'rgba(243, 150, 135, 0.5)',
            fill: true,
            tension: 0.3,
        }, {
            label: 'Profit',
            data: [30, 50, 40, 60, 70, 50, 80, 60, 90, 100, 70, 110],
            borderColor: '#d1aef8',
            backgroundColor: 'rgba(209, 174, 248, 0.5)',
            fill: true,
            tension: 0.3,
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    display: false
                }
            }
        }
    }
});

// Customers Chart
const customersCtx = document.getElementById('customersChart').getContext('2d');
new Chart(customersCtx, {
    type: 'doughnut',
    data: {
        labels: ['New Customers', 'Repeated'],
        datasets: [{
            label: 'Customers',
            data: [34, 14],
            backgroundColor: ['#4b99f3', '#f3f4f6'],
            borderWidth: 0
        }]
    },
    options: {
        cutout: '80%',
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

// Sales Analytics Chart
const salesAnalyticsCtx = document.getElementById('salesAnalyticsChart').getContext('2d');
new Chart(salesAnalyticsCtx, {
    type: 'line',
    data: {
        labels: ['2015', '2016', '2017', '2018', '2019'],
        datasets: [{
            label: 'Sales',
            data: [50, 75, 50, 80, 90],
            borderColor: '#4b99f3',
            backgroundColor: 'rgba(75, 153, 243, 0.5)',
            fill: true,
            tension: 0.3,
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    display: false
                }
            }
        }
    }
});
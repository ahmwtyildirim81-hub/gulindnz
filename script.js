// Timestamp
const now = new Date();
document.getElementById('timestamp').textContent = 
    `${now.toLocaleDateString('tr-TR')} - ${now.toLocaleTimeString('tr-TR')}`;

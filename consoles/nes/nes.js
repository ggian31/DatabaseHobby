window.ConsoleConfig = window.ConsoleConfig || [];
window.ConsoleConfig.push({
    id: 'NES',
    name: 'NES',
    icon: '🎮',
    color: '#ef4444',
    badgeBg: '#ef4444',
    badgeColor: 'white',
    itemsPerPage: 300,
    paths: ['/Archivos/001 Instaladores/Juegos/Emuladores/NES', '/Documents/Archivos/001 Instaladores/Juegos/Emuladores/NES'],
    targets: [
        { name: 'Roms', platform: 'NES', img: ['downloaded_images', 'image'] }
    ]
});

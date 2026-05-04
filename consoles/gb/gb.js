window.ConsoleConfig = window.ConsoleConfig || [];
window.ConsoleConfig.push({
    id: 'GB',
    name: 'Gameboy',
    icon: '🟩',
    color: '#8b5cf6', // A purple gradient similar to what we used, or #8bac0f for classic GB
    badgeBg: '#8b5cf6',
    badgeColor: 'white',
    itemsPerPage: 300,
    paths: ['/Archivos/001 Instaladores/Juegos/Emuladores', '/Documents/Archivos/001 Instaladores/Juegos/Emuladores'],
    targets: [ 
        { name: 'gb', platform: 'Gameboy', img: 'downloaded_images' }, 
        { name: 'gbc', platform: 'Gameboy Color', img: 'downloaded_images' } 
    ]
});

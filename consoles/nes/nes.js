window.ConsoleConfig = window.ConsoleConfig || [];
window.ConsoleConfig.push({
    id: 'NES',
    name: 'NES',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="vertical-align: middle; margin-top: -2px;"><rect x="2" y="6" width="20" height="6" fill="#8c8c8c"/><rect x="2" y="12" width="20" height="8" fill="#d4d4d4"/><rect x="2" y="11.5" width="20" height="1" fill="#1a1a1a"/><rect x="4" y="6" width="12" height="5.5" fill="#737373"/><rect x="5" y="11" width="10" height="0.5" fill="#1a1a1a"/><rect x="17" y="7" width="4" height="1" fill="#1a1a1a"/><rect x="17" y="9" width="4" height="1" fill="#1a1a1a"/><circle cx="5" cy="15" r="0.8" fill="#e52521"/><rect x="7" y="14" width="2" height="1.5" fill="#404040"/><rect x="7" y="16.5" width="2" height="1.5" fill="#404040"/><rect x="12" y="14" width="3" height="3" fill="#1a1a1a"/><rect x="16" y="14" width="3" height="3" fill="#1a1a1a"/><rect x="2" y="6" width="20" height="14" fill="none" stroke="#404040" stroke-width="1.5" rx="0.5"/></svg>',
    color: '#ef4444',
    badgeBg: '#ef4444',
    badgeColor: 'white',
    itemsPerPage: 300,
    paths: ['/Archivos/001 Instaladores/Juegos/Emuladores/NES', '/Documents/Archivos/001 Instaladores/Juegos/Emuladores/NES'],
    targets: [
        { name: 'Roms', platform: 'NES', img: ['downloaded_images', 'image'] }
    ]
});

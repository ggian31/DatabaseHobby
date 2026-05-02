/**
 * Sistema de Modal Personalizado para Listado Admin
 */

const CustomModal = {
    overlay: null,
    desc: null,
    cancelBtn: null,
    confirmBtn: null,
    pendingAction: null,

    init() {
        // Inyectar HTML del modal si no existe
        if (!document.getElementById('customModalOverlay')) {
            const modalHTML = `
                <div id="customModalOverlay">
                    <div class="modal-content">
                        <div class="modal-icon">⚠️</div>
                        <div class="modal-title">¿Eliminar Juego?</div>
                        <div id="modalDescription" class="modal-text"></div>
                        <div class="modal-buttons">
                            <button id="modalConfirm" class="btn-modal btn-confirm">Eliminar Ahora</button>
                            <button id="modalCancel" class="btn-modal btn-cancel">Cancelar</button>
                        </div>
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', modalHTML);
        }

        this.overlay = document.getElementById('customModalOverlay');
        this.desc = document.getElementById('modalDescription');
        this.cancelBtn = document.getElementById('modalCancel');
        this.confirmBtn = document.getElementById('modalConfirm');

        // Eventos
        this.cancelBtn.onclick = () => this.close();

        // Cerrar al hacer clic fuera del contenido
        this.overlay.onclick = (e) => {
            if (e.target === this.overlay) this.close();
        };
    },

    show(gameName, onConfirm) {
        if (!this.overlay) this.init();

        this.desc.textContent = `¿Estás seguro de eliminar "${gameName}"? Esta acción enviará el archivo y su imagen a la papelera de OneDrive.`;
        this.overlay.classList.add('active');

        this.confirmBtn.onclick = () => {
            this.close();
            if (onConfirm) onConfirm();
        };
    },

    close() {
        if (this.overlay) {
            this.overlay.classList.remove('active');
        }
    }
};

// Exponer al objeto window para uso global
window.CustomModal = CustomModal;

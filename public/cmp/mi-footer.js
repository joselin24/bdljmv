class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
            `Copyright &copy; 2020 Muñoz Vazquez Lizbeth Joselin.`;
    }
}
customElements.define("mi-footer", MiFooter);
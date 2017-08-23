import {Element} from './node_modules/@polymer/polymer/polymer-element.js';

export class ModuleElement extends Element {
    static get is() { return 'module-element'; }
    static get template() {
        return `
<div>Module element as well!</div>
`
    }
}

customElements.define(ModuleElement.is, ModuleElement);
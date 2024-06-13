import { LitElement, html, css } from 'lit';
import { getHPCharacters,getHPSpells } from './hp.js'; 
import { characterTemplate } from './../../template/characters-template.js';
import { spellTemplate} from './../../template/spell-template.js';
import logo from '../images/logo2.png';

export class App extends LitElement {
    static styles = css `
    
        .logo{
            width:300px;
        }
        .hp-character{
            display:flex;
            align-items: center;
        }
        .hp-character img{
            width: 60px;
            overflow: hidden;
            border-radius:25px;
            margin-right: 20px;
        }
    `;

    static properties = {
        _content: { type: String, state: true }
    };

    _printCharacters() {
        console.log('Obtener personajes');
        getHPCharacters().then((data) => {
            console.log(data);
            const template = html`${data.map((character) => characterTemplate(character))}`;
            this._content = template;
        });
    }

    _printSpells() {
        console.log('Obtener hechizos');
         getHPSpells().then((data) => {
            console.log(data);
            const template = html`${data.map((spell) => spellTemplate(spell))}`;
            this._content = template;
         });
    }

    render() {
        return html `
            <div id="harry-potter">
                <header>
                    <img class= "logo" src="${logo}" alt="Harry Potter PWA">
                    <h1>Harry Potter</h1>
                </header>
                <button @click="${this._printCharacters}">Obtener Personajes</button>
                <button @click="${this._printSpells}">Obtener Hechizos</button>
                <div>${this._content}</div>
            </div>
        `;
    }
}

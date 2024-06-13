import {LitElement,html,css} from 'lit';

export const spellTemplate = (data) => html `
    <div class="hp-spell">
        <h2>${data.name}</h2>           
        <ul>
            <li>Descripción: ${data.description}</li>
        </ul>            
    </div>
`;


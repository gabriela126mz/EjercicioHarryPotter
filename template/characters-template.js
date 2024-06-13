
import {LitElement,html,css} from 'lit';

export const characterTemplate = (data) => html `
    <div class="hp-character">
        <img src="${data.image}" alt="${data.name}">
        <div class="hp-character --info">
            <h2>${data.name}</h2>
            <ul>
                <li>Casa: ${data.house}</li>
                <li>Fecha nacimiento: ${data.dateOfBirth}</li>
            </ul>
        </div>
    </div>
`;



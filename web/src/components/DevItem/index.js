import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import api from '../../services/api';

import './styles.css';

function DevItem({ dev, onClick }) {
    async function handleDelete(dev) {
        await api.delete(`/devs/delete/${dev._id}`);
        await onClick();
    }

    return (
        <li className="dev-item">
            <header>
                <img src={dev.avatar_url} alt={dev.name}/>
                <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(', ')}</span>
                </div>
            </header>
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
            <IconButton className="deleteButton" onClick={ () => {handleDelete(dev) }} >
                <DeleteIcon />
            </IconButton>
        </li>
    );
}

export default DevItem;
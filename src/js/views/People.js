import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartRegular } from '@fortawesome/free-solid-svg-icons'
const imageUrl = require.context('../../assets/characters', true);


export const People = ({ store, actions }) => {

    const { addFavorite, findInFavorite } = actions;

    return (
        <>
            <h1>Characters</h1>
            <div className='people'>
                {
                    !!store.people &&
                    store.people.results.map((character, i) => (
                        <div className="card" style={{ width: "18rem" }} key={character.name}>
                            <img
                                src={imageUrl(`./${character.name.replace(' ', '-')}.jpg`)}
                                className="card-img-top"
                                alt={character.name}
                                loading="lazy" />
                            <div className="card-body">
                                <h5 className="card-title">{character.name}</h5>
                                {/* <p className="card-text">Gender: {character.gender}</p>
                                <p className="card-text">Hair color: {character.hair_color}</p>
                                <p className="card-text">Eye color: {character.eye_color}</p> */}
                                <div className='buttons'>
                                    <Link to={`/character/${i + 1}`} className="btn btn-outline-warning">Learn more!</Link>
                                    <FontAwesomeIcon
                                        className='icon'
                                        icon={(findInFavorite(character.name)) ? faHeartRegular : faHeart}
                                        onClick={() => addFavorite('people', character.name, character.uid)} />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

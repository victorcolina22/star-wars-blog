import React from 'react';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartRegular } from '@fortawesome/free-solid-svg-icons'
const imageUrl = require.context('../../assets/planets', true);


export const Planets = ({ store, actions }) => {

    const { addFavorite, findInFavorite } = actions;

    return (
        <section className='planets-container'>
            <div className='planets animate__animated animate__fadeIn'>
                {
                    !!store.planets
                        ?
                        (
                            store.planets.results.map((planet, i) => (
                                <div className="card" style={{ width: "18rem" }} key={planet.name}>
                                    <img
                                        src={imageUrl(`./${planet.name.replace(' ', '-')}.jpg`)}
                                        className="card-img-top"
                                        alt={`${planet.name}`} />
                                    <div className="card-body">
                                        <h5 className="card-title">{planet.name}</h5>
                                        {/* <p className="card-text">Climate: {planet.climate}</p>
                                <p className="card-text">Population: {planet.population}</p>
                                <p className="card-text">Diameter: {planet.diameter}</p> */}
                                        <div className='buttons'>
                                            <Link to={`/planet/${i + 1}`} className="btn btn-outline-warning">Learn more!</Link>
                                            <FontAwesomeIcon
                                                className='icon'
                                                icon={(findInFavorite(planet.name)) ? faHeartRegular : faHeart}
                                                onClick={() => addFavorite('planet', planet.name, planet.uid)} />
                                        </div>
                                    </div>
                                </div>
                            )
                            )
                        )
                        :
                        (
                            <div className="spinner">
                                <div className="spinner-grow text-warning" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        )
                }
            </div>
        </section>
    )
}

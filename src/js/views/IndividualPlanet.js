import React, { useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
const imageUrl = require.context('../../assets/planets', true);


export const IndividualPlanet = () => {

    const { store, actions } = useContext(Context);
    const { planet } = store;
    const { id } = useParams();
    const navigate = useNavigate();
    const res = (planet === undefined) ? 'not found' : planet.result;

    useEffect(() => {
        actions.getPlanetById('planets', id);
    }, [id])

    return (
        <>
            {
                planet !== undefined
                    ?
                    (
                        <div className="individualPlanet animate__animated animate__fadeIn">
                            <div className="individualPlanet__body">
                                <img
                                    className="individualCharacter__image animate__animated animate__fadeInLeft"
                                    src={imageUrl(`./${res.properties.name.replace(' ', '-')}.jpg`)}
                                    alt={`${res.properties.name}`} />
                                <div className="individualCharacter__description">
                                    <h2>{res.properties.name}</h2>
                                </div>
                            </div>
                            <hr />

                            <div className="individualCharacter__details">
                                <div>
                                    <p>Name</p>
                                    <p>{res.properties.name}</p>
                                </div>
                                <div>
                                    <p>Rotation period</p>
                                    <p>{res.properties.rotation_period}</p>
                                </div>
                                <div>
                                    <p>Orbital period</p>
                                    <p>{res.properties.orbital_period}</p>
                                </div>
                                <div>
                                    <p>Diameter</p>
                                    <p>{res.properties.diameter}</p>
                                </div>
                                <div>
                                    <p>Climate</p>
                                    <p>{res.properties.climate}</p>
                                </div>
                                <div>
                                    <p>Gravity</p>
                                    <p>{res.properties.gravity}</p>
                                </div>
                                <div>
                                    <p>Terrain</p>
                                    <p>{res.properties.terrain}</p>
                                </div>
                                <div>
                                    <p>Population</p>
                                    <p>{res.properties.population}</p>
                                </div>
                            </div>
                            <button
                                className="btn btn-outline-warning mt-3"
                                onClick={() => navigate(-1)}>
                                Back
                            </button>
                        </div>
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
        </>
    );
};

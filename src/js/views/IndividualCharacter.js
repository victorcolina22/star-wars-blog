import React, { useEffect, useContext, useMemo } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

// Esta es una forma de importar imágenes dinámicamente, se utiliza el "require.context()" para navegar al path donde están
// alojadas las imágenes y se le asigna como segundo parámetro "true" para indicarle a React que busque en subdirectorios.
const imageUrl = require.context('../../assets/characters', true);


export const IndividualCharacter = () => {

    const { store, actions } = useContext(Context);
    const { character } = store;
    const { id } = useParams();
    const navigate = useNavigate();
    const res = (character !== undefined) && character.result;

    // useEffect(() => {
    //     actions.getCharacterById('people', id);
    // }, [id]);

    useMemo(() => actions.getCharacterById('people', id), [id]);

    return (
        <>
            {
                res // Si es "true"
                    ?
                    (
                        <div className="individualCharacter animate__animated animate__fadeIn">
                            <div className="individualCharacter__body">
                                <img
                                    className="individualCharacter__image animate__animated animate__fadeInLeft"
                                    loading="lazy"
                                    src={imageUrl(`./${res.properties.name.replace(' ', '-')}.jpg`)}
                                    alt={`${res.properties.name}`} />
                                <div className="individualCharacter__description">
                                    <h1>{res.properties.name}</h1>
                                </div>
                            </div>
                            <hr />

                            <div className="individualCharacter__details">
                                <div>
                                    <p>Name</p>
                                    <p>{res.properties.name}</p>
                                </div>
                                <div>
                                    <p>Height</p>
                                    <p>{res.properties.height}</p>
                                </div>
                                <div>
                                    <p>Mass</p>
                                    <p>{res.properties.mass}</p>
                                </div>
                                <div>
                                    <p>Hair color</p>
                                    <p>{res.properties.hair_color}</p>
                                </div>
                                <div>
                                    <p>Eye color</p>
                                    <p>{res.properties.eye_color}</p>
                                </div>
                                <div>
                                    <p>Birthday</p>
                                    <p>{res.properties.birth_year}</p>
                                </div>
                                <div>
                                    <p>Gender</p>
                                    <p>{res.properties.gender}</p>
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



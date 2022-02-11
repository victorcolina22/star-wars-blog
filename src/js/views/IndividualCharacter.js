import React, { useEffect, useContext, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

// Esta es una forma de importar imágenes dinámicamente, se utiliza el "require.context()" para navegar al path donde están
// alojadas las imágenes y se le asigna como segundo parámetro "true" para indicarle a React que busque en subdirectorios.
const imageUrl = require.context('../../assets/characters', true);


export const IndividualCharacter = () => {

    const { store, actions } = useContext(Context);
    const { character } = store;
    const { id } = useParams();

    // useEffect(() => {
    //     actions.getCharacterById('people', id);
    // }, [id]);

    useMemo(() => actions.getCharacterById('people', id), [id]);

    return (
        <>
            {
                character !== undefined
                    ?
                    (
                        <div className="individualCharacter animate__animated animate__fadeIn">
                            <div className="individualCharacter__body">
                                <img
                                    className="individualCharacter__image animate__animated animate__fadeInLeft"
                                    loading="lazy"
                                    src={imageUrl(`./${character.name.replace(' ', '-')}.jpg`)}
                                    alt={`${character.name}`} />
                                <div className="individualCharacter__description">
                                    <h1>{character.name}</h1>
                                </div>
                            </div>
                            <hr />

                            <div className="individualCharacter__details">
                                <div>
                                    <p>Name</p>
                                    <p>{character.name}</p>
                                </div>
                                <div>
                                    <p>Height</p>
                                    <p>{character.height}</p>
                                </div>
                                <div>
                                    <p>Mass</p>
                                    <p>{character.mass}</p>
                                </div>
                                <div>
                                    <p>Hair color</p>
                                    <p>{character.hair_color}</p>
                                </div>
                                <div>
                                    <p>Eye color</p>
                                    <p>{character.eye_color}</p>
                                </div>
                                <div>
                                    <p>Birthday</p>
                                    <p>{character.birth_year}</p>
                                </div>
                                <div>
                                    <p>Gender</p>
                                    <p>{character.gender}</p>
                                </div>
                            </div>
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



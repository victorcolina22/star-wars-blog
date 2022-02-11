const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: []
		},
		actions: {
			fetchPeople: async () => {
				await fetch('https://swapi.dev/api/people')
					.then(data => data.json())
					.then(data => setStore({ people: data }))
					.catch(error => console.log(error))
			},
			fetchPlanets: async () => {
				await fetch('https://swapi.dev/api/planets')
					.then(data => data.json())
					.then(data => setStore({ planets: data }))
					.catch(error => console.log(error))
			},
			getCharacterById: async (type, id) => {
				await fetch(`https://swapi.dev/api/${type}/${id}`)
					.then(data => data.json())
					.then(data => setStore({ character: data }))
					.catch(error => console.log(error))
			},
			getPlanetById: async (type, id) => {
				await fetch(`https://swapi.dev/api/${type}/${id}`)
					.then(data => data.json())
					.then(data => setStore({ planet: data }))
					.catch(error => console.log(error))
			},
			addFavorite: (type, name, id) => {
				const store = getStore();
				const favorites = store.favorites;
				// Condicional para verificar que no hayan valores repetidos.
				for (let favs of favorites) {
					if (favs.name === name) return;
				}
				setStore({
					favorites: [
						...store.favorites,
						{ type, name, id }
					]
				})
			},
			deleteFavorite: (name) => {
				const store = getStore();
				const favorites = store.favorites;
				const newArray = favorites.filter(fav => fav.name !== name);

				setStore({
					favorites: newArray
				});
			}
		}
	};
};

export default getState;

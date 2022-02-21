const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: []
		},
		actions: {
			fetchPeople: async () => {
				await fetch('https://www.swapi.tech/api/people')
					.then(data => data.json())
					.then(data => setStore({ people: data }))
					.catch(error => console.log(error))
			},
			fetchPlanets: async () => {
				await fetch('https://www.swapi.tech/api/planets')
					.then(data => data.json())
					.then(data => setStore({ planets: data }))
					.catch(error => console.log(error))
			},
			getCharacterById: async (type, id) => {
				await fetch(`https://www.swapi.tech/api/${type}/${id}`)
					.then(data => data.json())
					.then(data => setStore({ character: data }))
					.catch(error => console.log(error))
			},
			getPlanetById: async (type, id) => {
				await fetch(`https://www.swapi.tech/api/${type}/${id}`)
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
				});
				localStorage.setItem('favs', JSON.stringify(store.favorites));
			},
			deleteFavorite: (name) => {
				const store = getStore();
				const favorites = store.favorites;
				const newArray = favorites.filter(fav => fav.name !== name);

				setStore({
					favorites: newArray
				});
				localStorage.setItem('favs', JSON.stringify(newArray));
			},
			findInFavorite: (name) => {
				const store = JSON.parse(localStorage.getItem('favs')) || [];

				return store.find(value => value.name === name) ? true : false;
			}
		}
	};
};

export default getState;

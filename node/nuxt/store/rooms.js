export const state = () => ({
    rooms: null,
});

export const getters = {
    rooms: state => state.rooms,
};

export const mutations = {
    SET_ROOMS(state, rooms) {
        state.rooms = rooms;
    },
};

export const actions = {
    async getRooms({ commit }) {
        return await this.$axios.get(
            'api/rooms'
        ).then(response => { 
            commit('SET_ROOMS', response.data.rooms);
        }).catch(() => {
            return false;
        });
    },
};

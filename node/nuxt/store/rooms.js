export const state = () => ({
    rooms: null,
    selectedRoomId: null,
    //filters
    dateFrom: "",
    dateTo: "",
});

export const getters = {
    rooms: state => state.rooms,
    room: state => {
        return state.rooms[state.selectedRoomId];
    },
    dateFrom: state => state.dateFrom,
    dateTo: state => state.dateTo,
};

export const mutations = {
    SET_ROOMS(state, rooms) {
        state.rooms = rooms;
    },
    SET_SELECTED_ROOM(state, roomId) {
        state.selectedRoomId = roomId;
    },
    SET_DATE_FROM(state, dateFrom) {
        state.dateFrom = dateFrom;
    },
    SET_DATE_TO(state, dateTo) {
        state.dateTo = dateTo;
    },
};

export const actions = {
    async getRooms({ commit, state }) {
        if(state.rooms!==null){
            return true;
        }
        return await this.$axios.get(
            'api/rooms'
        ).then(response => { 
            commit('SET_ROOMS', response.data.rooms);
            return true;
        }).catch(() => {
            return false;
        });
    },
};

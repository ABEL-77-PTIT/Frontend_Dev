import { createSlice} from "@reduxjs/toolkit"

export default createSlice({
    name: "filters",
    initialState: {
        search: "",
        status: "All", //completed, todo
        priorities: [], //high, medium, low
    },
    reducers: {
        searchFilterChange: (state, action) => {
            state.search = action.payload
        },
        statusFilterChange: (state, action) => {
            state.status = action.payload
        },
        priorityFilterChange: (state, action) => {
            state.priorities = action.payload
        }
    }
})

//Khi export thi no tu dong xuat ten la filtersSlice theo name ta dat.

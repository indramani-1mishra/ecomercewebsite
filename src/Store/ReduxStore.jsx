import { configureStore, createSlice } from "@reduxjs/toolkit";

// Function to load data from localStorage
function LoadFromLocalStorage() {
  const data = localStorage.getItem("catrs");
//  console.log('Data from localStorage:', data); // Debugging line
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
}

// Load the initial data from localStorage synchronously
const initialData = LoadFromLocalStorage();

// Product Slice
const productSlice = createSlice({
  name: 'products',
  initialState: {
    data: initialData, // Set the loaded data here
    counter: initialData.length, // Initialize the counter based on the loaded data
  },
  reducers: {
    addTocart: (state, action) => {
      state.counter++;
      const currentDate = new Date().toLocaleString();
      const { id, image, price, categery, rating, count, title } = action.payload;
      state.data.push({ id, image, price, categery, rating, count, title, Date: currentDate });
      console.log('Updated Data:', state.data); // Debugging line
      localStorage.setItem("catrs", JSON.stringify(state.data)); // Save updated data to localStorage
    },
    removeToCart: (state, action) => {
      state.counter--;
      const index = state.data.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.data.splice(index, 1);
        localStorage.setItem("catrs", JSON.stringify(state.data)); // Save updated data to localStorage
      }
    }
  }
});

// Search Slice
const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchTerm: ''
  },
  reducers: {
    updateSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    }
  }
});

  const categorySlice =createSlice({
    name:'category',
    initialState:{
      category:''
    },
    reducers:{
      updateCategory:(state,action)=>{
        state.category=action.payload;
      }
    }
  });
// Export actions from both slices
export const { addTocart, removeToCart } = productSlice.actions;
export const { updateSearchTerm } = searchSlice.actions;
export const {updateCategory } = categorySlice.actions;

// Export reducers from both slices
export const productReducer = productSlice.reducer;
export const searchReducer = searchSlice.reducer;
export const categoryReducer = categorySlice.reducer;

// Configure Redux Store
export const Store = configureStore({
  reducer: {
    products: productReducer,
    search: searchReducer,
    category:categoryReducer // Add category reducer here if needed  // Add category reducer here if needed  // Add category reducer here if needed  // Add category reducer here if needed  // Add category reducer here if needed  // Add category reducer here if needed  // Add category reducer here if needed  // Add category reducer here if needed  // Add category reducer here if needed  // Add category reducer here if needed  // Add category reducer here if needed  // Add category reducer here if
  }
});

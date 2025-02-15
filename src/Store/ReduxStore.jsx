import { configureStore, createSlice } from "@reduxjs/toolkit";

// Function to load data from localStorage for products
function LoadFromLocalStorage() {
  const data = localStorage.getItem("catrs");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
}

// Function to load user data from localStorage
{/**function LoadFromLocalStorage1() {
  const userData = localStorage.getItem("userinfo");
  if (userData) {
    return JSON.parse(userData);
  } else {
    return [];
  }
}
  const initialInfo = LoadFromLocalStorage1(); */}


const initialData = LoadFromLocalStorage();

// Product Slice
const productSlice = createSlice({
  name: 'products',
  initialState: {
    data: initialData,
    counter: initialData.length,
  },
  reducers: {
    addTocart: (state, action) => {
      state.counter++;
      const currentDate = new Date().toLocaleString();
      const { id, image, price, categery, rating, count, title } = action.payload;
      state.data.push({ id, image, price, categery, rating, count, title, Date: currentDate });
      localStorage.setItem("catrs", JSON.stringify(state.data));
    },
    removeToCart: (state, action) => {
      state.counter--;
      const index = state.data.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.data.splice(index, 1);
        localStorage.setItem("catrs", JSON.stringify(state.data));
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

// Category Slice
const categorySlice = createSlice({
  name: 'category',
  initialState: {
    category: ''
  },
  reducers: {
    updateCategory: (state, action) => {
      state.category = action.payload;
    }
  }
});

// Login Slice
const loginSlice = createSlice({
  name: 'login',
  initialState: {
    user: "",
    password: ""
  },
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload;
      //localStorage.setItem("userinfo", JSON.stringify(state.user)); // Save updated user data to localStorage
    },
    updatePassword: (state, action) => {
      state.password = action.payload;
    //  localStorage.setItem("userinfo", JSON.stringify(state.password)); // Save updated password to localStorage
    },
    logout: (state) => {
      // Clear user and password from state and localStorage
      state.user = "";
      state.password = "";

      // Optionally, you can remove the item from localStorage
      //localStorage.removeItem("userinfo");
    }
  }
});

// Export actions from slices
export const { addTocart, removeToCart } = productSlice.actions;
export const { updateSearchTerm } = searchSlice.actions;
export const { updateCategory } = categorySlice.actions;
export const { updateUser, updatePassword, logout } = loginSlice.actions;

// Export reducers from slices
export const productReducer = productSlice.reducer;
export const searchReducer = searchSlice.reducer;
export const categoryReducer = categorySlice.reducer;
export const loginReducer = loginSlice.reducer;

// Configure Redux Store
export const Store = configureStore({
  reducer: {
    products: productReducer,
    search: searchReducer,
    category: categoryReducer,
    login: loginReducer
  }
});

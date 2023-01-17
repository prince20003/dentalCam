import { createStore} from "redux";
import rootReducer from "./reducers/index";

function saveToLocalStorage(state) {
    try {
      const serialisedState = JSON.stringify(state);
      localStorage.setItem("List", serialisedState);
    } catch (e) {
      console.warn(e);
    }
  }

  function loadFromLocalStorage() {
    try {
      const serialisedState = localStorage.getItem("List");
      if (serialisedState === null) return undefined;
      return JSON.parse(serialisedState);
    } catch (e) {
      console.warn(e);
      return undefined;
    }
  }

const store = createStore(rootReducer,loadFromLocalStorage());
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store

import { globalStore } from "./store";

export let add = () => {
  globalStore.update(store => {
    store.x += 1;
  });
};

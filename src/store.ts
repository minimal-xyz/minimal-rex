import { createStore } from "@jimengio/rex";
import { IGlobalStore, initialStore } from "./model";

export let globalStore = createStore<IGlobalStore>(initialStore);

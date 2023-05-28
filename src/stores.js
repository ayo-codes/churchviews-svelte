import {writable} from "svelte/store";

export const user = writable({
  email: "",
  token: "",
  id:""
});

export const latestChurch = writable(null);

export const imageChange = writable(null);
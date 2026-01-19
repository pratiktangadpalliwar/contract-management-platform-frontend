export const load = (key) => JSON.parse(localStorage.getItem(key)) || [];
export const save = (key, data) => localStorage.setItem(key, JSON.stringify(data));

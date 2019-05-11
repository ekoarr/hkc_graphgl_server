import { Story } from "./Story";


export const resolver = {
    Query: {
        stories() {
            return Story.all();
        }
    },
};
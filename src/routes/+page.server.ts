import type { PageServerLoad } from "./$types";
import { readdir, readFile } from "fs/promises";

export const load: PageServerLoad = async () => {
    const weeks = await readdir("./static/weeks/");

    const weekData = [];
    for(const week of weeks) {
        const weekJSON = JSON.parse((await readFile(`./static/weeks/${week}/data.json`)).toString("utf-8"));
        weekData.push(weekJSON);
    }

    return { weekData };
}
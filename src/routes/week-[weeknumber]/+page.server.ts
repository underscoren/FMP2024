import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { readdir, readFile } from "fs/promises";

export const load: PageServerLoad = async ({ params }) => {
    const weekNum = parseInt(params.weeknumber);
    
    if(isNaN(weekNum) || weekNum < 0 || weekNum > 0) {
        error(404, "Not found");
    } else {
        return {
            weekNum,
            imgs: await readdir(`./static/weeks/${weekNum}/imgs`),
            weekData: JSON.parse((await readFile(`./static/weeks/${weekNum}/data.json`)).toString()),
            weeks: await readdir("./static/weeks")
        }
    }
};

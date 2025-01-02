import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url"; // Correct import path

export const client = createClient({
    projectId: "p7g0cpt2",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
}
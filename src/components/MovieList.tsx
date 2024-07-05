import { For, createResource } from "solid-js";
import { fetchMovies } from "~/utils/api";

export function MovieList() {
    const [movies] = createResource(fetchMovies)

    return (
        <ul>
            <For each={movies()}>
                {(movie) => (
                    <li>
                        {movie.title} ({movie.release_date})
                    </li>
                )}
            </For>
        </ul>
    )
}
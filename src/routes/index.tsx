import { Title } from "@solidjs/meta";
import Counter from "~/components/Counter";
import { MovieList } from "~/components/MovieList";

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <Counter />
      <h3>Star Wars Movies</h3>
      <MovieList />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}

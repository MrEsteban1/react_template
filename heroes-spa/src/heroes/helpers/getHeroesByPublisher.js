import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher = "marvel") => {
  const validPublishers = ["Marvel Comics", "DC Comics"];
  console.log(heroes);
  if (!validPublishers.includes(publisher)) {
    throw new Error(`${publisher} is not a valid publisher.`);
  }

  return heroes.filter((heroe) => heroe.publisher === publisher);
};

export const getHeroById = (id) => {
  console.log("Ejecutado");
  return heroes.find((hero) => hero.id === id);
};

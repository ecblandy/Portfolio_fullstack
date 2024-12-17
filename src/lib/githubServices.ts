import * as c from "cheerio";

const getCommitByYear = async (year: number) => {
  const response = await fetch(
    `https://github.com/users/ecblandy/contributions?from=${year}-01-01&to=${year}-12-31`
  );
  const data = await response.text();

  // Carregar o HTML com cheerio
  const $ = c.load(data);

  // Encontrar a tag <h2> com a classe específica
  const h2Text = $("h2.f4.text-normal.mb-2").text().trim();

  // Se você quiser extrair apenas o número de contribuições
  return Number(h2Text.split(" ")[0].replace(/\s+/g, "")); // Extrai o número "97"
};

export const getCommit = async () => {
  const currentYear = new Date().getFullYear();
  const startYear = 2023;
  let totalCommit = 0;
  for (let i = startYear; i <= currentYear; i++) {
    const get = await getCommitByYear(i);
    totalCommit += get;
  }

  return totalCommit;
};

export const yearsOfJob = () => {
  const startDate = Math.abs(Number(new Date("2023-03-01"))); // Data de início
  const endDate = Math.abs(Number(new Date())); // Data atual
  const diffTime = Math.abs(startDate - endDate); // Diferença em milissegundos (valor absoluto)
  const diffYears = diffTime / (1000 * 60 * 60 * 24 * 30.44); // Aproximando meses
  const years = Math.floor(diffYears / 12); // Anos completos
  return years;
};

export const repos = async () => {
  const response = await fetch("https://api.github.com/users/ecblandy");
  const data = await response.json();
  return data.public_repos;
};

import type { Continent } from "@/types";

/**
 * Curated continent and country lists for the onboarding location flow.
 *
 * The lists are intentionally short for the prototype. State, province, or
 * region is collected as a free-text field, since validation will move to
 * the backend in production. City is private and never shown publicly.
 */
export const CONTINENTS: Continent[] = [
  "North America",
  "South America",
  "Europe",
  "Africa",
  "Asia",
  "Oceania",
];

export const COUNTRIES_BY_CONTINENT: Record<Continent, string[]> = {
  "North America": [
    "Canada",
    "United States",
    "Mexico",
  ],
  "South America": [
    "Argentina",
    "Brazil",
    "Chile",
    "Colombia",
    "Peru",
    "Uruguay",
  ],
  Europe: [
    "Austria",
    "Belgium",
    "Czechia",
    "Denmark",
    "Finland",
    "France",
    "Germany",
    "Ireland",
    "Italy",
    "Netherlands",
    "Norway",
    "Poland",
    "Portugal",
    "Spain",
    "Sweden",
    "Switzerland",
    "United Kingdom",
  ],
  Africa: [
    "Kenya",
    "Morocco",
    "Nigeria",
    "South Africa",
  ],
  Asia: [
    "India",
    "Indonesia",
    "Japan",
    "Philippines",
    "Singapore",
    "South Korea",
    "Taiwan",
    "Thailand",
    "Vietnam",
  ],
  Oceania: [
    "Australia",
    "New Zealand",
  ],
};

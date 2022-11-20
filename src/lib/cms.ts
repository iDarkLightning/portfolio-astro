import type { Project } from "../types/project";

const ENDPOINT = "https://graphql.datocms.com";

const fetchCms = async <T>(query: string): Promise<{ data: T }> => {
  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${import.meta.env.CMS_TOKEN}`,
    },
    body: JSON.stringify({
      query,
    }),
  });

  return response.json();
};

export const getAbout = () => {
  return fetchCms<{
    about: {
      personal: string;
      personalHeading: string;
      tech: string;
      techHeading: string;
    };
  }>(`
    query MyQuery {
      about {
        personal
        personalHeading
        tech
        techHeading
      }
    }`);
};

export const getProjects = () => {
  return fetchCms<{ allProjects: Project[] }>(`
    query MyQuery {
        allProjects {
            name
            description
            year
            link
        }
    }`);
};

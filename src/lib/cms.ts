const ENDPOINT = "https://graphql.datocms.com";

export type Project = {
  name: string;
  stack: string;
  description: string;
  images: { url: string }[];
  year: string;
};

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

export const getAboutMe = async () => {
  const { data } = await fetchCms<{ about: { aboutMe: string } }>(`
      query Query {
          about {
              aboutMe
              headshot {
                  url
              }
          }
      }
    `);

  return data.about;
};

export const getWork = async () => {
  return fetchCms<{ allProjects: Project[] }>(`
    query Query {
        allProjects {
            name
            stack
            images {
                url
            }
            description
            year
        }
    }
  `);
};

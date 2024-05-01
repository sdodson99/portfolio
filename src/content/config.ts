import { z, defineCollection, reference } from "astro:content";

const projectCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    url: z.string(),
    highlights: z.array(z.string()),
    skills: z.array(reference("skill")),
    logoUrl: z.string(),
    startDate: z.string().transform((value) => new Date(value)),
    endDate: z
      .string()
      .transform((value) => new Date(value))
      .nullable(),
  }),
});

const skillCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    logoUrl: z.string(),
  }),
});

export const collections = {
  project: projectCollection,
  skill: skillCollection,
};

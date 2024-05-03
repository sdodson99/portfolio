import { z, defineCollection, reference } from "astro:content";

const projectCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    description: z.string(),
    skills: z.array(reference("skill")),
    url: z.string(),
    sourceCodeUrl: z.string().optional(),
    previewImageUrl: z.string(),
    startDate: z.string().transform((value) => new Date(value)),
    endDate: z
      .string()
      .transform((value) => new Date(value))
      .nullable(),
    score: z.number(),
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

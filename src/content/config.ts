import { z, defineCollection, reference } from "astro:content";

const experienceCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    position: z.string(),
    location: z.string(),
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

const educationCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    degree: z.string(),
    location: z.string(),
    gpa: z.number(),
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
  experience: experienceCollection,
  education: educationCollection,
  skill: skillCollection,
};

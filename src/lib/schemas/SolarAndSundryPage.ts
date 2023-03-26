import z from 'zod'

export const SolarAndSundryPage = z.object({
	chapter_number: z.number().positive(),
	page_number: z.number().positive(),
	image_url: z.string().url(),
	name: z.string(),
	published_at: z.string().datetime(),
})

export type SolarAndSundryPage = z.infer<typeof SolarAndSundryPage>

import { z } from "zod";

const envVars = z.object({
  NEXT_PUBLIC_API_BACKEND_WEB_DJANGO: z.string().url(),
});

envVars.parse(process.env);

declare global {
    namespace NodeJS {
        interface ProcessEnv extends z.infer<typeof envVars> {}
    }
}
import { z } from "zod";

const envVars = z.object({
  NEXT_PUBLIC_API_BACKEND_WEB_DJANGO: z.string().url(),
  NEXT_PUBLIC_USERS: z.string().url(),
  NEXTAUTH_URL: z.string().url(),
  NEXTAUTH_SECRET: z.string()
});

envVars.parse(process.env);

declare global {
    namespace NodeJS {
        interface ProcessEnv extends z.infer<typeof envVars> {}
    }
}
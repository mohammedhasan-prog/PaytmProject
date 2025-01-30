import CredentialsProvider from "next-auth/providers/credentials";

const bcrypt = require("bcrypt");
import { db } from "@repo/db/client";

export const authProvider = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",

      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        // Add logic here to look up the user from the credentials supplied
        try {
          const hashPassword = bcrypt.hash(credentials.password, 10);
          try {
            const existingUser = await db.user.findFirst({
              where: {
                email: credentials.username,
              },
            });
            if (
              existingUser &&
              bcrypt.compare(credentials.password, hashPassword)
            ) {
              // Any object returned will be saved in `user` property of the JWT
              return existingUser;
            }
          } catch (error) {
            console.log(error, "error in finding user");
          }

          try {
            await db.user.create({
              data: {
                email: credentials.username,
                password: hashPassword,
              },
            });
          } catch (error) {
            console.log(error, "error in sign up");
          }
        } catch (error) {
          console.log(error, "error in hashing password");
        }

        // If you return null then an error will be displayed advising the user to check their details.

        return null;
      },
    }),
  ],
};

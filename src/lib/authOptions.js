import CredentialsProvider from "next-auth/providers/credentials";
import { collectionNames, dbConnect } from "./dbConnect";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "noobie@gmail.com",
        },
        password: { label: "Password", type: "password", placeholder: "*****" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;

        const user = await dbConnect(collectionNames.TEST_USER).findOne({
          email,
        });
        const isPasswordOk = await bcrypt.compare(password, user.password);
        console.log(user, isPasswordOk);

        return isPasswordOk && user ? user : null;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, token, user }) {
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
};

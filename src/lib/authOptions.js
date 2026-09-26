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

        return isPasswordOk ? user : null;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      // directly user thekeo data niye amra session e add kore dite pari, security er jnne amra kokhono user theke data add kori na, token theke data add kori
      if (token) {
        session.user.role = token.role;
      }

      return session;

      /*  {
    name: 'Jamal',
    email: 'user1@gmail.com',
    picture: 
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMGPWN9mzxhh6PvASEhZtGDnh0XpZ9rXdmAKgSnoq3pw&s=10',
    iat: 1790402783,
    exp: 1792994783,
    jti: '4e3a42e4-a32c-4ee4-a511-7cfc4022c64d'
  } */
    },
  },
};

/*  user:

  {
    _id: ObjectId { i0: 6993589, i1: 11607140, i2: 5428205, i3: 13469361 },
    name: 'Jamal',
    email: 'user1@gmail.com',
    contactNo: '0188754',
    password: '$2b$10$8aZS3MMOxxTo5EepmpekxuIDsR9pgQBRnbAS2KCe/Cu9djC/pOpTG',
    image: 
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMGPWN9mzxhh6PvASEhZtGDnh0XpZ9rXdmAKgSnoq3pw&s=10',
    bloodgroup: 'A+',
    role: 'user',
    createdAt: '2026-09-25T17:56:01.998Z'
  }
 account:

  {
    providerAccountId: undefined,
    type: 'credentials',
    provider: 'credentials'
  }
 profile:

  undefined                                                     
 email:

  undefined                                                     
 credentials:

  {
    csrfToken: 'ba68affac159210003475afff9195fb212c77f7c8c920386ae364e30a93c0423',
    email: 'user1@gmail.com',
  } */

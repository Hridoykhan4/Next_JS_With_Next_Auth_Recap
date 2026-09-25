import CredentialsProvider from "next-auth/providers/credentials";

const userList = [
  { email: "hablu@gmail.com", password: "1234" },
  { email: "dablu@gmail.com", password: "5678" },
  { email: "bablu@gmail.com", password: "8901" },
];

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

        const user = userList.find((user) => user.email === email);
        const isPasswordOk = user.password === password;
        console.log(user, isPasswordOk);
        
        return isPasswordOk && user ? user : null;
      },
    }),
  ],
};

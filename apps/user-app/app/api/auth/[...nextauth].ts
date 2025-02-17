import NextAuth from "next-auth";
import { authProvider } from "../../../lib/auth";

const handler = NextAuth(authProvider);

export { handler as GET, handler as POST };
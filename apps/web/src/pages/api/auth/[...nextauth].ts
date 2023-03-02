import prisma from '@/backend/lib/prisma';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import nextAuth, { NextAuthOptions } from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';
import { signIn } from 'next-auth/react';

export const authOptions: NextAuthOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  theme: {
    colorScheme: 'dark',
  },
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60,
    updateAge: 2 * 24 * 60 * 60,
  },
  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.user = { id: Number(user?.id) };

        await prisma.userLogging.create({
          data: {
            userId: Number(user?.id),
          },
        });
      }

      return token;
    },
    // // useSession에 관한 데이터
    async session({ session, token }) {
      session.user = {
        ...session.user,
        accessToken: token.accessToken as unknown as string,
        ...(token.user as { id: number }),
      };
      return session;
    },
    // // baseUrl로 리다이렉트
    async redirect({ url, baseUrl }) {
      if (url.startsWith('/')) {
        return `${baseUrl}${url}`;
      } else if (new URL(url).origin === baseUrl) {
        return `${baseUrl}`;
      }
      return baseUrl;
    },
  },
};
export default nextAuth(authOptions);

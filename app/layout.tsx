import LayoutLoader from "@/components/layout_loader";
import { Toast } from "@/components/toast";
import { useAppSelector } from "@/redux/hooks";
import ReduxProvider from "@/redux/provider";
import "@/styles/globals.css";
import { cn } from "@/utils/cn";
import { Metadata } from "next";

import { Lato } from "next/font/google";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fresh Mart",
  description: "Food selling website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(lato.variable, "overflow-hidden")}>
        <ReduxProvider>
          <LayoutLoader>{children}</LayoutLoader>
        </ReduxProvider>
        <Toast />
      </body>
    </html>
  );
}

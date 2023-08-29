import "./globals.css";
import { ContextProvider } from "@/contexts/providerState";
export const metadata = {
  title: "Hoobank",
  description: `The Next Generation Payment Method. Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ContextProvider>
        <body className="w-full overflow-x-hidden font-poppins bg-primary">
          {children}
        </body>
      </ContextProvider>
    </html>
  );
}

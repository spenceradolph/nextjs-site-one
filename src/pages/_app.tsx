import type { AppType } from "next/dist/shared/lib/utils";
import "../styles/globals.css";
import { api } from "../utils/trpc";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);

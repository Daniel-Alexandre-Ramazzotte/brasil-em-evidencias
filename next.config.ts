import type { NextConfig } from "next";
const config: NextConfig = { output: "standalone", trailingSlash: true, basePath: process.env.NEXT_PUBLIC_BASE_PATH || "", env: { NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH || "" } };
export default config;

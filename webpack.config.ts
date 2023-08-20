import path from "path";
import webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import {
  BuildEnv,
  BuildOptions,
  BuildPaths,
} from "./config/build/types/config";

export default (env: BuildEnv) => {
  const mode = env.mode || "development";
  const isDev = mode === "development";
  const PORT = env.port || 3000;

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
    build: path.resolve(__dirname, "build"),
  };

  const options: BuildOptions = {
    mode,
    paths,
    isDev,
    port: PORT,
  };

  const config: webpack.Configuration = buildWebpackConfig(options);

  return config;
};

import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildOptions, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
  const mode = env.mode || 'development';
  const isDev = mode === 'development';
  const PORT = env.port || 3000;
  const apiUrl = env.apiUrl || 'http://localhost:8000';

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    build: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src'),
  };

  const options: BuildOptions = {
    mode,
    paths,
    isDev,
    port: PORT,
    apiUrl,
    project: 'frontend',
  };

  const config: webpack.Configuration = buildWebpackConfig(options);

  return config;
};

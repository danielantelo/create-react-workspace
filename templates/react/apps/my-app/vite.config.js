import { defineConfig }from 'vite';
import react from '@vitejs/plugin-react';
import { loadEnv } from "vite";
import path from "path";

export default ({ mode }) => {
  process.env = {
    ...process.env,
    ...loadEnv(mode, path.join(process.cwd(), ".."), ""),
  };
  return defineConfig({
    plugins: [react()],
    server: {
      port: 3000,
    },
  });
};

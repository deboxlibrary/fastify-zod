// eslint-disable-next-line import/no-unresolved
import bundle from "@nurdiansyah/rollup";

const config = bundle(
  {
    input: [`src/index.ts`, `src/__tests__/generate-spec.fixtures.ts`],
    output: {
      dir: `build`,
    },
  },
  {
    cleanupOptions: {
      maxEmptyLines: 1,
      extensions: [`ts`, `js`],
    },
  },
);

export default config;

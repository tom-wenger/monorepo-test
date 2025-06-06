import { angularOutputTarget } from '@stencil/angular-output-target';
import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'core',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
      dir: 'components',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    angularOutputTarget({
      componentCorePackage: 'stencil-library',
      outputType: 'standalone',
      directivesProxyFile: '../angular-workspace/projects/angular-wrapper/src/lib/stencil-generated/components.ts',
      // directivesArrayFile: '../angular-workspace/projects/angular-wrapper/src/lib/stencil-generated/index.ts',
      inlineProperties: true,
    }),
  ],
  testing: {
    browserHeadless: 'shell',
  },
};

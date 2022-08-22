/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

// Add additional Yarn workspace package roots to the module map
// https://bit.ly/2LHHTP0
// const watchFolders = [
//   path.resolve(appDir, '..', 'node_modules'),
//   ...workspaces.filter(workspaceDir => !(workspaceDir === appDir)),
// ];

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};

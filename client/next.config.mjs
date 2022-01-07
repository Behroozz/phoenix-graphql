/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  // since next js is not auto refresh sometimes in docker we need this
  webpackDevMiddleware: (config) => {
    return {
      ...config,
      watchOptions: {
        poll : 300,
        ignored: ['./node_modules'],
      }
    }
  }
}

// import bundleAnalyzer from '@next/bundle-analyzer'

// const withBundleAnalyzer = bundleAnalyzer({
//   enabled: process.env.ANALYZE === 'true',
// })

// const nextConfig = withBundleAnalyzer({
//   poweredByHeader: false,
//   trailingSlash: true,
//   basePath: '',
//   // The starter code load resources from `public` folder with `router.basePath` in React components.
//   // So, the source code is "basePath-ready".
//   // You can remove `basePath` if you don't need it.
//   reactStrictMode: true,
//   // since next js is not auto refresh sometimes in docker we need this
//   webpackDevMiddleware: (config) => {
//     return {
//       ...config,
//       watchOptions: {
//         poll : 10
//       }
//     }
//   }
// });

export default nextConfig

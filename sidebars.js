/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  web3apiEvmSidebar: [
    {
      type: "autogenerated",
      dirName: "01-web3-data-api/evm",
    },
  ],
  web3apiAptosSidebar: [
    {
      type: "autogenerated",
      dirName: "01-web3-data-api/aptos",
    },
  ],
  web3apiSolanaSidebar: [
    {
      type: "autogenerated",
      dirName: "01-web3-data-api/solana",
    },
  ],
  streamsEvmSidebar: [
    {
      type: "autogenerated",
      dirName: "02-streams-api/evm",
    },
  ],
  streamsAptosSidebar: [
    {
      type: "autogenerated",
      dirName: "02-streams-api/aptos",
    },
  ],
  authenticationEvmSidebar: [
    {
      type: "autogenerated",
      dirName: "03-authentication-api/evm",
    },
  ],
  authenticationSolanaSidebar: [
    {
      type: "autogenerated",
      dirName: "03-authentication-api/solana",
    },
  ],
  authenticationAptosSidebar: [
    {
      type: "autogenerated",
      dirName: "03-authentication-api/aptos",
    },
  ],
  exampledappsSidebar: [
    {
      type: "autogenerated",
      dirName: "04-example-dapps",
    },
  ],
};

module.exports = sidebars;

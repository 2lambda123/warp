"use strict";(self.webpackChunkwarp_docs=self.webpackChunkwarp_docs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Welcome","href":"/warp/docs/intro","docId":"intro"},{"type":"category","label":"Getting Started","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Installation and Usage","href":"/warp/docs/getting_started/a-usage-and-installation","docId":"getting_started/a-usage-and-installation"},{"type":"link","label":"Warp Command Line Interface","href":"/warp/docs/getting_started/cli","docId":"getting_started/cli"},{"type":"link","label":"Inputs and Outputs","href":"/warp/docs/getting_started/inputs-and-outputs","docId":"getting_started/inputs-and-outputs"}],"href":"/warp/docs/category/getting-started"},{"type":"category","label":"Features","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Cairo Blocks","href":"/warp/docs/features/cairo_stubs","docId":"features/cairo_stubs"},{"type":"link","label":"Contract Factories","href":"/warp/docs/features/contract_factories","docId":"features/contract_factories"},{"type":"link","label":"Interface Call Forwarder","href":"/warp/docs/features/interface_call_forwarder","docId":"features/interface_call_forwarder"}],"href":"/warp/docs/category/features"},{"type":"category","label":"Solidity Equivalents","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"ABI Encode","href":"/warp/docs/solidity_equivalents/abi_encode","docId":"solidity_equivalents/abi_encode"},{"type":"link","label":"Addresses","href":"/warp/docs/solidity_equivalents/addresses","docId":"solidity_equivalents/addresses"},{"type":"link","label":"Transcoding Inputs for Starknet Contracts","href":"/warp/docs/solidity_equivalents/inputs","docId":"solidity_equivalents/inputs"}],"href":"/warp/docs/category/solidity-equivalents"},{"type":"category","label":"Contribution Guidelines","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Docs Cheatsheet","href":"/warp/docs/contribution_guidelines/cheatsheet","docId":"contribution_guidelines/cheatsheet"},{"type":"link","label":"Docs Contributor Guide","href":"/warp/docs/contribution_guidelines/contribution-guide","docId":"contribution_guidelines/contribution-guide"},{"type":"link","label":"Development Lifecycle","href":"/warp/docs/contribution_guidelines/development-lifecycle","docId":"contribution_guidelines/development-lifecycle"},{"type":"link","label":"Engineering Guidelines","href":"/warp/docs/contribution_guidelines/engineering-guidelines","docId":"contribution_guidelines/engineering-guidelines"}],"href":"/warp/docs/category/contribution-guidelines"},{"type":"link","label":"Get around unsupported features.","href":"/warp/docs/get_around_unsupported_features","docId":"get_around_unsupported_features"}]},"docs":{"contribution_guidelines/cheatsheet":{"id":"contribution_guidelines/cheatsheet","title":"Docs Cheatsheet","description":"On this page you\'ll find every markdown & mdx component used in our docs.","sidebar":"tutorialSidebar"},"contribution_guidelines/contribution-guide":{"id":"contribution_guidelines/contribution-guide","title":"Docs Contributor Guide","description":"Coming Soon(WIP)","sidebar":"tutorialSidebar"},"contribution_guidelines/development-lifecycle":{"id":"contribution_guidelines/development-lifecycle","title":"Development Lifecycle","description":"Coming Soon(WIP)","sidebar":"tutorialSidebar"},"contribution_guidelines/engineering-guidelines":{"id":"contribution_guidelines/engineering-guidelines","title":"Engineering Guidelines","description":"- Commit Conventions","sidebar":"tutorialSidebar"},"features/cairo_stubs":{"id":"features/cairo_stubs","title":"Cairo Blocks","description":"Cairo Blocks allow users to place their desired Cairo code into a transpiled contract.","sidebar":"tutorialSidebar"},"features/contract_factories":{"id":"features/contract_factories","title":"Contract Factories","description":"Contract factories are now supported by Warp. Contract factories work slightly differently on StarkNet as they do on Ethereum.","sidebar":"tutorialSidebar"},"features/interface_call_forwarder":{"id":"features/interface_call_forwarder","title":"Interface Call Forwarder","description":"This is a feature for the Warp transpiler to enable interaction between non-warped cairo contracts with a warped cairo contract (cairo file generated after transpilation of a solidity contract).","sidebar":"tutorialSidebar"},"get_around_unsupported_features":{"id":"get_around_unsupported_features","title":"Get around unsupported features.","description":"There is no algorithm to get around unsupported features, in most scenarios it is necessary to understand what the piece of code is doing. There are some unsupported features that are impossible to rewrite right now, understanding what it is expected to do when translated to Cairo may indicate that the logic can just be removed.","sidebar":"tutorialSidebar"},"getting_started/a-usage-and-installation":{"id":"getting_started/a-usage-and-installation","title":"Installation and Usage","description":"Installation","sidebar":"tutorialSidebar"},"getting_started/cli":{"id":"getting_started/cli","title":"Warp Command Line Interface","description":"Useful commands with the Warp Transpiler.","sidebar":"tutorialSidebar"},"getting_started/inputs-and-outputs":{"id":"getting_started/inputs-and-outputs","title":"Inputs and Outputs","description":"Inputs","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Welcome","description":"We are excited to announce the second version of Warp, now designed to transpile your Solidity code directly into Cairo.","sidebar":"tutorialSidebar"},"solidity_equivalents/abi_encode":{"id":"solidity_equivalents/abi_encode","title":"ABI Encode","description":"When transpiling solidity code which uses ABI encoding, cairo functions are generated to mimic this behaviour.","sidebar":"tutorialSidebar"},"solidity_equivalents/addresses":{"id":"solidity_equivalents/addresses","title":"Addresses","description":"An Ethereum address has a width of 160 bits, while a StarkNet address has a width of 251 bits. To support this change in address size, we had to modified the solc compiler. As a result, Warp\'s flavour of Solidity uses 256 bits for addresses instead of 160.","sidebar":"tutorialSidebar"},"solidity_equivalents/inputs":{"id":"solidity_equivalents/inputs","title":"Transcoding Inputs for Starknet Contracts","description":"StarkNet contracts, also known as zk-STARK contracts, are a type of smart contract that utilizes zero-knowledge proof technology to provide privacy and security to its users and these contracts are written in cairo language. Unlike traditional smart contracts written in Solidity, the inputs to a StarkNet contract are structurally different, making it necessary to understand how to interact with them effectively.","sidebar":"tutorialSidebar"}}}')}}]);
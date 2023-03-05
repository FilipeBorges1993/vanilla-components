<p align="center">
<img src="/documentation/src/public/symbol-gradient.svg" height="150">
</p>


<h1 align="center">
Vanilla Components
</h1>

<p align="center">
A lightweight, flexible & customizable ui library for Vue 3
<p>
  
<p align="center">
  <a href="https://vanilla-components.com">Documentation</a> | <a href="https://vanilla-components.com/guide/quick-start.html">Getting Started</a> | <a href="https://vanilla-components.com/guide/introduction.html">Why Vanilla Components?</a>
</p>

## Main Features ✨

- 🧪 **DX Focused** - Write less code & build faster
- 🛠 **Totally Configurable** - All components & props are fully customizable via a simple configuration file
- 🚦 **Variants Concept** - Create multiple variants of the same components. Ex: Error, Success, etc.
- 🍃 **Tailwind First** - Comes with a sane styling using Tailwind CSS Defaults
- 🦾 **Vue + TypeScript** - Vue 3 setup + Typescript
- 🟢 **Vue 3 Ready** - Vue 3
- 🌳 **Tree Shakable** - Import only the components that you need without worry about the size
- ✋ **ZERO css included** - Everything is configurable, means there is no CSS's to include at all
- 🌜 **Dark/White** - Pixel Perfect design with Dark & White mode included
- 🔌 **SSR Ready** - Built with SSR in mind

# Installation

Get started by installing the peer dependencies than, move on installing the package

Visit the [Documentation](https://vanilla-components.com/guide/quick-start.html) for more information.

Import the components as needed with the following:

```vue
import { Button } from '@flavorly/vanilla-components'
```

## Local & Documentation

For preview & Local testing please run the following on the root of the project.
After the commands you should have a local vite server up & running.

```bash
pnpm install
pnpm -r build
pnpm docs:dev
```

To start fresh, simply run the following commands

```bash
pnpm clean
pnpm install
pnpm -r build
pnpm docs:dev
```

### Lunr ( Algolia Alternative )

Lunr replaces the default Vitepress Algolia Search
To get the project index correctly do the following:

```
pnpm docs:index:build
```

## Credits

Thanks to: 
- [VariantJS](https://github.com/variantjs/vue) - Base Inspiration & Code - Thanks to Alfonsobries
- [VueUse](https://github.com/vueuse/vueuse) - How we could we not credit this?
- [RobertBoes](https://github.com/RobertBoes) - For all the time helping with Troubleshooting
- [Enzo Innocenzi](https://github.com/innocenzi) - For the inspiration & help!
- All my friends, that could stay online while i was whispering all day long! 

## Contribution

See [Contributing Guide](./CONTRIBUTING.md).

## License

[MIT](./LICENSE) License © 2021-Present [Pedro Martins](https://github.com/flavorly)


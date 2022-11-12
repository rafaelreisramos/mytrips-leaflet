import path from 'node:path'

const buildEslintCommand = (filenames) =>
  `next lint --max-warnings=0 --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

export default {
  '{src,app}/**/*.(tx|tsx|js|jsx)': (filenames) => [
    `next lint --max-warnings=0 --fix --file ${filenames
      .map((f) => path.relative(process.cwd(), f))
      .join(' --file ')}`,
  ],
}

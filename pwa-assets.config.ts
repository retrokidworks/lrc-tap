import { defineConfig, minimal2023Preset } from '@vite-pwa/assets-generator/config'

// 설치용 아이콘은 public/favicon.svg 하나에서 빌드 때 만든다. 마스커블·애플 아이콘의 여백을
// 기본(흰색) 대신 아이콘 바탕색으로 채워야 설치 화면에서 흰 테두리가 생기지 않는다.
const background = '#0b0f19'

export default defineConfig({
  headLinkOptions: { preset: '2023' },
  preset: {
    ...minimal2023Preset,
    maskable: { ...minimal2023Preset.maskable, resizeOptions: { background } },
    apple: { ...minimal2023Preset.apple, resizeOptions: { background } },
  },
  images: ['public/favicon.svg'],
})

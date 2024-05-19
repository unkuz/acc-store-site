import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9',
      },
      colors:{
        c1: '#fff',
        'sc-thumb': '#00b3ff',
        'sc-thumb-hover': '#ff0088',
      }
    },
  },
}

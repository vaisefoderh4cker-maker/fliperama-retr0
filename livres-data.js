/* Jogos grátis e homebrew com licença livre.
   Cada arquivo é baixado do repositório oficial do autor (ou de uma cópia
   que inclui a licença) e roda no modo do site (EmulatorJS).
   Este arquivo guarda somente endereços e créditos: nenhuma ROM é
   armazenada neste repositório. */
window.LIVRES = {
  plataformas: [
    { id: 'nes', nome: 'NES' },
    { id: 'web', nome: 'Web' }
  ],
  jogos: [
    {
      id: 'minecraft-classic',
      titulo: 'Minecraft Classic',
      ano: 2009,
      plataforma: 'web',
      web: 'https://classic.minecraft.net/',
      autor: 'Mojang',
      licenca: 'Web',
      fonte: 'https://classic.minecraft.net/',
      desc: 'A versão clássica gratuita do Minecraft, jogada direto no navegador pelo site oficial da Mojang.'
    },
    {
      id: 'minekart-madness',
      titulo: 'Minekart Madness',
      ano: 2022,
      plataforma: 'nes',
      core: 'nes',
      url: 'https://raw.githubusercontent.com/DChevrier1/GitHub-Universe-Badge-NES/main/apps/nes/roms/minekart-madness.nes',
      autor: 'Matthew Hughson',
      licenca: 'MIT',
      fonte: 'https://github.com/DChevrier1/GitHub-Universe-Badge-NES/blob/main/apps/nes/licenses/minekart-MIT.txt',
      desc: 'Corra de carrinho por minas e cavernas, desviando de obstáculos em um jogo de NES feito para a competição do NESdev.'
    },
    {
      id: '2048-nes',
      titulo: '2048 (NES)',
      ano: 2022,
      plataforma: 'nes',
      core: 'nes',
      url: 'https://raw.githubusercontent.com/DChevrier1/GitHub-Universe-Badge-NES/main/apps/nes/roms/2048.nes',
      autor: 'Justin Gregory',
      licenca: 'MIT',
      fonte: 'https://github.com/DChevrier1/GitHub-Universe-Badge-NES/blob/main/apps/nes/licenses/2048-MIT.txt',
      desc: 'A versão para NES do quebra-cabeça 2048: junte os números iguais e chegue ao bloco 2048.'
    },
    {
      id: 'falling',
      titulo: 'Falling',
      ano: 2019,
      plataforma: 'nes',
      core: 'nes',
      url: 'https://cdn.jsdelivr.net/gh/xram64/falling-nes@master/falling.nes',
      autor: 'Jesse Williams (tragicmuffin)',
      licenca: 'MIT',
      fonte: 'https://github.com/xram64/falling-nes',
      desc: 'Desvie dos obstáculos que caem e sobreviva o máximo que puder neste jogo simples e viciante para NES.'
    },
    {
      id: 'cyloid',
      titulo: 'Cyloid',
      ano: 2026,
      plataforma: 'atari2600',
      core: 'atari2600',
      url: 'https://cdn.jsdelivr.net/gh/keithadler/cyloid@main/cyloid.rom',
      autor: 'Keith Adler',
      licenca: 'MIT',
      fonte: 'https://github.com/keithadler/cyloid',
      desc: 'Tank shooter de 8 fases para Atari 2600: destrua os alvos e enfrente o chefe kamikaze.'
    },
    {
      id: 'pipes-2600',
      titulo: 'Pipes 2600',
      ano: 2014,
      plataforma: 'atari2600',
      core: 'atari2600',
      url: 'https://cdn.jsdelivr.net/gh/albf/pipes-2600@master/pipe2600.bin',
      autor: 'Alexandre Luiz Brisighello Filho (albf)',
      licenca: 'MIT',
      fonte: 'https://github.com/albf/pipes-2600',
      desc: 'Estilo Pipe Dreams no Atari 2600: conecte os canos do início ao fim antes que o tempo acabe.'
    }
  ]
};

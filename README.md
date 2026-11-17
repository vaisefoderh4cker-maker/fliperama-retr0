# Fliperama Retrô

Página local para jogar clássicos no navegador: catálogo com **29.374 jogos** de **19 plataformas** (Arcade, MS-DOS, Mega Drive, Super Nintendo, NES, Atari 2600/5200/7800, TurboGrafx-16, ColecoVision, WonderSwan e mais), player do Internet Archive, **jogos grátis e homebrew com licença aberta**, aba de **Nintendo DS** e **Meus jogos** (arquivos seus de PS1, Nintendo 64, NES, SNES, Game Boy, GBA, Mega Drive…) e **sala online com código** para jogar junto.

Não é preciso instalar nada. Basta abrir no navegador (Chrome, Edge ou Firefox atualizados) e ter internet para o acervo.

## Recursos

- **Acervo**: 29.374 jogos emulados na hora pelo Internet Archive, com capa, busca, filtro por plataforma, ordenação e favoritos.
- **Jogos grátis (filtro Grátis)**: 5 jogos homebrew com licença aberta (MIT) — Minekart Madness, 2048, Falling (NES) e Cyloid, Pipes 2600 (Atari 2600) — que baixam o arquivo do repositório oficial do autor e rodam no site, com **Teclas** para trocar controles.
- **Seleção de plataforma**: chips rápidos das plataformas mais usadas e o botão **Ver todas as plataformas**, que abre a lista completa agrupada por fabricante (Fliperama/PC, Nintendo, Sega, Atari, NEC, Bandai, Coleco e outras).
- **Super Nintendo**: 211 títulos jogáveis direto na página.
- **Meus jogos**: rode no navegador os arquivos que você já tem — PlayStation 1, Nintendo 64, NES, SNES, Game Boy/GBC, Game Boy Advance, Mega Drive, Master System, Game Gear, Atari, PC Engine, Neo Geo Pocket, Virtual Boy e Arcade. Nada é enviado nem guardado (o arquivo só fica na memória da aba). Xbox e PlayStation 2 em diante não rodam no navegador.
- **Nintendo DS**: você escolhe o seu arquivo `.nds`; o jogo roda no navegador com EmulatorJS e fica guardado apenas nele (IndexedDB).
- **Sala online**: o anfitrião abre o jogo do próprio arquivo, recebe um **código de 6 caracteres** e transmite a tela para até 3 amigos, que controlam pelo teclado (estilo "Remote Play", conexão ponto a ponto).
- **Teclas em qualquer jogo**: o botão **Teclas** troca cada tecla do jogo — vale para o Nintendo DS, a Sala online, a aba **Meus jogos**, os jogos **grátis** e **todos os jogos do acervo** que rodam no modo do site (Arcade, Mega Drive, Super Nintendo, Atari 2600/5200/7800, TurboGrafx-16, WonderSwan e Lynx).
- **Modo do site / Archive**: no player, o botão alterna entre **Rodar no site** (emulador na própria página, com teclas trocáveis) e **Rodar no Archive** (player original do Internet Archive). A escolha fica salva. Plataformas sem core no site (MS-DOS, ColecoVision, Odyssey², Channel F, Super Cassette Vision, Astrocade, CreatiVision, Aquarius, Mega Duck) usam o Archive automaticamente.
- **Controle USB/Bluetooth**: funciona como teclado no DS e na Sala online (inclusive no convidado); nos jogos do acervo em modo do site, o próprio emulador usa o controle direto.

## Como abrir

1. **Windows**: dê dois cliques em `Abrir Fliperama.cmd`.
2. Ou abra o arquivo `index.html` no navegador.
3. Opcional — servidor local (facilita testes e evita bloqueios de `file://`):
   ```
   npx serve .
   ```
   ou
   ```
   python -m http.server 8000
   ```
   e acesse `http://localhost:8000`.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub (pode ser público).
2. Envie o projeto (veja os comandos abaixo ou use o GitHub Desktop / "Add file → Upload files").
3. No repositório, abra **Settings → Pages**.
4. Em **Source**, escolha **Deploy from a branch**, branch **main** e pasta **/(root)**. Salve.
5. Em alguns instantes o site fica em `https://SEU-USUARIO.github.io/NOME-DO-REPO/`.

Comandos para enviar pela primeira vez:

```bash
git init -b main
git add .
git commit -m "Site Fliperama Retrô"
git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
git push -u origin main
```

Observações:

- O `index.html` precisa continuar na raiz do repositório (é o arquivo que o Pages abre).
- O `jogos-data.js` tem cerca de 2 MB — dentro do limite do GitHub.
- O acervo continua dependendo de internet: os jogos são transmitidos pelo Internet Archive.

## Jogos grátis e homebrew (licença aberta)

Na aba **Acervo**, a fileira de filtros tem o chip **Grátis** (também estão no topo da lista e na plataforma **NES**). São jogos feitos por fãs/desenvolvedores independentes e publicados com licença aberta, então podem ser baixados e jogados legalmente:

| Jogo | Plataforma | Autor | Licença |
| --- | --- | --- | --- |
| Minekart Madness | NES | Matthew Hughson | MIT |
| 2048 (NES) | NES | Justin Gregory | MIT |
| Falling | NES | Jesse Williams (tragicmuffin) | MIT |
| Cyloid | Atari 2600 | Keith Adler | MIT |
| Pipes 2600 | Atari 2600 | Alexandre Brisighello (albf) | MIT |

Como jogar: clique no cartão → o jogo baixa o arquivo do repositório oficial do autor (GitHub via jsDelivr/raw) e abre no emulador da página. O rodapé do cartão mostra **Grátis · MIT** e o link **Licença e fonte** abre a página do projeto, com o texto da licença. O botão **Teclas** funciona normalmente.

Critérios da lista: o jogo precisa ter o arquivo completo publicável, licença explícita (MIT) e um endereço oficial que permita download direto pelo navegador. Títulos sem licença clara ou hospedados só em páginas que bloqueiam download direto ficaram de fora. **O repositório guarda apenas os links e os créditos — nenhum arquivo de jogo.**



**Por que não tem um catálogo de PlayStation, Xbox e Nintendo?** Os jogos comerciais desses consoles são protegidos por direitos autorais: não é legal baixá-los nem distribuí-los, e o site não hospeda jogos. A forma legal é rodar **uma cópia que você mesmo fez** do seu jogo (do seu cartucho ou disco) ou comprar/jogar pelos serviços oficiais. Xbox (e PlayStation 2 em diante) não roda no navegador — use o console ou o serviço oficial.

Como jogar o seu arquivo:

1. Abra a aba **Meus jogos**.
2. Encontre o console no cartão (ex.: **PlayStation 1**, **Nintendo 64**, **NES**).
3. Clique em **Escolher arquivo** e selecione o arquivo do jogo no seu computador (ex.: `.nes`, `.sfc`, `.gba`, `.n64`, `.cue`/`.bin`).
4. Espere o emulador abrir e **clique dentro da tela** para o teclado valer.
5. Use **Teclas** para trocar as teclas e **Trocar jogo** para voltar à lista.

Detalhes:

- O arquivo **não é enviado nem guardado** em servidor nenhum; ele fica só na memória da aba (ao trocar de aba ou fechar a página, é preciso escolher de novo).
- **PlayStation 1**: prefira o arquivo `.cue` quando vier junto do `.bin`. Na maioria dos jogos o emulador dispensa BIOS.
- **Nintendo 64**: teclado/controle no menu de opções do emulador (engrenagem).
- **Atari 2600/7800**: arquivos `.a26`/`.a78` ou `.bin`.
- **Arcade**: use o `.zip` do jogo; `V` insere ficha e `Enter` é Start.

## Sala online

1. Abra a aba **Sala online**.
2. **Anfitrião**: "Escolher jogo e criar sala" → selecione o arquivo do jogo → espere abrir → copie o código de 6 caracteres.
3. **Convidado**: informe o código e clique em **Entrar**; depois clique na tela para o teclado valer.
4. Para 2 jogadores ao mesmo tempo, mapeie o **jogador 2** no menu de controles do emulador (engrenagem) para teclas que o convidado vai usar.

Detalhes:

- A imagem e o som saem do PC do anfitrião direto para os convidados (WebRTC). Nada é gravado nem enviado a servidores de jogo; o código é só o endereço da sala (PeerJS).
- O convidado **não precisa** do arquivo do jogo; apenas o anfitrião.
- Jogos do acervo (Internet Archive) **não** entram em sala — eles rodam dentro do site do Archive.
- Em redes muito restritas a conexão direta pode falhar; nesse caso use Radmin VPN ou ZeroTier entre os participantes.

## Controles

- **Arcade**: setas, `Ctrl`/`Alt` para os botões e `Espaço` para inserir ficha.
- **Consoles**: setas + `Z`/`X` (e `A`/`S` para os outros botões); `Enter` costuma ser Start.
- **MS-DOS**: mouse e teclado (clique na tela para capturar o mouse).
- **Nintendo DS**: mouse/toque na tela de baixo; setas, `Z`/`X`, `A`/`S`, `Enter` (Start), `V` (Select).
- **PlayStation 1 / Nintendo 64 / Game Boy / GBA / Mega Drive (Meus jogos)**: setas + `Z`/`X`, `A`/`S` (X/Y e L/R), `Enter` (Start), `V` (Select). No N64 e no PS1, ajuste o controle no menu de opções do emulador.

### Trocar as teclas (qualquer jogo)

1. Abra o jogo: na aba **Acervo**, clique no jogo; na aba **Nintendo DS** ou **Meus jogos**, escolha o seu arquivo.
2. Se o jogo do acervo estiver rodando no Archive, clique em **Rodar no site** no topo do player — o **Teclas** só aparece no modo do site.
3. Clique em **Teclas**.
4. Em cada ação (Cima, Baixo, A, B, Start...), clique em **Mudar** e pressione a tecla nova. `Esc` cancela.
5. As teclas ficam salvas neste navegador e valem para todos os jogos do acervo em modo do site, para o DS e para **Meus jogos**; **Restaurar padrão** volta ao original.
6. Depois de trocar, clique na tela do jogo uma vez para o teclado valer. `Esc` (com o jogo em foco) fecha o player.

Padrão: setas para direcional, `Z` (A), `X` (B), `A` (X), `S` (Y), `Q`/`E` (L/R), `Enter` (Start, que no Arcade é o **Start**) e `V` (Select, que no Arcade insere a **ficha**).

### Modo do site e modo do Archive

- **Rodar no site**: o emulador roda dentro da página (EmulatorJS) e o jogo é baixado na hora do Internet Archive pelo proxy oficial deles. É o único modo em que o **Teclas** funciona.
- **Rodar no Archive**: abre o player público do Archive dentro do player; as teclas são as do próprio Archive, sem troca.
- O botão alterna os modos e a escolha é lembrada no navegador. Se o jogo falhar no modo do site, o site avisa e você pode trocar para o Archive.
- No modo do site, o controle USB/Bluetooth é usado direto pelo emulador (menu de opções → **Configurações do Controle**, dentro do jogo).

### Controle USB/Bluetooth (DS e Sala online)

- Conecte o controle e aperte um botão; o painel **Teclas** mostra o nome do controle detectado.
- Direcional/analógico esquerdo, A/B/X/Y, LB/RB e Start/Select funcionam como as teclas mapeadas — no DS, no anfitrião e também no convidado (o convidado envia os comandos ao anfitrião).
- Se o controle já responder sozinho dentro do emulador e os comandos saírem duplicados, desmarque **“Usar controle USB/Bluetooth como teclas”**.
- Controles precisam ser reconhecidos pelo navegador: aperte um botão com a página aberta; no Windows, verifique em `joy.cpl` se o controle aparece.

## Estrutura

```
index.html          # o site (interface, busca, abas, player e sala online)
siteplayer.html     # página do modo do site: emulador EmulatorJS + teclas trocáveis
jogos-data.js       # catálogo gerado a partir de metadados do Internet Archive
livres-data.js      # jogos grátis/homebrew com licença aberta (apenas links e créditos, sem ROMs)
Abrir Fliperama.cmd # atalho do Windows para abrir o site
```

## Aviso legal

Este projeto **não hospeda nem distribui jogos** — o repositório não contém ROMs, BIOS nem qualquer arquivo de jogo. O acervo apenas incorpora o player público do Internet Archive, ou, no modo do site, baixa o arquivo direto do Internet Archive pelo proxy oficial deles (`cors.archive.org`) e emula na própria página. Os **jogos grátis/homebrew** também não ficam aqui: o site baixa o arquivo do repositório oficial de cada autor (GitHub, via `cdn.jsdelivr.net`/`raw.githubusercontent.com`) no momento do uso, e o `livres-data.js` guarda somente endereço e créditos. As abas **Nintendo DS**, **Meus jogos** e **Sala online** executam somente arquivos fornecidos pelo próprio usuário, localmente no navegador — nada é enviado ou armazenado em servidor. Os catálogos comerciais de PlayStation, Xbox e Nintendo não são incluídos justamente por direitos autorais. Não inclua arquivos de jogos (ROMs) neste repositório.

O código está disponível para uso pessoal; não há licença definida. Se quiser abrir o projeto, adicione uma licença (por exemplo, MIT).

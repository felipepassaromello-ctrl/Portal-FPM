# Skills de design de interface

Cópia das skills de [emilkowalski/skills](https://github.com/emilkowalski/skills) (commit `c8a7962`, licença MIT em
`LICENSE-emilkowalski-skills`). O Claude Code carrega estas pastas sozinho quando trabalha neste repositório e usa cada
skill quando a tarefa combina com a descrição dela. Também dá para chamar pelo nome, por exemplo `/break-ui`.

Ficaram só as que servem para um site em HTML, CSS e JavaScript como o portal:

| Skill | Para quê |
| --- | --- |
| `emil-design-eng` | Filosofia geral de acabamento: curvas, durações, toque, detalhes invisíveis |
| `apple-design` | Princípios de interface da Apple traduzidos para a web: resposta, materiais, tipografia |
| `mobile-native` | Fazer o portal parecer app no iPhone: toque, zoom em campos, áreas seguras, barra de status |
| `animate` | Criar uma animação nova com as decisões na ordem certa |
| `review-animations` | Revisar animações com régua alta |
| `improve-animations` | Auditar todas as animações e gerar planos de melhoria |
| `find-animation-opportunities` | Achar onde movimento ajudaria e onde não deve existir |
| `animation-performance` | Animação travando ou perdendo quadros |
| `animation-vocabulary` | Nome certo para o efeito que você está descrevendo |
| `choreograph` | Coordenar vários elementos que se mexem juntos: ordem, sobreposição e o que fica parado |
| `remove-animations` | Tirar animação que só atrapalha (em atalho de teclado, dado que muda toda hora, enfeite) |
| `break-ui` | Testar a interface com dados extremos: nomes enormes, listas vazias, números grandes |
| `prototype` | Montar várias versões de um componente para comparar |
| `pick-ui-library` | Escolher biblioteca de front-end (só quando chamada) |

Ficaram de fora as de Swift, React Native/Expo e da biblioteca Sonner, que o portal não usa.

Para atualizar, na raiz do repositório (o `skills-lock.json` registra a origem e a versão de cada uma):

```bash
npx skills@latest add emilkowalski/skills -a claude-code -y --copy \
  -s animate animation-performance animation-vocabulary apple-design break-ui choreograph emil-design-eng \
     find-animation-opportunities improve-animations mobile-native pick-ui-library prototype remove-animations review-animations
```

Depois troque o commit nesta página.

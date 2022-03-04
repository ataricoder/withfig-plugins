const plugin: Fig.Plugin = {
  name: "navi",
  type: "shell",
  description: "Navi plugin for ZSH",
  github: "icatalina/zsh-navi-plugin",
  shells: ["zsh"],
  installation: {
    source: "github",
  },
};

export default plugin;
export interface Language {
  name: string;
  iconName: string;
  className?: string;
}

export const languages: Record<string, Language> = {
  linux: {
    name: "Linux",
    iconName: "linux",
  },
  wireshark: {
    name: "Wireshark",
    iconName: "wireshark",
  },
  metasploit: {
    name: "Metasploit",
    iconName: "metasploit",
  },
  owasp: {
    name: "OWASP",
    iconName: "owasp",
  },
  zap: {
    name: "OWASP ZAP",
    iconName: "zap",
  },
  grafana: {
    name: "Grafana",
    iconName: "grafana",
  },
  html: {
    name: "HTML 5",
    iconName: "html",
  },
};

export const getLanguage = (lang: string): Language => {
  return languages[lang] || languages.html;
};
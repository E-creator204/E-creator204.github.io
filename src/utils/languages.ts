export interface Language {
  name: string;
  iconName: string;
  className?: string;
  darkIcon?: boolean;
}

export const languages: Record<string, Language> = {
  linux: {
    name: "Linux",
    iconName: "linux",
    darkIcon: true,
  },
  wireshark: {
    name: "Wireshark",
    iconName: "wireshark",
    darkIcon: true,
  },
  metasploit: {
    name: "Metasploit",
    iconName: "metasploit",
    darkIcon: true,
  },
  owasp: {
    name: "OWASP",
    iconName: "owasp",
    darkIcon: true,
  },
  zap: {
    name: "OWASP ZAP",
    iconName: "zap",
    darkIcon: true,
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
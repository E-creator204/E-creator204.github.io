export interface Language {
  name: string;
  iconName: string;
  className?: string;
  darkIcon?: boolean;
}

export const languages: Record<string, Language> = {
  linux: {
    name: "Linux",
    iconName: "simple-icons:linux",
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
  mikrotik: {
    name: "MikroTik",
    iconName: "simple-icons:mikrotik",
    darkIcon: true,
  },
  windows: {
    name: "Windows Server",
    iconName: "simple-icons:windows",
    darkIcon: true,
  },
  openvpn: {
    name: "OpenVPN",
    iconName: "simple-icons:openvpn",
    darkIcon: true,
  },
  elastic: {
    name: "Elastic",
    iconName: "simple-icons:elastic",
  },
  kibana: {
    name: "Kibana",
    iconName: "simple-icons:kibana",
  },
  docker: {
    name: "Docker",
    iconName: "simple-icons:docker",
  },
};

export const getLanguage = (lang: string): Language => {
  return languages[lang] || languages.html;
};
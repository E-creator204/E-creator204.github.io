export interface Language {
  name: string;
  iconName: string;
  className?: string;
}

export const languages: Record<string, Language> = {
  cloudlinux: {
    name: "CloudLinux",
    iconName: "cloudlinux",
  },
  cpanel: {
    name: "cPanel",
    iconName: "cpanel",
  },
  "kali-linux": {
    name: "Kali Linux",
    iconName: "kali-linux",
  },
  nessus: {
    name: "Nessus",
    iconName: "nessus",
  },
  html: {
    name: "linux",
    iconName: "linux",
  },
  nmap: {
    name: "Nmap",
    iconName: "nmap",
  },
  openssl: {
    name: "OpenSSL",
    iconName: "openssl",
  },
  owasp: {
    name: "OWASP",
    iconName: "owasp",
  },
};

export const getLanguage = (lang: string): Language => {
  return languages[lang] || languages.linux;
}; 
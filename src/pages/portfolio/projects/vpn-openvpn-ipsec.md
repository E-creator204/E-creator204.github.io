---
layout:  /src/layouts/ProjectLayout.astro
title: 'VPN Empresarial con OpenVPN + IPsec'
pubDate: 2025-11-12
description: 'Servidor VPN con doble capa de cifrado (OpenVPN sobre IPsec en modo transporte) para proteger comunicaciones remotas de extremo a extremo.'
team: 'Blue Team'
category: 'Redes y Cifrado'
languages: ["linux", "openvpn", "wireshark"]
image:
  url: "/images/projects/vpn-openvpn-ipsec-cover.webp"
  alt: "Terminal mostrando la conexión de un cliente OpenVPN establecida exitosamente."
--- 

**VPN Empresarial con OpenVPN + IPsec** es la implementación de un servidor VPN con **doble capa de cifrado**, combinando OpenVPN para proteger la capa de aplicación e IPsec para proteger la capa de red, forzando que el tráfico de OpenVPN solo se transmita a través de un túnel IPsec previamente establecido.

## 🧩 Arquitectura implementada

- **Ubuntu Server** como sistema base
- **OpenVPN** configurado con TLS y cifrado **AES-256-GCM**
- **IPsec** en modo transporte con el protocolo **ESP** (AES-256-SHA256)
- Infraestructura de clave pública (**PKI**) para autenticación segura de clientes
- Reglas de firewall (**iptables**) para forzar la encapsulación del tráfico

## 🔐 Enfoque de seguridad

- El servidor **rechaza** cualquier tráfico OpenVPN que no viaje encapsulado dentro de un túnel IPsec activo, añadiendo una capa adicional de protección contra intercepción
- Se generó y gestionó la PKI para la autenticación de clientes mediante certificados
- Se verificó el estado de los servicios (`ipsec status`, `systemctl status openvpn`) y las reglas de firewall aplicadas

![Estado del servicio IPsec mostrando las interfaces y configuración activa](/images/projects/vpn-openvpn-ipsec-1.webp)

## 🕵️ Validación con Wireshark

Se realizaron capturas de tráfico con **Wireshark** para comprobar que los datos transmitidos eran completamente ilegibles para un posible atacante, confirmando que el cifrado doble (TLS + ESP) funcionaba correctamente de extremo a extremo.

![Captura de conexión de un cliente OpenVPN a través del túnel cifrado](/images/projects/vpn-openvpn-ipsec-2.webp)

## 💡 Tecnologías utilizadas

- Ubuntu Server
- OpenVPN
- IPsec (strongSwan)
- PKI / Certificados TLS
- iptables
- Wireshark

## 🎯 Objetivo

Instalar y configurar un servidor VPN robusto que garantice comunicaciones seguras de extremo a extremo, especialmente relevante para el acceso remoto a recursos internos de una organización a través de redes no confiables.

🚀 *Desarrollado por Eduardo Vásquez junto a Yareth Cabuyales, Isaac Moreno y Fabián Pinto — Materia: Fundamentos de Criptografía.*

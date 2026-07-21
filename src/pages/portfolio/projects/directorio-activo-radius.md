---
layout:  /src/layouts/ProjectLayout.astro
title: 'Directorio Activo / RADIUS'
pubDate: 2026-04-16
description: 'Implementación de autenticación Wi-Fi empresarial con FreeRADIUS, Active Directory y MikroTik Hotspot, incluyendo análisis de seguridad y superficie de ataque.'
team: 'Blue Team'
category: 'Autenticación y Control de Acceso'
languages: ["windows", "linux", "mikrotik"]
image:
  url: "/images/projects/directorio-activo-radius.webp"
  alt: "Diagrama de la arquitectura de autenticación WPA2-Enterprise con FreeRADIUS, Active Directory y MikroTik."
--- 

**Directorio Activo / RADIUS** es un proyecto de implementación de autenticación Wi-Fi empresarial basado en el estándar **802.1X**, desarrollado como examen final de la materia de Seguridad en Redes Inalámbricas en el ITSE.

El proyecto reemplaza el modelo tradicional WPA2-PSK (contraseña compartida) por un esquema de autenticación basado en **identidad individual**, donde cada usuario se autentica con sus credenciales de dominio corporativo, incrementando significativamente la seguridad, la trazabilidad y la capacidad de auditoría de la red.

## 🧩 Arquitectura implementada

- **Windows Server 2022** como controlador de dominio (`eviry.local`), con roles AD DS, DNS y KDC Kerberos
- **FreeRADIUS** sobre Ubuntu Server, delegando la autenticación al AD mediante `ntlm_auth` (Samba/Winbind)
- **MikroTik RouterOS** como gateway y servidor de portal cautivo (Hotspot), actuando como cliente RADIUS
- Segmentación de red: LAN troncal (192.168.8.0/24) y red Hotspot Wi-Fi (192.168.5.0/24)

## 🔐 Enfoque de seguridad

El proyecto no se limitó a la implementación funcional, sino que incluyó un análisis de seguridad completo:

- **Comparación WPA2-PSK vs WPA2-Enterprise**: evaluación de credenciales, revocación de acceso, trazabilidad y resistencia a ataques
- **Mitigación de ataques**: Evil Twin, ataques de diccionario, credential stuffing, movimiento lateral y replay attacks
- **Análisis de disponibilidad** bajo la tríada CIA ante una posible caída del servidor RADIUS
- **Superficie de ataque** de cada componente (MikroTik, FreeRADIUS, Active Directory, clientes Wi-Fi)
- **Auditoría de autenticación**: revisión de logs de FreeRADIUS para trazabilidad y detección de intrusiones
- **Evaluación de riesgos** con matriz de amenazas, impacto y mitigaciones propuestas por activo

## 💡 Tecnologías utilizadas

- Windows Server 2022 (Active Directory, DNS, Kerberos)
- FreeRADIUS
- Samba / Winbind
- MikroTik RouterOS
- Ubuntu Server
- Kali Linux (para pruebas de control de acceso)

## ✅ Pruebas realizadas

Se validó el correcto funcionamiento del sistema mediante pruebas de control de acceso antes y después de la autenticación: sin credenciales, el firewall del Hotspot bloquea todo el tráfico (`Destination Net Prohibited`); tras autenticarse contra el AD, FreeRADIUS responde `Access-Accept` y el usuario obtiene acceso completo a la red.

## 🎯 Objetivo

Demostrar la implementación práctica de una arquitectura de autenticación Wi-Fi empresarial robusta, aplicando principios de identidad como perímetro de seguridad, mínimo privilegio, trazabilidad y no repudio — habilidades directamente aplicables a entornos corporativos reales.

🚀 *Desarrollado por Eduardo Vásquez junto a Victor Calderón, Isaac Moreno, Yasser Patiño y Rodolfo Vásquez.*

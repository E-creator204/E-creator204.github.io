---
layout:  /src/layouts/ProjectLayout.astro
title: 'Honeypot con T-Pot'
pubDate: 2026-02-12
description: 'Despliegue de un honeypot multi-servicio con T-Pot para atraer, capturar y analizar ataques reales en un entorno controlado.'
team: 'Blue Team'
category: 'Detección y Monitoreo'
languages: ["linux", "docker", "elastic", "kibana"]
image:
  url: "/images/projects/honeypot-tpot-cover.webp"
  alt: "Dashboard de Kibana mostrando estadísticas de ataques capturados por el honeypot."
--- 

**Honeypot con T-Pot** es un proyecto de tecnología de engaño (*deception technology*) enfocado en desplegar un honeypot multi-servicio para atraer, capturar y analizar patrones de ataque en un entorno de laboratorio.

## 🧩 Implementación

- Despliegue de **T-Pot** (framework de honeypots basado en Docker) con instalación completa, incluyendo múltiples honeypots simultáneos
- Stack de análisis con **Elasticsearch** y **Kibana** para visualización de logs y estadísticas en tiempo real
- Automatización completa del despliegue: T-Pot gestiona la descarga de Docker, configuración de redes y despliegue de contenedores
- Acceso remoto seguro mediante SSH en puerto no estándar

## 📊 Resultados del ataque simulado

Tras lanzar un ataque de prueba contra el honeypot, se registraron:

- **4,000 intentos** de acceso capturados
- Ataques concentrados exclusivamente en el honeypot **Cowrie** (SSH/Telnet)
- Análisis de picos e incrementos de tráfico malicioso
- Identificación de *fingerprints* de los clientes atacantes

![Panel de Kibana mostrando el volumen de ataques registrados por el honeypot](/images/projects/honeypot-tpot-1.webp)

## 🧠 Fundamentos teóricos aplicados

Como parte del proyecto se documentaron conceptos clave para el uso responsable de honeypots en producción:

- Diferencias entre honeypots de baja y alta interacción (ventajas y desventajas de cada uno)
- Uso de un inventario de activos para decidir el posicionamiento estratégico del honeypot
- Métricas de efectividad (tasa de detección, falsos positivos, tiempo de permanencia del atacante, entre otras)
- Consideraciones legales y éticas antes de desplegar un honeypot
- Integración de logs de honeypot con un SIEM (ingestión, normalización y generación de alertas)

![Vista de Kibana con logs detallados de las conexiones capturadas](/images/projects/honeypot-tpot-2.webp)

## 💡 Tecnologías utilizadas

- T-Pot (framework de honeypots)
- Docker
- Elasticsearch
- Kibana
- Cowrie (honeypot SSH/Telnet)

## 🎯 Objetivo

Comprender de forma práctica cómo funciona un honeypot para atraer y capturar ataques, evaluando su utilidad tanto en entornos de práctica como en producción, y sentando las bases para su integración con herramientas de monitoreo tipo SIEM.

🚀 *Desarrollado por Eduardo Vásquez junto a Yareth Cabuyales — Materia: Técnicas de Seguridad Informática.*

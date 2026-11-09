import React from 'react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectSchematicProps {
  type: ProjectItem['architectureType'];
}

export const ProjectSchematic: React.FC<ProjectSchematicProps> = ({ type }) => {
  switch (type) {
    case 'youtube-pipeline':
      return (
        <svg
          className="w-full h-36"
          viewBox="0 0 400 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Architecture du pipeline Data Engineering YouTube : Python, Kafka, Hive et Snowflake"
        >
          {/* Flux connecteurs */}
          <path
            d="M84 65 H138 M204 65 H258 M312 65 H342"
            stroke="#E88945"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          {/* Source YouTube + Python */}
          <rect x="16" y="37" width="68" height="56" rx="10" fill="#123B2A" stroke="#236B4A" strokeWidth="1.5" />
          <text x="50" y="61" textAnchor="middle" fill="#F8F7F2" fontSize="10" fontFamily="JetBrains Mono, monospace" fontWeight="700">
            YOUTUBE
          </text>
          <text x="50" y="77" textAnchor="middle" fill="#E88945" fontSize="9" fontFamily="JetBrains Mono, monospace">
            Python API
          </text>

          {/* Kafka Stream & CSV */}
          <rect x="136" y="37" width="68" height="56" rx="10" fill="#123B2A" stroke="#E88945" strokeWidth="1.5" />
          <text x="170" y="61" textAnchor="middle" fill="#F8F7F2" fontSize="10" fontFamily="JetBrains Mono, monospace" fontWeight="700">
            KAFKA
          </text>
          <text x="170" y="77" textAnchor="middle" fill="#F8F7F2" fillOpacity="0.75" fontSize="9" fontFamily="JetBrains Mono, monospace">
            Flux & CSV
          </text>

          {/* Hive Storage */}
          <rect x="256" y="37" width="58" height="56" rx="10" fill="#236B4A" stroke="#F8F7F2" strokeOpacity="0.4" strokeWidth="1.5" />
          <text x="285" y="61" textAnchor="middle" fill="#F8F7F2" fontSize="10" fontFamily="JetBrains Mono, monospace" fontWeight="700">
            HIVE
          </text>
          <text x="285" y="77" textAnchor="middle" fill="#F8F7F2" fillOpacity="0.8" fontSize="8.5" fontFamily="JetBrains Mono, monospace">
            Staging
          </text>

          {/* Snowflake Star Schema */}
          <rect x="334" y="29" width="52" height="72" rx="10" fill="#E88945" />
          <text x="360" y="59" textAnchor="middle" fill="#123B2A" fontSize="8.5" fontFamily="JetBrains Mono, monospace" fontWeight="700">
            SNOWFLAKE
          </text>
          <text x="360" y="74" textAnchor="middle" fill="#123B2A" fontSize="8" fontFamily="JetBrains Mono, monospace" fontWeight="600">
            SQL • BI
          </text>
        </svg>
      );

    case 'ml-housing':
      return (
        <svg
          className="w-full h-36"
          viewBox="0 0 400 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Modèle Random Forest de prédiction immobilière avec score R² de 0,77"
        >
          {/* Courbe de régression / prédiction */}
          <rect x="18" y="22" width="175" height="86" rx="10" fill="#123B2A" stroke="#236B4A" strokeWidth="1.5" />
          <line x1="36" y1="92" x2="175" y2="92" stroke="#236B4A" strokeWidth="1.2" />
          <line x1="36" y1="36" x2="36" y2="92" stroke="#236B4A" strokeWidth="1.2" />
          {/* Droite d'ajustement R² = 0.77 */}
          <line x1="42" y1="84" x2="168" y2="42" stroke="#E88945" strokeWidth="2.2" />
          <circle cx="55" cy="79" r="3.5" fill="#F8F7F2" />
          <circle cx="74" cy="70" r="3.5" fill="#F8F7F2" />
          <circle cx="95" cy="68" r="3.5" fill="#E88945" />
          <circle cx="116" cy="57" r="3.5" fill="#F8F7F2" />
          <circle cx="138" cy="53" r="3.5" fill="#E88945" />
          <circle cx="158" cy="45" r="3.5" fill="#F8F7F2" />

          {/* Arbres de décision Random Forest */}
          <path d="M193 65 H220" stroke="#E88945" strokeWidth="2" strokeDasharray="3 3" />
          <rect x="220" y="22" width="162" height="86" rx="10" fill="#123B2A" stroke="#E88945" strokeWidth="1.5" />
          <text x="301" y="45" textAnchor="middle" fill="#F8F7F2" fontSize="10" fontFamily="JetBrains Mono, monospace" fontWeight="700">
            RANDOM FOREST
          </text>
          <text x="301" y="63" textAnchor="middle" fill="#F8F7F2" fillOpacity="0.75" fontSize="9" fontFamily="JetBrains Mono, monospace">
            Pandas • Scikit-learn
          </text>
          <rect x="248" y="73" width="106" height="22" rx="6" fill="#E88945" />
          <text x="301" y="88" textAnchor="middle" fill="#123B2A" fontSize="10.5" fontFamily="JetBrains Mono, monospace" fontWeight="800">
            R² ≈ 0,77
          </text>
        </svg>
      );

    case 'uasz-ml':
      return (
        <svg
          className="w-full h-36"
          viewBox="0 0 400 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Workflow collaboratif Machine Learning au sein de l'UASZ AI Community"
        >
          <path d="M112 65 H150 M250 65 H288" stroke="#E88945" strokeWidth="2" />
          <rect x="20" y="35" width="92" height="60" rx="10" fill="#123B2A" stroke="#236B4A" strokeWidth="1.5" />
          <text x="66" y="61" textAnchor="middle" fill="#F8F7F2" fontSize="9.5" fontFamily="JetBrains Mono, monospace" fontWeight="700">
            DATA PREP
          </text>
          <text x="66" y="77" textAnchor="middle" fill="#E88945" fontSize="8.5" fontFamily="JetBrains Mono, monospace">
            Nettoyage
          </text>

          <rect x="150" y="30" width="100" height="70" rx="12" fill="#236B4A" stroke="#E88945" strokeWidth="1.8" />
          <text x="200" y="59" textAnchor="middle" fill="#F8F7F2" fontSize="10" fontFamily="JetBrains Mono, monospace" fontWeight="700">
            SCIKIT-LEARN
          </text>
          <text x="200" y="76" textAnchor="middle" fill="#F8F7F2" fillOpacity="0.85" fontSize="8.5" fontFamily="JetBrains Mono, monospace">
            Entraînement ML
          </text>

          <rect x="288" y="35" width="92" height="60" rx="10" fill="#123B2A" stroke="#236B4A" strokeWidth="1.5" />
          <text x="334" y="61" textAnchor="middle" fill="#E88945" fontSize="9.5" fontFamily="JetBrains Mono, monospace" fontWeight="700">
            ÉVALUATION
          </text>
          <text x="334" y="77" textAnchor="middle" fill="#F8F7F2" fontSize="8.5" fontFamily="JetBrains Mono, monospace">
            UASZ AI Team
          </text>
        </svg>
      );

    case 'edepot-microservices':
      return (
        <svg
          className="w-full h-36"
          viewBox="0 0 400 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Architecture Microservices de la plateforme logistique E-Dépôt en Casamance"
        >
          {/* Connecteurs Client -> Services -> PostgreSQL */}
          <path d="M104 65 L148 40 M104 65 L148 90 M256 40 L298 65 M256 90 L298 65" stroke="#E88945" strokeWidth="1.8" />
          {/* Frontend React */}
          <rect x="18" y="40" width="86" height="50" rx="10" fill="#123B2A" stroke="#236B4A" strokeWidth="1.5" />
          <text x="61" y="62" textAnchor="middle" fill="#F8F7F2" fontSize="10" fontFamily="JetBrains Mono, monospace" fontWeight="700">
            REACT.JS
          </text>
          <text x="61" y="77" textAnchor="middle" fill="#E88945" fontSize="8.5" fontFamily="JetBrains Mono, monospace">
            Portail Web
          </text>

          {/* Microservices Spring Boot */}
          <rect x="148" y="18" width="108" height="42" rx="8" fill="#236B4A" stroke="#F8F7F2" strokeOpacity="0.4" />
          <text x="202" y="38" textAnchor="middle" fill="#F8F7F2" fontSize="9" fontFamily="JetBrains Mono, monospace" fontWeight="700">
            SPRING BOOT
          </text>
          <text x="202" y="51" textAnchor="middle" fill="#F8F7F2" fillOpacity="0.8" fontSize="8" fontFamily="JetBrains Mono, monospace">
            Service Expéditions
          </text>

          <rect x="148" y="70" width="108" height="42" rx="8" fill="#236B4A" stroke="#F8F7F2" strokeOpacity="0.4" />
          <text x="202" y="90" textAnchor="middle" fill="#F8F7F2" fontSize="9" fontFamily="JetBrains Mono, monospace" fontWeight="700">
            MICROSERVICES
          </text>
          <text x="202" y="103" textAnchor="middle" fill="#F8F7F2" fillOpacity="0.8" fontSize="8" fontFamily="JetBrains Mono, monospace">
            Acteurs & Trajets
          </text>

          {/* PostgreSQL */}
          <rect x="298" y="40" width="84" height="50" rx="10" fill="#123B2A" stroke="#E88945" strokeWidth="1.5" />
          <text x="340" y="62" textAnchor="middle" fill="#E88945" fontSize="9.5" fontFamily="JetBrains Mono, monospace" fontWeight="700">
            POSTGRESQL
          </text>
          <text x="340" y="77" textAnchor="middle" fill="#F8F7F2" fontSize="8.5" fontFamily="JetBrains Mono, monospace">
            Persistance
          </text>
        </svg>
      );

    case 'university-3tier':
      return (
        <svg
          className="w-full h-36"
          viewBox="0 0 400 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Architecture 3 couches Jakarta EE, Apache Tomcat et MySQL"
        >
          <path d="M122 65 H150 M250 65 H278" stroke="#E88945" strokeWidth="2" />
          {/* Couche 1 : Présentation */}
          <rect x="22" y="35" width="100" height="60" rx="10" fill="#123B2A" stroke="#236B4A" strokeWidth="1.5" />
          <text x="72" y="58" textAnchor="middle" fill="#F8F7F2" fontSize="9.5" fontFamily="JetBrains Mono, monospace" fontWeight="700">
            PRÉSENTATION
          </text>
          <text x="72" y="75" textAnchor="middle" fill="#E88945" fontSize="8.5" fontFamily="JetBrains Mono, monospace">
            Web UI / Vues
          </text>

          {/* Couche 2 : Métier Jakarta EE */}
          <rect x="150" y="30" width="100" height="70" rx="10" fill="#236B4A" stroke="#E88945" strokeWidth="1.6" />
          <text x="200" y="56" textAnchor="middle" fill="#F8F7F2" fontSize="9.5" fontFamily="JetBrains Mono, monospace" fontWeight="700">
            JAKARTA EE
          </text>
          <text x="200" y="72" textAnchor="middle" fill="#F8F7F2" fontSize="8.5" fontFamily="JetBrains Mono, monospace">
            Servlets • Tomcat
          </text>
          <text x="200" y="86" textAnchor="middle" fill="#E88945" fontSize="8" fontFamily="JetBrains Mono, monospace">
            Couche Métier
          </text>

          {/* Couche 3 : Données MySQL */}
          <rect x="278" y="35" width="100" height="60" rx="10" fill="#123B2A" stroke="#236B4A" strokeWidth="1.5" />
          <text x="328" y="58" textAnchor="middle" fill="#F8F7F2" fontSize="9.5" fontFamily="JetBrains Mono, monospace" fontWeight="700">
            MYSQL RDBMS
          </text>
          <text x="328" y="75" textAnchor="middle" fill="#E88945" fontSize="8.5" fontFamily="JetBrains Mono, monospace">
            Étudiants & Notes
          </text>
        </svg>
      );
  }
};

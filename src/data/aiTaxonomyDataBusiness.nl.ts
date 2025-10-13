import { TreeNodeData } from '../types/treeTypes';

export const aiTaxonomyDataBusinessNL: TreeNodeData = {
  id: 'ai-nl',
  name: 'AI',
  description: 'Kunstmatige Intelligentie',
  overview: 'Kunstmatige intelligentie (AI) stelt machines in staat om taken uit te voeren die normaal gesproken menselijke intelligentie vereisen. In een zakelijke context automatiseert AI processen, verbetert het besluitvorming en creëert het nieuwe mogelijkheden voor efficiëntie en innovatie.',
  howItWorks: 'AI-systemen analyseren data, identificeren patronen en maken voorspellingen of beslissingen op basis van getrainde modellen. Deze modellen leren van historische data en verbeteren hun prestaties in de tijd door feedback en nieuwe informatie.',
  applications: [
    'Procesautomatisering en -optimalisatie',
    'Voorspellende analyses voor planning en risicobeheer',
    'Intelligente assistenten voor klantenservice',
    'Kwaliteitscontrole en defectdetectie',
    'Kennis- en documentbeheer'
  ],
  advantages: [
    'Verhoogde operationele efficiëntie en kostenbesparing',
    'Verbeterde besluitvorming door data-gedreven inzichten',
    'Schaalbaarheid - AI-systemen kunnen grote datavolumes verwerken',
    'Consistentie - geautomatiseerde processen verminderen menselijke fouten',
    'Concurrentievoordeel door innovatie'
  ],
  limitations: [
    'Vereist kwalitatieve data en goede datagovernance',
    'Initiële investering in infrastructuur en expertise',
    'Change management - medewerkers moeten worden opgeleid',
    'Ethische overwegingen en compliance',
    'Onderhoud en monitoring zijn essentieel voor betrouwbaarheid'
  ],
  children: [
    {
      id: 'machine-learning-nl',
      name: 'Machine Learning',
      description: 'Systemen die leren van data',
      overview: 'Machine Learning (ML) stelt computers in staat om te leren van data zonder expliciet geprogrammeerd te worden. In bedrijfscontexten helpt ML om patronen te ontdekken, voorspellingen te doen en processen te optimaliseren.',
      howItWorks: 'ML-algoritmen analyseren historische data om patronen en relaties te identificeren. Deze inzichten worden gebruikt om modellen te trainen die voorspellingen kunnen doen of beslissingen kunnen nemen op nieuwe data. Naarmate meer data beschikbaar komt, kunnen de modellen worden verfijnd.',
      applications: [
        'Vraagvoorspelling voor voorraadbeheer',
        'Predictief onderhoud van apparatuur',
        'Klantsegmentatie en targeting',
        'Risico-inschatting en fraudedetectie',
        'Procesoptimalisatie in productie'
      ],
      advantages: [
        'Datagestuurde besluitvorming',
        'Automatisering van complexe analysetaken',
        'Schaalbaarheid naar grote datasets',
        'Continue verbetering door feedback',
        'Identificatie van verborgen patronen'
      ],
      limitations: [
        'Vereist grote hoeveelheden kwalitatieve data',
        'Modellen kunnen bias uit trainingsdata overnemen',
        'Interpreteerbaarheid kan beperkt zijn',
        'Onderhoud en monitoring noodzakelijk',
        'Expertise vereist voor implementatie'
      ],
      children: [
        {
          id: 'predict-nl',
          name: 'Voorspellen',
          description: 'Toekomstige uitkomsten voorspellen',
          overview: 'Voorspellende modellen gebruiken historische data om toekomstige gebeurtenissen, trends of gedragingen te voorspellen. Dit stelt organisaties in staat om proactief te plannen en risico\'s te beheersen.',
          howItWorks: 'Voorspellende modellen identificeren patronen in historische data en gebruiken deze om waarschijnlijke toekomstige uitkomsten te berekenen. Modellen worden getraind op relevante factoren en leveren voorspellingen met een betrouwbaarheidsinterval.',
          applications: [
            'Vraagvoorspelling voor inkoop en productie',
            'Voorspelling van machinestoringen',
            'Voorspelling van beddbezetting in de zorg',
            'Voorspelling van personeelsbehoefte',
            'Risicovoorspelling en early warning'
          ],
          advantages: [
            'Proactieve planning en resourceallocatie',
            'Vermindering van ongeplande storingen',
            'Betere voorraadniveaus en lagere kosten',
            'Data-onderbouwde besluitvorming',
            'Verbeterde service levels'
          ],
          limitations: [
            'Nauwkeurigheid hangt af van datakwaliteit',
            'Externe factoren kunnen moeilijk te voorspellen zijn',
            'Modellen moeten regelmatig worden geüpdatet',
            'Overmatig vertrouwen op voorspellingen is risicovol'
          ],
          gettingStarted: ['Begin met een duidelijke voorspellingsvraag en verzamel relevante historische data. Start met eenvoudige modellen en bouw complexiteit op naarmate u meer inzicht krijgt.'],
          pitfalls: ['Vermijd overfitting op trainingsdata en zorg voor voldoende data voor betrouwbare voorspellingen. Monitor modelnauwkeurigheid continu.']
        },
        {
          id: 'optimize-nl',
          name: 'Optimaliseren',
          description: 'Processen en resources verbeteren',
          overview: 'Optimalisatiemodellen helpen om de beste beslissingen te nemen binnen gegeven beperkingen. Ze maximaliseren efficiency, minimaliseren kosten of balanceren meerdere doelstellingen.',
          howItWorks: 'Optimalisatie-algoritmen evalueren mogelijke scenario\'s en identificeren de beste oplossing op basis van gedefinieerde doelstellingen en beperkingen. Machine learning kan deze processen verbeteren door te leren van eerdere beslissingen.',
          applications: [
            'Routeplanning en logistiek',
            'Productieplanning en scheduling',
            'Energiebeheer en procesinstellingen',
            'Personeelsplanning en shiftroosters',
            'Supply chain optimalisatie'
          ],
          advantages: [
            'Verhoogde operationele efficiency',
            'Kostenbesparing door beter gebruik van resources',
            'Snellere en betere besluitvorming',
            'Capaciteit om complexe problemen aan te pakken',
            'Continue verbetering door feedback'
          ],
          limitations: [
            'Vereist duidelijke doelstellingen en beperkingen',
            'Kan complex zijn om te implementeren',
            'Resultaten zijn afhankelijk van modelassumpties',
            'Real-time data nodig voor dynamische optimalisatie'
          ],
          gettingStarted: ['Definieer duidelijk wat u wilt optimaliseren en welke beperkingen er zijn. Begin met een pilotproject in een afgebakend gebied.'],
          pitfalls: ['Vermijd over-optimalisatie op één dimensie ten koste van andere. Zorg voor menselijke validatie van aanbevelingen.']
        },
        {
          id: 'detect-nl',
          name: 'Detecteren',
          description: 'Afwijkingen en patronen identificeren',
          overview: 'Detectiemodellen identificeren afwijkende patronen, defecten of anomalieën in data of processen. Dit maakt vroege interventie mogelijk en voorkomt grotere problemen.',
          howItWorks: 'Detectie-algoritmen leren wat "normaal" gedrag is en signaleren afwijkingen hiervan. Ze kunnen werken met gestructureerde data (zoals sensordata) of ongestructureerde data (zoals beelden of tekst).',
          applications: [
            'Kwaliteitscontrole en defectdetectie',
            'Anomaliedetectie in machinegedrag',
            'Fraudedetectie',
            'Veiligheidsincidenten en risico\'s identificeren',
            'Procesafwijkingen signaleren'
          ],
          advantages: [
            'Vroege detectie van problemen',
            'Vermindering van uitval en defecten',
            'Verhoogde productkwaliteit',
            'Kostenbesparing door preventie',
            'Real-time monitoring mogelijk'
          ],
          limitations: [
            'Kan valse positieven genereren',
            'Vereist duidelijke definitie van "normaal"',
            'Nieuwe soorten afwijkingen kunnen gemist worden',
            'Menselijke validatie vaak nodig'
          ],
          gettingStarted: ['Begin met een duidelijk gedefinieerd detectieprobleem en verzamel voorbeelden van normale en abnormale situaties.'],
          pitfalls: ['Vermijd te veel valse alarmen die leiden tot alarm-moeheid. Balance gevoeligheid en specificiteit.']
        }
      ]
    },
    {
      id: 'nlp-nl',
      name: 'Natural Language Processing',
      description: 'Tekstbegrip en -verwerking',
      overview: 'Natural Language Processing (NLP) stelt computers in staat om menselijke taal te begrijpen, interpreteren en genereren. In bedrijven helpt NLP bij het automatiseren van tekstverwerking, het verbeteren van zoekfunctionaliteit en het creëren van slimme assistenten.',
      howItWorks: 'NLP-systemen gebruiken linguïstische regels en machine learning om tekst te analyseren. Ze kunnen intenties herkennen, informatie extraheren, tekst classificeren en natuurlijke antwoorden genereren.',
      applications: [
        'Intelligente zoeksystemen en kennisbeheer',
        'Chatbots en virtuele assistenten',
        'Sentimentanalyse van feedback',
        'Automatische documentverwerking',
        'Tekstclassificatie en categorisering'
      ],
      advantages: [
        'Automatisering van tekstintensieve taken',
        'Verbeterde informatietoegang',
        'Schaalbaarheid van klantenservice',
        'Snellere documentverwerking',
        'Betere inzichten uit ongestructureerde data'
      ],
      limitations: [
        'Taalspecifiek - Nederlands vereist aangepaste modellen',
        'Context en nuance kunnen moeilijk zijn',
        'Vereist kwaliteitscontrole van output',
        'Privacy-overwegingen bij tekstdata'
      ],
      children: [
        {
          id: 'information-retrieval-nl',
          name: 'Informatie Opvragen',
          description: 'Relevante informatie vinden',
          overview: 'Informatie-ophaalsystemen helpen gebruikers om snel en accuraat de juiste informatie te vinden in grote documentcollecties. Moderne systemen gebruiken semantisch zoeken om intentie te begrijpen.',
          howItWorks: 'Semantisch zoeken begrijpt de betekenis van zoekopdrachten en documenten, niet alleen keywords. Vector-representaties en reranking zorgen voor relevante resultaten die betrouwbaar worden getoond.',
          applications: [
            'Interne kennisportalen',
            'Documentzoekmachines',
            'FAQ-systemen',
            'Policy- en procedurezoekers',
            'Technische documentatie-toegang'
          ],
          advantages: [
            'Snellere informatietoegang',
            'Verminderde afhankelijkheid van experts',
            'Consistente antwoorden',
            'Verbeterde self-service',
            'Tijdsbesparing'
          ],
          limitations: [
            'Kwaliteit hangt af van documentcollectie',
            'Onderhoud van kennisbasis noodzakelijk',
            'Privacy-overwegingen',
            'Validatie van resultaten belangrijk'
          ],
          gettingStarted: ['Begin met een goed georganiseerde documentcollectie en duidelijke use case voor zoeken.'],
          pitfalls: ['Vermijd verouderde content in de kennisbasis. Zorg voor governance en kwaliteitscontrole.']
        },
        {
          id: 'smart-assistants-nl',
          name: 'Slimme Assistenten',
          description: 'AI-aangedreven hulpsystemen',
          overview: 'Slimme assistenten gebruiken NLP en kennisintegratie om gebruikers te helpen met vragen, taken en beslissingen. Ze kunnen conversaties voeren, informatie opvragen en acties uitvoeren.',
          howItWorks: 'Assistenten combineren intentieherkenning, contextbeheer en kennisbronnen om natuurlijke interacties te faciliteren. Ze kunnen geïntegreerd zijn in bestaande systemen zoals Teams, websites of apps.',
          applications: [
            'Interne helpdesk-assistenten',
            'Triage-assistenten in de zorg',
            'Klantservice chatbots',
            'HR- en IT-support bots',
            'Proces-assistenten voor werknemers'
          ],
          advantages: [
            '24/7 beschikbaarheid',
            'Schaalbaarheid zonder extra personeel',
            'Consistente antwoorden',
            'Snelle afhandeling van standaardvragen',
            'Ontlasting van medewerkers'
          ],
          limitations: [
            'Complexe vragen vereisen menselijke escalatie',
            'Training en onderhoud nodig',
            'Gebruikersacceptatie kan variëren',
            'Privacy en compliance-overwegingen'
          ],
          gettingStarted: ['Start met een afgebakende use case zoals FAQ-beantwoording. Bouw complexiteit op gebaseerd op feedback.'],
          pitfalls: ['Vermijd overmoed - zorg voor escalatiemogelijkheden naar mensen. Monitor tevredenheid continu.']
        },
        {
          id: 'text-analysis-nl',
          name: 'Tekstanalyse',
          description: 'Inzichten uit tekst extraheren',
          overview: 'Tekstanalyse extraheert structuur, sentiment en betekenis uit ongestructureerde tekst. Dit maakt het mogelijk om grote volumes aan feedback, rapporten of documenten systematisch te analyseren.',
          howItWorks: 'NLP-technieken zoals sentimentanalyse, entity extraction en classificatie verwerken tekst en identificeren patronen, thema\'s en trends. Output kan worden gevisualiseerd voor besluitvorming.',
          applications: [
            'Sentimentanalyse van feedback',
            'Classificatie van incidentrapporten',
            'Extractie van informatie uit logs',
            'Thema-identificatie in surveys',
            'Trendanalyse in communicatie'
          ],
          advantages: [
            'Inzichten uit grote tekstvolumes',
            'Vroege identificatie van problemen',
            'Data-onderbouwde strategische beslissingen',
            'Automatisering van handmatige analyses',
            'Objectieve en consistente beoordeling'
          ],
          limitations: [
            'Kwaliteit hangt af van tekstdata',
            'Nuance en context kunnen gemist worden',
            'Bias in modellen mogelijk',
            'Validatie door experts vaak nodig'
          ],
          gettingStarted: ['Identificeer tekstbronnen en analysevragen. Begin met een pilotproject op een specifieke tekstcategorie.'],
          pitfalls: ['Vermijd over-interpretatie van resultaten. Zorg voor menselijke validatie van belangrijke inzichten.']
        }
      ]
    }
  ]
};

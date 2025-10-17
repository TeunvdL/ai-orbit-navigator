import { TreeNodeData } from '../types/treeTypes';

export const aiTaxonomyDataBusinessNL: TreeNodeData = {
  id: 'ai-root',
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
      id: 'machine-learning-business',
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
          id: 'predict',
          name: 'Voorspellen',
          description: 'Toekomstige uitkomsten voorspellen',
          overview: 'Voorspellende modellen gebruiken historische data om toekomstige <span class=\'text-cyan-400 font-semibold\'>gebeurtenissen</span>, <span class=\'text-cyan-400 font-semibold\'>trends</span> of <span class=\'text-cyan-400 font-semibold\'>gedragingen</span> te voorspellen. Dit stelt organisaties in staat om <span class=\'text-cyan-400 font-semibold\'>proactief te plannen</span>, <span class=\'text-cyan-400 font-semibold\'>risico\'s te beheersen</span> en resources te <span class=\'text-cyan-400 font-semibold\'>optimaliseren</span> met inzicht in wat er waarschijnlijk gaat gebeuren.',
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
          gettingStarted: [
            'Definieer het exacte voorspellingdoel: wat wil je voorspellen en voor wie is het bruikbaar?',
            'Verzamel historische data met voldoende dekking (seizoenen, trends) en maak een duidelijke datasnede (train/val/test).',
            'Start met een eenvoudige baseline (moving average, vorig-jaar-zelfde-periode) voor een realistische benchmark.',
            'Identificeer en engineer leidende indicatoren (externe factoren, markt/weer, promoties) die voorspellend zijn.',
            'Implementeer continue validatie en monitoring in productie (drift, MAE/MAPE, waarschuwingen).',
            'Richt feedbackloops in om afwijkingen vast te leggen en periodiek te hertrainen.'
          ],
          pitfalls: [
            'Dataleakage tussen train en test leidt tot overschatte prestaties—scheid tijdvakken strikt.',
            'Overfitting op historische patronen die niet terugkomen—valideer op out-of-time data.',
            'Regimewisselingen (markt/regulatie) negeren—controleer robuustheid en update sneller.',
            'Onzekerheid als zekerheid communiceren—rapporteer betrouwbaarheidsintervallen.',
            'Datakwaliteit onderschatten—ontbrekende waarden en vertragingen verslechteren nauwkeurigheid.',
            'Geen plan voor actie—zorg dat voorspellingen tijdig en bruikbaar landen in processen.'
          ]
        },
        {
          id: 'optimize',
          name: 'Optimaliseren',
          description: 'Processen en resources verbeteren',
          overview: 'Optimalisatie-technieken helpen om <span class=\'text-cyan-400 font-semibold\'>beste beslissingen</span> te nemen binnen <span class=\'text-cyan-400 font-semibold\'>beperkingen</span>. Ze <span class=\'text-cyan-400 font-semibold\'>maximaliseren efficiency</span>, <span class=\'text-cyan-400 font-semibold\'>minimaliseren kosten</span> en maken <span class=\'text-cyan-400 font-semibold\'>trade-offs</span> inzichtelijk tussen doelen zoals <span class=\'text-cyan-400 font-semibold\'>doorlooptijd</span>, <span class=\'text-cyan-400 font-semibold\'>kwaliteit</span> en <span class=\'text-cyan-400 font-semibold\'>capaciteitsbenutting</span>.',
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
          gettingStarted: [
            'Definieer het optimalisatiedoel (kosten, tijd, benutting) en formuleer harde vs. zachte beperkingen.',
            'Maak een nulmeting van de huidige aanpak om echte winst te kunnen aantonen.',
            'Start met een afgebakende pilot (één productielijn, één regio) en breid daarna uit.',
            'Zorg voor uitlegbare aanbevelingen (transparante constraints/gewichten) en override-mogelijkheden.',
            'Plan iteratieve herkalibratie van doelstellingen en constraints bij veranderende realiteit.'
          ],
          pitfalls: [
            'Te strakke constraints laten geen oplossingen toe—herzie wat echt hard is.',
            'Optimaliseren op één KPI schaadt andere KPI’s—gebruik multi-objective of wegingen.',
            'Te weinig aandacht voor operationele inpasbaarheid—aanbevelingen moeten uitvoerbaar zijn.',
            'Streven naar perfecte oplossingen die te laat komen—kies tijdige “goed genoeg”-oplossingen.',
            'Change management onderschat—leg beslislogica uit en train teams.'
          ]
        },
        {
          id: 'detect',
          name: 'Detecteren',
          description: 'Afwijkingen en patronen identificeren',
          overview: 'Detectie-oplossingen identificeren <span class=\'text-cyan-400 font-semibold\'>afwijkingen</span>, <span class=\'text-cyan-400 font-semibold\'>defecten</span> en <span class=\'text-cyan-400 font-semibold\'>anomalieën</span> in data of processen. Hiermee is <span class=\'text-cyan-400 font-semibold\'>vroegtijdige interventie</span> mogelijk om storingen te voorkomen, <span class=\'text-cyan-400 font-semibold\'>kwaliteit te borgen</span> en <span class=\'text-cyan-400 font-semibold\'>veiligheid</span> te verhogen.',
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
          gettingStarted: [
            'Specificeer het detectiedoel (kwaliteit, fraude, veiligheid) en de responstijden die nodig zijn.',
            'Verzamel representatieve voorbeelden van normaal vs. afwijkend gedrag en label waar mogelijk.',
            'Start met een pilot op een hoog-impact gebied en kalibreer drempels met businessdoelen.',
            'Definieer acceptabele false positive/negative-ratio’s per scenario.',
            'Integreer alerts met bestaande workflows (tickets, stop-criteria) en meet impact.',
            'Plan voor periodieke hertraining en driftdetectie.'
          ],
          pitfalls: [
            'Onvoldoende variatie in trainingsdata—edge cases worden gemist.',
            'Te gevoelige drempels veroorzaken alarmmoeheid—kalibreer op businessimpact.',
            'Modeldegradatie door proceswijzigingen—monitor drift en hertrain tijdig.',
            'Geen human-in-the-loop bij twijfelgevallen—zorg voor review en terugkoppeling.',
            'Integratiecomplexiteit onderschat—zorg voor end-to-end eigenaarschap en runbooks.'
          ]
        }
      ]
    },
    {
      id: 'NLP-business',
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
          id: 'information-retrieval',
          name: 'Informatie Opvragen',
          description: 'Relevante informatie vinden',
          overview: 'Informatie-ophaal systemen helpen gebruikers om snel en accuraat de juiste informatie te vinden in grote documentcollecties. Moderne oplossingen gebruiken <span class=\'text-cyan-400 font-semibold\'>semantisch zoeken</span> om <span class=\'text-cyan-400 font-semibold\'>intentie</span> te begrijpen en tonen <span class=\'text-cyan-400 font-semibold\'>betrouwbare</span>, <span class=\'text-cyan-400 font-semibold\'>relevante</span> resultaten met context.',
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
          gettingStarted: [
            'Breng de kennislandschap in kaart: welke repos, FAQs, handleidingen zijn kritiek?',
            'Start met een gefocuste collectie (beleid, procedures) in plaats van “alles” te indexeren.',
            'Implementeer robuuste preprocessing: PDF-opschoning, tabellen, metadata en versies.',
            'Kies keyword-, semantisch- of hybride zoeken passend bij vraagcomplexiteit.',
            'Zet governance op: eigenaarschap, reviewcycli en freshnes-alerts.',
            'Gebruik zoek-analytics om hiaten te vinden (queries zonder resultaten).'
          ],
          pitfalls: [
            'Alles indexeren zonder curatie—ruis en frustratie nemen toe.',
            'Verouderde content niet opschonen—vertrouwen en juistheid dalen.',
            'Slechte chunking voor semantiek—context gaat verloren, resultaten versnipperen.',
            'Toegangsrechten negeren—risico op datalekken en non-compliance.',
            'Niet testen met echte vragen—ontwerp sluit niet aan op gebruikersgedrag.'
          ]
        },
        {
          id: 'smart-assistants',
          name: 'Slimme Assistenten',
          description: 'AI-aangedreven hulpsystemen',
          overview: 'Slimme assistenten combineren <span class=\'text-cyan-400 font-semibold\'>NLP</span> en <span class=\'text-cyan-400 font-semibold\'>kennisintegratie</span> om gebruikers te helpen met <span class=\'text-cyan-400 font-semibold\'>vragen</span>, <span class=\'text-cyan-400 font-semibold\'>taken</span> en <span class=\'text-cyan-400 font-semibold\'>beslissingen</span>. Ze voeren <span class=\'text-cyan-400 font-semibold\'>gesprekken</span>, halen <span class=\'text-cyan-400 font-semibold\'>informatie</span> op en kunnen <span class=\'text-cyan-400 font-semibold\'>acties</span> uitvoeren in bestaande systemen.',
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
          gettingStarted: [
            'Begin smal: focus op top 10–20 veelvoorkomende vragen/verzoeken.',
            'Ontwerp conversatiestromen met duidelijke fallback en menselijke escalatie.',
            'Ground antwoorden in gecontroleerde bronnen (RAG) voor betrouwbaarheid.',
            'Train intentherkenning op echte gebruikersvragen (tickets, chatlogs).',
            'Test uitgebreid met variaties, edge-cases en tegenspraak voor productie.',
            'Monitor resolutiepercentages, escalaties en tevredenheid; verbeter iteratief.'
          ],
          pitfalls: [
            'Te breed starten—kwaliteit en vertrouwen lijden eronder.',
            'Zelfverzekerde antwoorden bij onzekerheid—toon onzekerheid en alternatieven.',
            'Slechte overdracht naar mens—behoud context en leg reden van escalatie uit.',
            'Dialoogstaat niet goed onderhouden—herhalende vragen en slechte UX.',
            'Onvoldoende guardrails bij gevoelige topics—contentfilters en beleid noodzakelijk.'
          ]
        },
        {
          id: 'text-analysis',
          name: 'Tekstanalyse',
          description: 'Inzichten uit tekst extraheren',
          overview: 'Tekstanalyse haalt <span class=\'text-cyan-400 font-semibold\'>structuur</span>, <span class=\'text-cyan-400 font-semibold\'>sentiment</span> en <span class=\'text-cyan-400 font-semibold\'>betekenis</span> uit ongestructureerde tekst. Hierdoor kun je grote volumes <span class=\'text-cyan-400 font-semibold\'>feedback</span>, <span class=\'text-cyan-400 font-semibold\'>rapporten</span> en <span class=\'text-cyan-400 font-semibold\'>documenten</span> systematisch analyseren voor <span class=\'text-cyan-400 font-semibold\'>besluitvorming</span>.',
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
          gettingStarted: [
            'Bepaal doelen: sentiment, topics, classificatie, extractie of samenvatting.',
            'Verzamel representatieve tekst uit meerdere bronnen en tijdvakken, inclusief randgevallen.',
            'Laat domeinexperts een labeled set maken als grondwaarheid voor validatie.',
            'Kies aanpak per doel: regels voor eenvoudige patronen, ML/LLM voor nuance.',
            'Richt human review in voor twijfelgevallen en continue verbetering.',
            'Verbind inzichten aan acties (dashboards/alerts/processen) voor waardecreatie.'
          ],
          pitfalls: [
            'Sentiment zonder domeincontext—betekenis verschilt per sector/jargon.',
            'Out-of-the-box modellen op specialistische taal—fijnslijpen is vaak nodig.',
            'Class-imbalance negeren—zeldzame maar kritieke categorieën worden gemist.',
            'Evoluerende taal niet meenemen—periodiek hertrainen en evalueren.',
            'Privacyrisico’s bij gebruikers-/werknemersteksten—PII-redactie en toegangscontrole.'
          ]
        }
      ]
    }
  ]
};

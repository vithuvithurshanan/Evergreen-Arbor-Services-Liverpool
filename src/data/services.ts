import {
  TreePine,
  ArrowDownToLine,
  Wind,
  Scissors,
  Shovel,
  AlertTriangle,
  Crop,
  Sprout,
  FileSearch,
} from 'lucide-react'

import type { ServiceItem } from '@/types'

export const SERVICES: ServiceItem[] = [
  {
    id: 'tree-felling',
    title: 'Tree Felling',
    shortDescription:
      'Safe and efficient removal of trees of any size, from small garden trees to large mature specimens. Our qualified arborists assess every site before work begins, ensuring controlled felling that protects your property, surrounding vegetation, and the public from harm.',
    fullDescription:
      'Tree felling is a precision operation that demands expert knowledge, specialist equipment, and strict adherence to safety protocols. At Evergreen Arbor Services we carry out complete tree removal across Liverpool and Merseyside, handling everything from straightforward garden trees to large, structurally compromised specimens in confined or high-risk locations. Before any felling takes place, our NPTC-qualified arborists perform a thorough site assessment and risk evaluation, identifying hazards such as proximity to buildings, overhead cables, and underground utilities. Where space is limited, we employ a sectional dismantling technique — removing the tree piece by piece from the crown down — to guarantee a controlled lowering of timber with no damage to your property. All waste timber and brash is chipped and removed, leaving your garden clean and tidy. We also advise on replanting options to maintain the character of your outdoor space.',
    icon: TreePine,
    schemaName: 'Tree Felling',
  },
  {
    id: 'crown-reduction',
    title: 'Crown Reduction',
    shortDescription:
      'Skilled reduction of a tree\'s overall canopy size while preserving its natural shape and long-term health. Ideal for trees that have outgrown their setting, are casting excessive shade, or are encroaching on buildings and neighbouring properties across Liverpool and Merseyside.',
    fullDescription:
      'Crown reduction involves carefully shortening the outer branches of a tree\'s canopy to reduce its overall height and spread, whilst maintaining the tree\'s natural form and structural integrity. This is one of the most technically demanding arboricultural operations, requiring precise pruning cuts made to appropriate secondary branches in accordance with BS 3998:2010 — the British Standard for tree work. At Evergreen Arbor Services, our team has extensive experience performing crown reductions on a wide range of broadleaved and coniferous species found across Liverpool gardens and streetscapes. We work closely with clients to agree the percentage reduction required, never removing more than is necessary to achieve the desired outcome. A well-executed crown reduction extends the life of the tree by reducing wind loading and sail effect, while simultaneously improving light penetration to your garden and reducing the risk of storm damage to your home. All arisings are removed from site and disposed of responsibly.',
    icon: ArrowDownToLine,
    schemaName: 'Crown Reduction',
  },
  {
    id: 'crown-thinning',
    title: 'Crown Thinning',
    shortDescription:
      'Selective removal of internal branches to increase light and air movement through the canopy without altering the overall size or shape of the tree. Crown thinning enhances the health and appearance of mature trees throughout Liverpool and the wider Merseyside area.',
    fullDescription:
      'Crown thinning is a selective pruning technique that reduces the density of a tree\'s canopy by removing a proportion of the smaller, crossing, weak, or dead branches from within the crown. Unlike crown reduction, thinning does not alter the overall height or spread of the tree — the silhouette remains largely unchanged while the interior becomes lighter and more open. This is particularly beneficial for established trees in gardens and on properties where the owner wants to retain the full stature and character of the tree but needs to improve light levels below the canopy or increase air circulation to reduce the risk of fungal disease. At Evergreen Arbor Services we carry out crown thinning strictly in accordance with BS 3998:2010, ensuring that no more than the agreed percentage of live crown is removed in any single operation. Our arborists identify and retain the tree\'s best-structured branches, producing a balanced, aesthetically pleasing result. Following the work we clear all arisings from your garden and leave the site spotless.',
    icon: Wind,
    schemaName: 'Crown Thinning',
  },
  {
    id: 'tree-pruning',
    title: 'Tree Pruning',
    shortDescription:
      'Expert pruning services to remove deadwood, crossing branches, and hazardous limbs, improving the structural integrity, safety, and visual appeal of your trees. We provide routine maintenance pruning for domestic and commercial clients throughout Liverpool, Sefton, Knowsley, and the wider Merseyside region.',
    fullDescription:
      'Regular pruning is essential for maintaining the health, safety, and appearance of the trees on your property. Unpruned trees can develop crossing branches that create wounds susceptible to disease, accumulate large amounts of deadwood that pose a falling hazard, and produce poor structure that makes them vulnerable to storm damage. Evergreen Arbor Services offers a comprehensive tree pruning service covering a broad range of works: deadwood removal, crown lifting (raising the lower canopy to improve clearance over paths, driveways, and buildings), formative pruning of young trees to establish a strong structure early in their life, and remedial pruning to correct previous poor work or storm damage. All pruning cuts are made to the correct specification using sharp, clean tools to minimise wound area and reduce the risk of pathogen entry. We serve residential gardens, housing developments, commercial premises, and public open spaces across Liverpool, Sefton, Wirral, Knowsley, and St Helens. Every job, however small, receives the same high standard of workmanship and tidiness.',
    icon: Scissors,
    schemaName: 'Tree Pruning',
  },
  {
    id: 'stump-grinding',
    title: 'Stump Grinding / Stump Removal',
    shortDescription:
      'Complete elimination of tree stumps using powerful grinding equipment, removing all traces of the stump to below ground level. Our stump grinding service restores your garden\'s usability and eliminates the risk of regrowth, trip hazards, and root-borne disease throughout Merseyside.',
    fullDescription:
      'After a tree has been felled, the remaining stump can become an unsightly obstacle, a trip hazard, and a potential source of fungal disease — particularly honey fungus (Armillaria), which can spread to neighbouring trees and shrubs via the root network. Evergreen Arbor Services uses professional-grade stump grinders to mechanically reduce the stump and its surface roots to wood chip below the surrounding soil level, typically to a depth of 150–300 mm depending on your requirements. The resulting void is backfilled with the wood-chip mulch and compacted, leaving a level surface that can be turfed, planted, or built upon. Prior to any stump grinding we obtain underground service drawings and conduct a manual inspection of the area to identify and mark any cables, pipes, or drainage runs that could be damaged. We can grind single stumps or carry out bulk programmes for developers and local authorities clearing multiple stumps across a site. All access equipment is tracked and rubber-tyred where possible to minimise ground disturbance on lawns and soft landscaping.',
    icon: Shovel,
    schemaName: 'Stump Grinding and Stump Removal',
  },
  {
    id: 'emergency-tree-surgery',
    title: 'Emergency Tree Surgery',
    shortDescription:
      'Rapid 24/7 response to storm damage, fallen trees, and dangerous hanging limbs across Liverpool and Merseyside. Our emergency arborists are on call around the clock to make your property safe, clear access routes, and provide immediate professional assessment of storm-damaged trees.',
    fullDescription:
      'Severe weather can strike at any time, leaving trees split, uprooted, or laden with dangerous hanging deadwood — known in the trade as "widow makers" — that pose an immediate risk to people and property. Evergreen Arbor Services operates a dedicated emergency call-out service, available 24 hours a day, 7 days a week, 365 days a year across Liverpool and the wider Merseyside region. When you contact us out of hours, you will speak directly to one of our qualified arborists, not a call centre, and we aim to be on site within two hours for high-priority incidents. Our emergency teams carry a full range of climbing and rigging equipment, chainsaws, and chipping machinery to deal with virtually any situation: fallen trees blocking roads or driveways, large limbs resting on roofs or fences, uprooted trees threatening structures, and broken crowns hanging precariously overhead. Once the immediate danger has been addressed, we provide a written assessment of the remaining tree\'s condition and advise on whether further pruning, bracing, or complete removal is required. We work closely with insurance companies and loss adjusters to provide supporting documentation for claims.',
    icon: AlertTriangle,
    schemaName: 'Emergency Tree Surgery',
  },
  {
    id: 'hedge-trimming',
    title: 'Hedge Trimming and Shaping',
    shortDescription:
      'Professional cutting and shaping of all hedge species to maintain crisp, well-defined boundaries and promote dense, healthy growth. We handle hedges of every size and species for domestic and commercial clients across Liverpool, providing regular maintenance or one-off tidy-up visits.',
    fullDescription:
      'A well-maintained hedge is one of the most attractive and functional features a garden can offer — providing privacy, wildlife habitat, wind protection, and a formal or informal boundary to your property. Evergreen Arbor Services provides a thorough hedge trimming and shaping service for all common species found in Liverpool gardens, including privet, leylandii, beech, hornbeam, yew, laurel, box, and hawthorn. We use professional hedge cutters and long-reach equipment to achieve a clean, uniform finish on hedges of any height, width, or length. Where a hedge has become overgrown and misshapen we can carry out a harder renovation cut to restore the desired outline, advising on the best time of year to avoid disturbing nesting birds. We are fully experienced in managing boundary features for housing estates, commercial properties, schools, and public sector clients, and can offer flexible scheduling including early-morning and weekend visits to minimise disruption. Trimmings are collected and removed from site, or chipped on site and spread as mulch at your request.',
    icon: Crop,
    schemaName: 'Hedge Trimming and Shaping',
  },
  {
    id: 'tree-planting',
    title: 'Tree Planting and Aftercare',
    shortDescription:
      'Expert selection, sourcing, and planting of trees suited to your specific soil conditions, space, and aesthetic goals. We provide full aftercare programmes including staking, mulching, and follow-up visits to give every new tree the best possible start in Liverpool\'s urban environment.',
    fullDescription:
      'Planting a tree is one of the most rewarding and long-lasting investments you can make in your property and the wider environment. However, the long-term success of a newly planted tree depends enormously on the right species choice, correct planting technique, and diligent aftercare — particularly during the critical first two growing seasons. Evergreen Arbor Services provides a complete tree planting service, beginning with an assessment of your site\'s soil type, drainage, aspect, and available space, followed by expert species selection to ensure the right tree is placed in the right location. We source quality nursery stock from reputable UK suppliers and plant to the highest horticultural standards, including the preparation of a correctly sized planting pit, addition of mycorrhizal inoculant to aid root establishment, installation of tree stakes and ties, and application of a mulch ring to retain moisture and suppress competing weeds. Our aftercare programmes include scheduled watering visits, formative pruning in years one and two, stake and tie checks, and replacement planting under our establishment guarantee if a tree fails to thrive. We plant specimen trees for private clients, replacement trees in compliance with planning conditions, and urban woodland schemes for local authorities and developers.',
    icon: Sprout,
    schemaName: 'Tree Planting and Aftercare',
  },
  {
    id: 'arboricultural-surveys',
    title: 'Arboricultural Surveys and Reports',
    shortDescription:
      'Qualified arboricultural consultancy providing BS 5837 tree surveys, TPO checks, planning application reports, and condition assessments for homeowners, developers, and solicitors throughout Liverpool and Merseyside. Our detailed written reports meet local authority and legal requirements.',
    fullDescription:
      'When planning development, buying or selling property, dealing with a tree preservation order (TPO), or responding to a legal dispute involving trees, you need professionally produced arboricultural documentation prepared by a suitably qualified consultant. Evergreen Arbor Services offers a full range of survey and reporting services carried out in accordance with current industry standards. Our BS 5837:2012 tree surveys provide a detailed inventory of all trees on or adjacent to a development site, including species, size, condition category, root protection area, and constraints to development — the essential input for architects and planning teams designing around existing trees. We also produce arboricultural impact assessments (AIAs), arboricultural method statements (AMSs), and tree protection plans (TPPs) to support planning applications, all accepted by Liverpool City Council and neighbouring local planning authorities. For homeowners, we offer single-tree condition assessments to identify structural defects, disease, or hazard potential, providing a written report and prioritised recommendations. We can act as expert witness in cases involving tree disputes between neighbours, boundary issues, or insurance claims following storm or subsidence damage. All surveys and reports are produced by Registered Consultant members of the Arboricultural Association.',
    icon: FileSearch,
    schemaName: 'Arboricultural Surveys and Reports',
  },
]

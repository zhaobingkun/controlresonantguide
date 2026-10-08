const sources = {
  official: {
    label: 'Remedy: official CONTROL Resonant page',
    url: 'https://www.remedygames.com/games/control-2'
  },
  quests: {
    label: 'PowerPyx: all quests and progression requirements',
    url: 'https://www.powerpyx.com/control-resonant-walkthrough-all-quests/'
  },
  collectibles: {
    label: 'PowerPyx: collectible access and ability gates',
    url: 'https://www.powerpyx.com/control-resonant-all-collectible-locations-guide/'
  },
  bosses: {
    label: 'AllThingsHow: Resonant locations, access, and rewards',
    url: 'https://allthings.how/every-resonant-boss-location-in-control-resonant-all-rewards/'
  },
  artist: {
    label: 'ControlResonantGame: The Artist and first ability choice',
    url: 'https://controlresonantgame.com/bosses/the-artist'
  },
  respec: {
    label: 'GamesRadar: Reset Items and respec categories',
    url: 'https://www.gamesradar.com/games/action-rpg/control-resonant-reset-items-respec/'
  },
  barriers: {
    label: 'Destructoid: visual Ability Barrier solutions',
    url: 'https://www.destructoid.com/all-ability-barriers-in-control-resonant-and-how-to-remove-them/'
  }
};

export const fieldGuideCategories = [
  {
    id: 'progression',
    label: 'Progression desk',
    title: 'Story routes and quest order',
    description: 'Keep the three main quest tracks moving and diagnose the ability gate that stopped your route.'
  },
  {
    id: 'abilities',
    label: 'Ability files',
    title: 'Traversal, barriers, and resets',
    description: 'Unlock the movement powers that open Manhattan, identify environmental barriers, and rebuild Dylan without wasting Reset Items.'
  },
  {
    id: 'combat',
    label: 'Combat desk',
    title: 'Resonants and first-build decisions',
    description: 'Understand the boss route, choose the first Combat Ability by role, and avoid early upgrade dead ends.'
  }
];

const incursionSource = { label: 'PowerPyx: Incursion Fault route and Shift tutorial', url: 'https://www.powerpyx.com/control-resonant-the-incursion-fault-walkthrough/' };
const subwaySource = { label: 'PowerPyx: Subway Fault route and Reach tutorial', url: 'https://www.powerpyx.com/control-resonant-the-subway-fault-walkthrough/' };

// Apply page-specific evidence without changing unrelated review dates.
export function enrichFieldGuides(items) {
  const shift = items.find((item) => item.id === 'unlock-shift');
  shift.lead = 'Shift is introduced during the Jesse ritual in The Incursion Fault. Reach the West Incursion parking garage, obtain its key, enter the Fault through the TV, and finish the tutorial route to leave.';
  shift.sections[0] = { title: 'Reach the Fault and learn Shift', paragraphs: [
    'The mission begins in West Incursion. At the locked garage, follow the search area southwest. Use the alley behind WEAR’EM & WASH’EM, enter beside the ground-facing laser, and inspect the floating body for the security key.',
    'Unlock the garage, take the elevator, and drop through the rooftop opening. Cross the bottom gap to the TV. Enter the Fault and approach Jesse; Shift is introduced during the ritual, before the mission ends.',
    'Follow the surface tutorial and the next TV. After exiting, use the wall behind the entrance TV to climb back toward the garage roof. The lesson and the escape are separate stages.'
  ] };
  shift.sources = [incursionSource, ...shift.sources];
  shift.evidenceNote = 'The added garage route and ability timing follow PowerPyx’s mission walkthrough, reviewed October 8, 2026. We have not tested this route in-game. Use your on-screen control prompt; remapped controls and platform bindings may differ.';

  const reach = items.find((item) => item.id === 'unlock-reach');
  reach.lead = 'Reach is introduced during Jesse’s ritual in The Subway Fault, accessed from Railyard Street Station in the Evacuation Zone. Complete the training and use the grapple points to return from the tunnels.';
  reach.sections[0] = { title: 'From Railyard Street Station to Reach', paragraphs: [
    'Approach the Fault entrance at Railyard Street Station to start the mission. Descend into the subway and pass the train crossings. Shift offers an alternative crossing route if already unlocked; it is not listed as the mission’s entry requirement.',
    'Continue through the Mold encounters. At the large pit, descend while avoiding trains, reach the enemy platform opposite your entry, and pass its rear door. The TV in the next room opens the Fault.',
    'Find Jesse on the platform. Reach is introduced during the ritual; practice the anchors, then use elevated points to climb out after leaving the Fault. A distant point may become reachable after jumping and gliding.',
    'On the return route, continuing straight at the checkpoint branch leads to the Patterned Metro Tunnels fast travel door. Activate it before leaving.'
  ] };
  reach.sources = [subwaySource, ...reach.sources];
  reach.evidenceNote = 'The station approach, ritual timing, and return route follow PowerPyx’s Subway Fault walkthrough, reviewed October 8, 2026. No first-hand route test is claimed. Follow the current on-screen Reach binding rather than assuming one controller layout.';
  reach.sections.at(-1).paragraphs[1] = 'Reloading is an unverified troubleshooting suggestion, not a confirmed repair. It cannot grant an ability the save has not unlocked.';

  const order = items.find((item) => item.id === 'best-quest-order');
  order.checkpointTitle = 'Prerequisites to check before moving on';
  order.checkpoints = [
    ['Before Enemy of My Enemy', 'Finish the Central and West Incursion Resonants.', 'control-resonant-walkthrough'],
    ['Before the West Incursion Resonant', 'Complete The Incursion Fault.', 'unlock-shift'],
    ['During Recursions and Iterations', 'Complete The Subway Fault if unfinished.', 'unlock-reach'],
    ['During The House in Distress', 'Complete The Underpass Fault if unfinished.', 'all-quests'],
    ['Before traversing late Unknown', 'Finish Pope’s Research for Sever the Hedron Links.', 'all-quests']
  ];
  const diagnosis = items.find((item) => item.id === 'where-to-go-next');
  diagnosis.checkpointTitle = 'Match your current objective to a prerequisite';
  diagnosis.checkpoints = order.checkpoints.map(([state, requirement, id]) => [state.replace('Before ', '').replace('During ', ''), requirement, id]);
  for (const item of [shift, reach, order, diagnosis]) {
    item.reviewed = 'October 8, 2026';
    item.modified = '2026-10-08';
  }
}

export const fieldGuides = [
  {
    id: 'control-resonant-walkthrough',
    category: 'progression',
    title: 'CONTROL Resonant Walkthrough',
    description: 'A spoiler-light CONTROL Resonant walkthrough organized around the three parallel quest tracks and the abilities that gate each region.',
    eyebrow: 'Campaign route',
    lead: 'CONTROL Resonant is not a single straight mission chain. Keep Contain the Crisis, Search for Jesse, and Defeating Resonants moving together; when one route stops, another usually supplies the ability or boss clear that opens it.',
    sections: [
      {
        title: 'Use three quest tracks, not one checklist',
        paragraphs: [
          'Contain the Crisis carries the central story, Search for Jesse unlocks traversal powers, and Defeating Resonants grants Combat Abilities. The important progression rule is that these tracks cross. A main objective can pause until a Jesse Fault is complete or a regional Resonant is defeated.',
          'Treat the Quest Log as a set of parallel routes. Before assuming a marker is broken, inspect the other two main headings and look for an unfinished prerequisite in the same part of Manhattan.'
        ]
      },
      {
        title: 'Opening route: Downtown and Central',
        paragraphs: [
          'Finish Orientation and the early Downtown objectives before using Central as the first major expansion point. Central introduces a regional Resonant whose fire reward later removes Mold-covered barriers, so it has both story and exploration value.',
          'Open Fast Travel Doors as you pass them and visit vendors naturally. Fast travel starts at doors rather than from anywhere on the map, so a door skipped during the story creates avoidable walking later.'
        ]
      },
      {
        title: 'Middle route: Evacuation and West Incursion',
        paragraphs: [
          'Evacuation Zone advances the primary crisis route, while the Incursion Fault unlocks Shift and prepares the West Incursion Zone Resonant route. Shift handles gravity surfaces; the Dancer reward can supply Ground Slam for reinforced roof panels.',
          'If a boss marker is visible but the approach ends at an impossible wall, that is usually a progression signal. Complete the matching Jesse Fault before spending time searching for a hidden street entrance.'
        ]
      },
      {
        title: 'Late route: Underpass and Unknown',
        paragraphs: [
          'The Subway Fault unlocks Reach for grapple points and supports the Underpass route. Recursions and Iterations can force that detour if it is still unfinished. The later Underpass Fault is another explicit main-story dependency.',
          'Unknown adds a final exploration gate: Pope\'s Research is required for full travel through the region before the Hedron Link sequence can close. Clear that Side Story before treating an unreachable Unknown objective as a bug.'
        ]
      },
      {
        title: 'Save broad cleanup for full traversal access',
        paragraphs: [
          'Nothing in the trophy-related collectible set is reported as permanently missable. A region-by-region cleanup after the story is usually more efficient because Shift, Reach, impact options, and fire abilities remove the most common blockers.',
          'Optional Side Stories can still be completed as you encounter them. The Last Taxi route is designed for gradual progress, but its Underpass and Unknown entries are easier after the corresponding campaign paths open.'
        ]
      }
    ],
    sources: [sources.official, sources.quests, sources.collectibles],
    related: ['all-quests', 'best-quest-order', 'where-to-go-next']
  },
  {
    id: 'all-quests',
    category: 'progression',
    title: 'CONTROL Resonant Main Quest List',
    description: 'The CONTROL Resonant main quest structure explained: Contain the Crisis, Search for Jesse, regional Resonants, and optional Side Stories.',
    eyebrow: 'Quest reference',
    lead: 'The campaign uses three main headings rather than one linear list: Contain the Crisis, Search for Jesse, and Defeating Resonants. Side Stories sit beside those tracks and can unlock travel or completion progress without replacing the main route.',
    sections: [
      {
        title: 'Contain the Crisis mission chain',
        paragraphs: [
          'The primary chain runs through Orientation, Welcome to Manhattan, Evacuation Procedures, Arish\'s Briefing, Notes: Plan of Attack, Enemy of My Enemy, Recursions and Iterations, The House in Distress, The Hedron Link, Sever the Hedron Links, Rebuild, Fight the Core, The End, and The Beginning epilogue.',
          'Notes: Plan of Attack closes through Power Lines and Into the Sinkhole. Later entries deliberately stop for work in the Jesse and Resonant tracks, so a quiet primary objective does not mean the campaign has ended.'
        ]
      },
      {
        title: 'Search for Jesse missions',
        paragraphs: [
          'Notes: Jesse Sightings groups three Fault routes: The Incursion Fault, The Subway Fault, and The Underpass Fault. These are campaign-critical because they grant or exercise the traversal tools used by later story areas.',
          'The Incursion Fault is the Shift route. The Subway Fault unlocks Reach. The Underpass Fault is required during The House in Distress if it has not already been completed.'
        ]
      },
      {
        title: 'Defeating Resonants missions',
        paragraphs: [
          'The regional list covers West Incursion Zone, Central, Underpass, The Park, and Unknown. The Artist appears during the mandatory prologue; Hedron is the separate final boss rather than another regional Resonant entry.',
          'These fights are more than optional combat tests. Central and West Incursion rewards can remove exploration barriers, and specific Resonant clears are prerequisites for Enemy of My Enemy.'
        ]
      },
      {
        title: 'Where Side Stories fit',
        paragraphs: [
          'Side Stories are optional narrative and activity files distributed across the regions. Some can be progressed in pieces, as with The Last Taxi, while others provide practical access. Pope\'s Research is specifically required to travel through Unknown during the late campaign.',
          'Do not use the absence of a Side Story marker as proof that no activity exists nearby. Several begin from a local object, call, or environmental event rather than arriving automatically in the log.'
        ]
      },
      {
        title: 'How to use this list without spoilers',
        paragraphs: [
          'Use the three headings to identify the kind of blocker you have, then open only the relevant route guide. Mission names reveal progression structure, but the walkthrough hub avoids story outcomes and late narrative explanations.',
          'For a first playthrough, follow available objectives rather than trying to complete every item in the order shown. The game supports variation as long as the major ability and boss gates are eventually cleared.'
        ]
      }
    ],
    sources: [sources.quests, sources.collectibles],
    related: ['control-resonant-walkthrough', 'best-quest-order', 'where-to-go-next']
  },
  {
    id: 'best-quest-order',
    category: 'progression',
    title: 'CONTROL Resonant Quest Order',
    description: 'A low-backtracking CONTROL Resonant quest order through Downtown, Central, Evacuation, West Incursion, Underpass, and Unknown.',
    eyebrow: 'Route planning',
    lead: 'A reliable first-playthrough region order is Downtown, Central, Evacuation Zone, West Incursion Zone, Underpass, and Unknown. The Park is optional, but visiting it after Shift gives its exploration and Resonant route more value.',
    sections: [
      {
        title: 'Recommended region order',
        paragraphs: [
          'Start in Downtown, then establish Central before pushing the Evacuation story. Move through West Incursion after the Incursion Fault, continue into Underpass with Reach available, and leave Unknown for the final campaign phase.',
          'This order follows the way major traversal and combat tools become useful. It is not a lockstep speedrun route; detours are expected when a Side Story or vendor sits naturally along the current path.'
        ]
      },
      {
        title: 'Do Central before the first major story gate',
        paragraphs: [
          'Enemy of My Enemy requires both the Central Resonant and West Incursion Zone Resonant to be finished. Clearing Central early prevents a later trip back solely to satisfy that dependency.',
          'The Central reward also gives access to a fire option, which is useful when Mold-covered openings begin appearing in exploration and collectible routes.'
        ]
      },
      {
        title: 'Pair West Incursion with the Incursion Fault',
        paragraphs: [
          'Finish Jesse Sightings: The Incursion Fault to obtain Shift before committing to the West Incursion Resonant route. The Dancer approach expects wall and gravity traversal that is intentionally impossible without it.',
          'After the boss, Ground Slam is the direct answer to reinforced roof panels. Push remains a combat choice, while a charged Crush form can cover the environmental impact role if that is already part of the build.'
        ]
      },
      {
        title: 'Finish Subway Fault before deep Underpass work',
        paragraphs: [
          'Reach comes from Jesse Sightings: The Subway Fault and enables grapple movement. Recursions and Iterations checks that route during the story, so completing it before a long Underpass sweep avoids an abrupt stop.',
          'The Underpass Resonant also has its own access work. Treat it as a regional objective to revisit after the movement route and local Astral requirements are in place.'
        ]
      },
      {
        title: 'Use the endgame for completion cleanup',
        paragraphs: [
          'Pope\'s Research opens the travel needed for late Unknown objectives. Once that and the major ability gates are complete, collect by region rather than by item type to reduce repeated Fast Travel Door trips.',
          'The Last Taxi can be checked alongside that cleanup: finish accessible cabs early, then return for Underpass and Unknown when those regions are fully open.'
        ]
      }
    ],
    sources: [sources.quests, sources.collectibles, sources.bosses],
    related: ['control-resonant-walkthrough', 'unlock-shift', 'unlock-reach']
  },
  {
    id: 'where-to-go-next',
    category: 'progression',
    title: 'Where to Go Next in CONTROL Resonant',
    description: 'A progression diagnostic for missing objectives, impossible walls, grapple points, Ability Barriers, Mold, and blocked Unknown routes.',
    eyebrow: 'Progress diagnosis',
    lead: 'When the next route looks impossible, check the blocker before checking the map. Gravity surfaces point to Shift, grapple points point to Reach, reinforced roof panels need impact, Mold needs fire, and late Unknown travel needs Pope\'s Research.',
    sections: [
      {
        title: 'No primary objective is moving',
        paragraphs: [
          'Open the Quest Log and inspect all three main headings. Contain the Crisis can wait for a Search for Jesse Fault or a regional Resonant even when the dependency is not presented as another step on the current street marker.',
          'If Enemy of My Enemy is unavailable, confirm that both the Central and West Incursion Zone Resonants are complete. If Recursions and Iterations pauses, check The Subway Fault.'
        ]
      },
      {
        title: 'A wall or gravity surface blocks the route',
        paragraphs: [
          'Complete Jesse Sightings: The Incursion Fault and unlock Shift. Shift redirects Dylan onto gravity surfaces and is required for routes such as the Dancer and the Mold path toward The Collective.',
          'Do not search for a hidden staircase around an obvious gravity wall. The impossible orientation is the visual language for a missing traversal power.'
        ]
      },
      {
        title: 'A grapple point is visible but unusable',
        paragraphs: [
          'Complete Jesse Sightings: The Subway Fault to unlock Reach. Reach is the grapple-style traversal ability used where ordinary jumps and Shift cannot bridge the route.',
          'If the prompt still fails, confirm that the Fault is fully complete, then reposition until the intended anchor is in view. Some routes chain Reach with normal movement rather than pulling Dylan all the way to the destination.'
        ]
      },
      {
        title: 'A panel or Mold growth blocks an optional room',
        paragraphs: [
          'Use Ground Slam or a charged Crush impact on reinforced roof panels. Use Ignite, Inferno, or another valid fire effect on Mold-covered barriers. Wooden boards and electrical panels generally need only a normal weapon hit.',
          'These are exploration gates, not failed quest states. Mark the location and return after the relevant Resonant reward instead of spending time attacking it with the wrong damage type.'
        ]
      },
      {
        title: 'Unknown remains hard to traverse',
        paragraphs: [
          'Complete Pope\'s Research before the Sever the Hedron Links route. The Side Story supplies access needed to move through Unknown and is an explicit late-campaign dependency.',
          'If a Taxi, collectible, or objective sits beyond that route, continue the campaign and research work first. Reloading cannot create an ability or access state the save has not unlocked.'
        ]
      }
    ],
    sources: [sources.quests, sources.collectibles, sources.barriers],
    related: ['unlock-shift', 'unlock-reach', 'ability-barriers']
  },
  {
    id: 'abilities',
    category: 'abilities',
    title: 'CONTROL Resonant Abilities Guide',
    description: 'How traversal powers, Resonant Combat Abilities, Aberrant forms, Talents, and reset categories differ in CONTROL Resonant.',
    eyebrow: 'System overview',
    lead: 'CONTROL Resonant separates movement, Combat Abilities, Aberrant forms, and Talents. Shift and Reach come from Jesse Faults; Combat Ability choices come from Resonant bosses; forms and Talents are separate build layers.',
    sections: [
      {
        title: 'Traversal powers open the map',
        paragraphs: [
          'Shift comes from The Incursion Fault and redirects movement across gravity surfaces. Reach comes from The Subway Fault and connects Dylan to grapple points. These powers are campaign progression tools, not choices from a boss reward screen.',
          'When a route presents a clear movement language, follow the matching Jesse Sightings mission. A build reset will not substitute for an unfinished traversal quest.'
        ]
      },
      {
        title: 'Resonants grant Combat Ability choices',
        paragraphs: [
          'The Artist opens the first choice among Barrage, Volatile Anomaly, and Shield. Later regional Resonants offer fire, impact, Mold, Astral, and Command options. These abilities spend Power and shape how Dylan controls a fight.',
          'Some choices also affect exploration. Fire clears Mold-covered barriers, while Ground Slam breaks reinforced roof panels. A charged Crush secondary form can provide an alternate impact solution.'
        ]
      },
      {
        title: 'Aberrant forms are the weapon layer',
        paragraphs: [
          'Main forms, secondary forms, and combo finishers belong to the Aberrant system rather than the Combat Ability family. Unlocked alternatives can be equipped from the loadout without consuming a Reset Item.',
          'Do not reset an entire upgrade category merely to swap between forms already owned. First check the loadout and compare the role of each unlocked option.'
        ]
      },
      {
        title: 'Talents modify the loop',
        paragraphs: [
          'Talents are their own tree and their own reset category. They can support Power recovery, Falter pressure, survivability, or a particular form without changing which movement power or boss reward Dylan owns.',
          'Build around a repeatable loop: use melee and the Aberrant to create openings and recover Power, then spend Power on the Combat Ability that solves the current fight.'
        ]
      },
      {
        title: 'Reset only the category that is wrong',
        paragraphs: [
          'One Reset Item applies to one category: Combat Abilities, Talents, or Aberrant upgrades. A complete rebuild can therefore require more than one item, while a simple form swap can be free.',
          'Plan the desired replacement before spending the item. Vendors and quest rewards provide more, but stock and Source still make careless resets an avoidable cost.'
        ]
      }
    ],
    sources: [sources.official, sources.bosses, sources.respec],
    related: ['unlock-shift', 'unlock-reach', 'how-to-respec']
  },
  {
    id: 'unlock-shift',
    category: 'abilities',
    title: 'CONTROL Resonant: Unlock Shift',
    description: 'Unlock Shift through Jesse Sightings: The Incursion Fault and use gravity surfaces to reach West Incursion and Park routes.',
    eyebrow: 'Traversal unlock',
    lead: 'Shift is taught during Jesse Sightings: The Incursion Fault. It redirects Dylan across gravity anomalies and is required for important West Incursion Zone and Park routes.',
    sections: [
      {
        title: 'Which quest unlocks Shift?',
        paragraphs: [
          'Follow Notes: Jesse Sightings to Jesse Sightings: The Incursion Fault. Finish the Fault sequence rather than leaving after its first gravity section; the completed quest state is what adds Shift to Dylan\'s traversal kit.',
          'The ability is part of the Search for Jesse track. It does not come from The Artist, a vendor, or a Talent purchase.'
        ]
      },
      {
        title: 'What Shift does',
        paragraphs: [
          'Shift redirects momentum and lets Dylan treat altered surfaces as a path. The visual cue is architecture that has folded into an orientation ordinary movement cannot use.',
          'Approach the marked or readable surface, activate Shift, and continue movement relative to the new plane. The goal is route alignment, not damage.'
        ]
      },
      {
        title: 'Routes that expect Shift',
        paragraphs: [
          'The West Incursion Zone Resonant route requires Shift, and The Park Resonant approach also uses it. Collectibles placed on roofs or across gravity paths may appear on the map before the ability is available.',
          'This is why clearing the Incursion Fault early reduces backtracking: it turns visible but impossible routes into normal exploration paths.'
        ]
      },
      {
        title: 'Shift does not break every barrier',
        paragraphs: [
          'Shift reaches a reinforced roof panel but does not necessarily open it. Ground Slam or a charged Crush impact handles the panel itself; fire abilities handle Mold growth.',
          'Separate the movement problem from the obstacle problem. Reaching the correct side of a barrier may require Shift even when a different ability performs the final interaction.'
        ]
      },
      {
        title: 'If Shift does not appear to work',
        paragraphs: [
          'Confirm The Incursion Fault is marked complete, then verify that the surface is a gravity route rather than a Reach anchor or destructible panel. Recenter the camera and retry from the intended approach angle.',
          'If the route is part of a later mission, continue its active objective until the interaction is enabled. Reloading is useful only after the quest and route requirements are already satisfied.'
        ]
      }
    ],
    sources: [sources.official, sources.quests, sources.collectibles],
    related: ['unlock-reach', 'ability-barriers', 'best-quest-order']
  },
  {
    id: 'unlock-reach',
    category: 'abilities',
    title: 'CONTROL Resonant: Unlock Reach',
    description: 'Unlock Reach through Jesse Sightings: The Subway Fault and use grapple points for Underpass and late-game traversal.',
    eyebrow: 'Traversal unlock',
    lead: 'Reach is taught during Jesse Sightings: The Subway Fault. It activates grapple-style traversal points and is a required progression tool for Underpass routes and later exploration.',
    sections: [
      {
        title: 'Which quest unlocks Reach?',
        paragraphs: [
          'Open the Search for Jesse track and complete Jesse Sightings: The Subway Fault. Recursions and Iterations can direct you into this quest if the campaign reaches the dependency first.',
          'Finish the Fault before returning to deep Underpass exploration. Seeing an anchor early does not mean the save already owns the ability needed to use it.'
        ]
      },
      {
        title: 'What Reach does',
        paragraphs: [
          'Reach lets Dylan connect to grapple points across gaps and altered spaces. It covers movement that a normal jump cannot clear and that Shift cannot solve by changing surface orientation.',
          'Frame the anchor in the camera, wait for the usable state, then activate Reach. Continue steering after the pull because some routes expect a chain rather than a single automatic landing.'
        ]
      },
      {
        title: 'Why Reach matters in Underpass',
        paragraphs: [
          'The campaign checks The Subway Fault during Recursions and Iterations, and Reach supports the routes that move Dylan deeper into Underpass. It also reduces wasted searches around gaps that intentionally have no bridge.',
          'A visible anchor is stronger evidence than a nearby staircase. When the environment presents repeated grapple points, complete the Fault instead of trying to bypass the route.'
        ]
      },
      {
        title: 'Reach and Shift solve different problems',
        paragraphs: [
          'Shift changes how Dylan travels across gravity surfaces. Reach pulls him toward designated anchors. Many late routes combine the two, but neither is a direct replacement for the other.',
          'If the prompt is absent, identify the environmental cue first. A folded wall suggests Shift; a distant anchor suggests Reach; a sealed panel requires an impact or fire solution.'
        ]
      },
      {
        title: 'If a Reach point will not activate',
        paragraphs: [
          'Verify The Subway Fault is complete and move until the anchor is unobstructed. Check whether the current objective must advance before that specific route becomes active.',
          'Leave and reload only after confirming the progression state. A checkpoint refresh can repair a stale prompt, but it cannot grant Reach before the Fault is finished.'
        ]
      }
    ],
    sources: [sources.official, sources.quests, sources.collectibles],
    related: ['unlock-shift', 'where-to-go-next', 'ability-barriers']
  },
  {
    id: 'ability-barriers',
    category: 'abilities',
    title: 'CONTROL Resonant Ability Barriers',
    description: 'Identify CONTROL Resonant roof panels, Mold, boards, and electrical barriers, then use Ground Slam, Crush, fire, or a normal attack.',
    eyebrow: 'Exploration blocker',
    lead: 'Match the solution to the barrier: reinforced roof panels need Ground Slam or charged Crush, Mold needs a fire ability, while wooden boards and electrical panels usually break from ordinary weapon attacks.',
    sections: [
      {
        title: 'Reinforced roof panels',
        paragraphs: [
          'Stand above the square metal panel and use Ground Slam. Ground Slam is a reward option after The Dancer in West Incursion Zone. A charged Crush secondary-form attack can also provide the required downward impact.',
          'Shift may be needed to reach the roof, but Shift alone does not break the panel. Keep traversal and destruction as two separate checks.'
        ]
      },
      {
        title: 'Mold-covered openings',
        paragraphs: [
          'Use Ignite, Inferno, or another valid fire effect to burn Mold away. The fire family comes from defeating The Deserter on the Central Resonant route.',
          'If the Mold does not react, verify that the effect is actually applying fire to the growth rather than hitting nearby scenery. Return later if the Central reward is not yet available.'
        ]
      },
      {
        title: 'Wooden boards and weak doors',
        paragraphs: [
          'Boarded storefronts do not require a rare Combat Ability. Strike the boards with the Aberrant and clear the remaining pieces until the opening is usable.',
          'Do not spend Power merely because the map labels the route as blocked. The material itself is the useful clue.'
        ]
      },
      {
        title: 'Electrical panels and switches',
        paragraphs: [
          'Electrical panels generally respond to a normal weapon hit. Other doors use a nearby red switch rather than an Ability. Search the wall and adjacent corner before assuming the route is progression-locked.',
          'A door can sit beside an ability icon while still having a local mechanical control. Test the obvious panel before leaving the region.'
        ]
      },
      {
        title: 'Why the right solution can still fail',
        paragraphs: [
          'Approach metal panels from above, not from street level. Charge Crush fully when using it as the Ground Slam alternative. For Mold, apply the fire effect directly and allow its reaction to finish.',
          'If none of those checks work, confirm the barrier type and current game version, then return after the related Resonant. Repeatedly testing unrelated powers only drains Power and obscures the actual gate.'
        ]
      }
    ],
    sources: [sources.collectibles, sources.barriers, sources.bosses],
    related: ['unlock-shift', 'unlock-reach', 'where-to-go-next']
  },
  {
    id: 'how-to-respec',
    category: 'abilities',
    title: 'How to Respec in CONTROL Resonant',
    description: 'Use Reset Items in the Gap to reset Combat Abilities, Talents, or Aberrant upgrades without confusing a respec with a free form swap.',
    eyebrow: 'Build reset',
    lead: 'Take a Reset Item to the Gap and reset the category you want to rebuild. Combat Abilities, Talents, and Aberrant upgrades are separate categories, so one item does not erase the entire character.',
    sections: [
      {
        title: 'Get a Reset Item first',
        paragraphs: [
          'Reset Items can come from progression rewards and vendor stock. Vendors are the predictable option and commonly list an item for 5,000 Source, although available stock can change with vendor level and patches.',
          'Decide which category is wrong before buying or spending. A form already unlocked in the loadout may be swappable without a reset.'
        ]
      },
      {
        title: 'Return to the Gap',
        paragraphs: [
          'Build management takes place in the Gap. Open the interface for Combat Abilities, Talents, or Aberrant upgrades and choose the reset action shown for that category.',
          'Confirm only after checking the replacement plan. The item is a consumable resource rather than a free undo button available from every field menu.'
        ]
      },
      {
        title: 'One item resets one category',
        paragraphs: [
          'Resetting Combat Abilities reopens the boss-earned choices. Resetting Talents refunds that tree. Resetting Aberrant upgrades handles weapon-form investment and related finishers.',
          'Changing all three layers can therefore cost multiple items. Start with the category that directly prevents the build from doing its job.'
        ]
      },
      {
        title: 'Do not reset for a simple loadout swap',
        paragraphs: [
          'Unlocked main forms, secondary forms, and combo finishers can be changed through the loadout. That equipment change is separate from refunding materials or reversing the upgrade path.',
          'Check the loadout before touching Reset All. This is especially useful when an exploration barrier needs charged Crush for one route but the regular combat setup uses another secondary form.'
        ]
      },
      {
        title: 'When a Combat Ability reset is worth it',
        paragraphs: [
          'Reset when a boss choice leaves a real role uncovered: no reliable defense, no ranged pressure, no fire for Mold, or no impact option for a preferred exploration route. Avoid resetting only because another build looks stronger in a short clip.',
          'Test the current loop first, including Power recovery and Talents. An ability can feel weak when the supporting resource loop is the actual problem.'
        ]
      }
    ],
    sources: [sources.respec, sources.artist, sources.bosses],
    related: ['abilities', 'best-first-ability', 'early-game-tips']
  },
  {
    id: 'bosses',
    category: 'combat',
    title: 'CONTROL Resonant Bosses & Rewards',
    description: 'All six Resonants plus Hedron, with their regions, access gates, and Combat Ability rewards in one spoiler-light checklist.',
    eyebrow: 'Boss index',
    lead: 'There are six named Resonants - The Artist, Deserter, Dancer, Collective, Physicist, and Co-Director - plus Hedron as the final boss. Regional victories grant Combat Ability choices; Hedron grants an extra Combat Ability Point.',
    sections: [
      {
        title: 'The Artist - Downtown',
        paragraphs: [
          'The Artist is the mandatory prologue boss during Orientation. The victory opens the first Combat Ability choice: Barrage, Volatile Anomaly, or Shield, and teaches the pattern used after later Resonant fights.',
          'Choose by missing role rather than by a universal tier list: ranged pressure, setup damage, or defense and Falter control.'
        ]
      },
      {
        title: 'Deserter and Dancer',
        paragraphs: [
          'The Deserter is the Central Resonant and rewards a choice between Ignite and Inferno. Either fire direction supports combat and removes Mold-covered barriers.',
          'The Dancer is the West Incursion Zone Resonant and requires Shift for the route. Its reward choice is Push or Ground Slam; Ground Slam directly opens reinforced roof panels.'
        ]
      },
      {
        title: 'Collective and Physicist',
        paragraphs: [
          'The Collective waits in The Park after the Shift route and the local Mold-gate work. Its reward is Spore Burst or Growth, two different approaches to applying Mold pressure.',
          'The Physicist is the Underpass Resonant beyond the Astral route and key requirements. Its reward is Spike or Astral Rebuke.'
        ]
      },
      {
        title: 'Co-Director and Hedron',
        paragraphs: [
          'The Co-Director closes the Unknown regional Resonant route and grants Command. It belongs to the six-Resonant set even though its quest title uses the region rather than the entity name.',
          'Hedron is the final boss after the Hedron Links are severed. It is not a seventh regional Resonant reward choice; the reported reward is an extra Combat Ability Point.'
        ]
      },
      {
        title: 'Why boss markers can appear too early',
        paragraphs: [
          'A Resonant can be visible in the log before Dylan owns the traversal power or regional access needed to reach the arena. Dancer and Collective routes expect Shift, while Underpass and Unknown have their own route requirements.',
          'When an arena approach dead-ends, finish the relevant Jesse Fault or regional prerequisite. The marker is a future objective, not proof that the current path is bugged.'
        ]
      }
    ],
    sources: [sources.bosses, sources.quests, sources.artist],
    related: ['best-first-ability', 'abilities', 'best-quest-order']
  },
  {
    id: 'best-first-ability',
    category: 'combat',
    title: 'CONTROL Resonant: First Ability',
    description: 'Choose Barrage, Volatile Anomaly, or Shield after The Artist based on ranged pressure, setup damage, or survivability.',
    eyebrow: 'First build choice',
    lead: 'There is no single best first ability for every player. Take Barrage for immediate ranged pressure, Volatile Anomaly for a summon-and-throw setup, or Shield when survival and Falter control are the missing parts of the build.',
    sections: [
      {
        title: 'Choose Barrage for simple ranged pressure',
        paragraphs: [
          'Barrage sends projectiles at a target and is the easiest option to understand immediately after The Artist. It covers flying enemies, awkward elevations, and moments when closing into melee is unsafe.',
          'Its Power cost makes the core loop important: build Power through aggressive weapon use, then spend it when distance creates a real advantage.'
        ]
      },
      {
        title: 'Choose Volatile Anomaly for setup damage',
        paragraphs: [
          'Volatile Anomaly creates an ally that applies pressure and can be thrown for an explosion. It rewards timing and battlefield awareness rather than a single direct cast.',
          'Pick it if managing a summon sounds useful and you want a higher-setup payoff. It is less immediate than Barrage and less forgiving than Shield while learning the combat rhythm.'
        ]
      },
      {
        title: 'Choose Shield for survival and control',
        paragraphs: [
          'Shield converts Power into protection and changes the dodge into an offensive Shield Bash. It is the only clearly defensive choice in the first set and can create strong Falter openings.',
          'Pick Shield if The Artist exposed a survival problem or if the build lacks a reliable Blunt-control tool. Protection still depends on Power management, so it should support aggression rather than replace it.'
        ]
      },
      {
        title: 'Use the fight to identify the missing role',
        paragraphs: [
          'If the boss was difficult because you could not safely reach it, Barrage addresses distance. If crowded moments broke the rhythm, Volatile Anomaly adds another source of pressure. If damage intake ended attempts, Shield provides the cleanest correction.',
          'This role test is more durable than a universal ranking because later forms, Talents, and boss rewards can change which option fits the build.'
        ]
      },
      {
        title: 'The choice is reversible',
        paragraphs: [
          'A Combat Ability Reset Item in the Gap can reopen ability selections. Vendors and progression provide Reset Items, but a reset consumes the category resource, so test the first choice before paying to replace it.',
          'Do not restart the entire campaign only to change this screen. The game includes a respec route, and later abilities may solve the role that currently feels missing.'
        ]
      }
    ],
    sources: [sources.artist, sources.respec, sources.official],
    related: ['bosses', 'how-to-respec', 'early-game-tips']
  },
  {
    id: 'early-game-tips',
    category: 'combat',
    title: 'CONTROL Resonant Early Game Tips',
    description: 'Practical first-hours priorities for combat Power, traversal quests, vendors, Fast Travel Doors, build choices, and map cleanup.',
    eyebrow: 'First hours',
    lead: 'The strongest early plan is to stay aggressive enough to recover Power, keep Search for Jesse moving for traversal, open every Fast Travel Door you pass, and postpone exhaustive collectible cleanup until the major abilities are unlocked.',
    sections: [
      {
        title: 'Build Power before spending it',
        paragraphs: [
          'Combat Abilities spend Power, while the melee-focused loop expects Dylan to keep engaging rather than waiting at long range. Use the Aberrant to create openings and restore the resource before committing to another expensive ability.',
          'A build can feel underpowered when the real issue is casting without a recovery plan. Track the whole loop instead of judging only the damage number on one ability.'
        ]
      },
      {
        title: 'Choose the first ability by role',
        paragraphs: [
          'After The Artist, Barrage covers range, Volatile Anomaly covers setup pressure, and Shield covers survival and Falter. Pick the role the opening fight proved you lack.',
          'The choice can be reset later, so avoid restarting the campaign or hoarding every upgrade because the first selection feels permanent.'
        ]
      },
      {
        title: 'Prioritize traversal missions',
        paragraphs: [
          'The Incursion Fault unlocks Shift and The Subway Fault unlocks Reach. Completing them early turns apparent dead ends into readable routes and reduces return trips for Side Stories and collectibles.',
          'When a route communicates a missing power, place a mental marker and continue a productive quest rather than attacking the environment for several minutes.'
        ]
      },
      {
        title: 'Open doors and use vendors',
        paragraphs: [
          'Fast travel works through Fast Travel Doors, so activate each one while moving through a region. Vendor access matters for Reset Items and other build resources; visiting naturally is cheaper than a dedicated trip after every decision.',
          'Keep enough Source in reserve for a correction, but do not reset a category when a free loadout swap already solves the immediate problem.'
        ]
      },
      {
        title: 'Delay the full collectible sweep',
        paragraphs: [
          'Trophy-related collectibles are reported as available after the story, and many routes expect Shift, Reach, impact, or fire. Collect obvious items during missions, then perform a region-by-region cleanup once the movement kit is complete.',
          'Side Stories are different: start them when convenient and finish accessible stages. The Last Taxi checklist, for example, works well as a gradual route across regions.'
        ]
      }
    ],
    sources: [sources.official, sources.quests, sources.collectibles, sources.artist],
    related: ['best-first-ability', 'control-resonant-walkthrough', 'abilities']
  }
];

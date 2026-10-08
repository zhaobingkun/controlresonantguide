export const site = {
  name: 'Resonant Field Guide',
  shortName: 'RFG',
  domain: 'https://controlresonantguide.app',
  description: 'Independent CONTROL Resonant walkthroughs for puzzles, Side Stories, abilities, bosses, collectibles, and campaign progression.',
  launched: '2026-10-01',
  lastModified: '2026-10-02',
  authorName: 'Resonant Field Guide Editorial Desk',
  lastVerified: 'October 2, 2026',
  officialGameUrl: 'https://www.remedygames.com/games/control-2',
  officialNewsUrl: 'https://www.remedygames.com/article/control-resonant-is-out-now',
  officialMediaUrl: 'https://www.remedygames.com/media-and-influencers',
  taxiOverviewUrl: 'https://www.gamesradar.com/games/action-rpg/control-resonant-taxis/',
  taxiWalkthroughUrl: 'https://www.powerpyx.com/control-resonant-all-taxi-locations-the-last-taxi-walkthrough/',
  patchNotesUrl: 'https://steamdb.info/patchnotes/25600401/'
};

export const locations = [
  {
    id: 'downtown',
    number: '01',
    name: 'Downtown',
    label: 'Deserted Area road',
    puzzle: 'roof-signs',
    confidence: 'Source-reported location; not tested in-game',
    intro: 'The Downtown taxi sits at the north end of the Deserted Area road, mixed into a stalled line of traffic.',
    route: 'Enter the Deserted Area and follow the main road north. Keep the abandoned traffic line in view instead of cutting through interiors. The interactable cab is among the vehicles near the end of the road.',
    landmark: 'A dense traffic jam on the northern road through the Deserted Area.',
    whyMissed: 'It blends into a long line of ordinary abandoned vehicles. Players searching only for an isolated quest object can walk past the entire traffic jam.',
    confirmation: 'As you close in, the anomalous cab is reported to honk and flash its lights before the interaction appears.',
    warning: 'Do not choose a taxi by paint damage or orientation. The Threshold tests a live signal clue after you answer Mila.',
    steps: [
      'Reach the Deserted Area in Downtown and follow the road toward its north end.',
      'Walk the traffic line until the payphone interaction becomes available.',
      'Answer Mila, enter the Threshold, and inspect the taxis before making a selection.',
      'Use the green traffic light as confirmation. A wrong answer resets the current test.'
    ]
  },
  {
    id: 'central',
    number: '02',
    name: 'Central',
    label: 'Warehouse service lane',
    puzzle: 'taxi-lights',
    confidence: 'Sources disagree on the Central landmark',
    intro: 'GamesRadar places the Central taxi behind a warehouse; PowerPyx instead describes a main-road approach. This route follows GamesRadar and has not been tested in-game.',
    route: 'Circle behind the Central warehouse and check the service lane between the rear wall and the nearby street. The taxi can be easy to pass when approaching only from the front entrance.',
    landmark: 'Rear warehouse access and a narrow service road in Central.',
    whyMissed: 'The front of the warehouse looks like the natural destination, but the taxi is reached by circling to the service side.',
    confirmation: 'The cab becomes easier to identify once the warehouse wall is behind you and the service lane is fully visible.',
    warning: 'Check the rear lights as well as the headlights. Several rounds use more than one light group.',
    steps: [
      'Travel to Central and approach the warehouse block.',
      'Move around the building to the rear service lane.',
      'Find the cab and answer the nearby payphone.',
      'Inside the Threshold, make each choice from the active lights, not from taxi position.'
    ]
  },
  {
    id: 'evacuation-zone',
    number: '03',
    name: 'Evacuation Zone',
    label: 'Dead-end between buildings',
    puzzle: 'roof-signs',
    confidence: 'Source-reported location and nearby hazards',
    intro: 'This taxi is parked in a dead-end between buildings inside the Evacuation Zone.',
    route: 'Work inward from the zone road network and look for the blocked lane between buildings. Clear or bypass the local Hiss hazards before using the phone so you can study the puzzle without pressure.',
    landmark: 'A closed street pocket between buildings, with Hiss spikes or laser hazards nearby.',
    whyMissed: 'The nearby Hiss hazards pull attention toward combat and away from the dead-end where the taxi is parked.',
    confirmation: 'Clear the immediate hazard, then listen for the horn and check the blocked lane for flashing taxi lights.',
    warning: 'The environmental hazards are part of the approach, not the taxi logic. Finish the encounter before trying to read the signal pattern.',
    steps: [
      'Enter the Evacuation Zone and follow the streets toward the building-lined dead-end.',
      'Deal with Hiss spikes, beams, or nearby enemies before interacting.',
      'Locate the taxi and answer Mila at the payphone.',
      'Read the clue only after the Threshold scene has settled.'
    ]
  },
  {
    id: 'west-incursion-zone',
    number: '04',
    name: 'West Incursion Zone',
    label: 'Gravity wall near Empire Avenue',
    puzzle: 'streetlight-rhythm',
    confidence: 'Gravity-wall approach agrees across sources',
    intro: 'The West Incursion taxi is on a gravity wall near Empire Avenue Station, along the Theater approach.',
    route: 'Start near Empire Avenue Station and follow the Theater approach. Look for the gravity wall southwest of the fast travel door; the taxi is attached to the altered surface rather than parked in a rear lot.',
    landmark: 'Gravity wall southwest of Empire Avenue, along the Theater route.',
    whyMissed: 'The obvious route continues toward the Theater. The taxi is attached to the altered gravity surface, so searching only ordinary street-level parking can miss it.',
    confirmation: 'Use Empire Avenue Station as the anchor and verify that you are on the Theater-side route before searching the smaller parking area.',
    warning: 'Watch a full light cycle before choosing. The final round depends on which lamp is out of sync, not which one flashes first.',
    steps: [
      'Use Empire Avenue Station as the nearest orientation point.',
      'Follow the Theater route and inspect the nearby gravity wall.',
      'Use the gravity route to reach the taxi, enter it, then answer Mila inside the Threshold.',
      'Observe the overhead streetlights for a complete cycle in every round.'
    ]
  },
  {
    id: 'the-park',
    number: '05',
    name: 'The Park',
    label: 'Upper parking garage',
    puzzle: 'mold-repair',
    confidence: 'Garage location and repair sequence widely reported',
    intro: 'The Park taxi is reached through the parking garage, with the objective continuing on an upper level.',
    route: 'Enter the Park garage and work upward rather than searching the lawns. Follow ramps and accessible upper-floor paths until the cab and phone area come into view.',
    landmark: 'An upper level of the multi-story parking garage in The Park.',
    whyMissed: 'Searching the open park never reveals it. The encounter is vertical and requires following the garage ramps upward.',
    confirmation: 'When the route begins to feel enclosed and industrial rather than park-like, keep climbing until the taxi stage appears.',
    warning: 'The repair test includes decoy parts. Clear the mold links first, then place only pieces that complete the cab silhouette.',
    steps: [
      'Enter the parking garage in The Park.',
      'Climb through the garage to the upper level where the taxi is staged.',
      'Answer Mila and follow the Threshold route to the damaged taxi.',
      'Remove linked mold growth before selecting and placing replacement parts.'
    ]
  },
  {
    id: 'underpass',
    number: '06',
    name: 'Underpass',
    label: 'Deeper Underpass research ledge',
    puzzle: 'blackout',
    confidence: 'Sources describe the approach differently',
    intro: 'The Underpass taxi sits deeper in the area near the research route and is easiest to reach after opening the Recursions and Iterations path.',
    route: 'Use the cable-car and research-area route into the Deeper Underpass. Look across the ledges rather than staying at road level; the taxi encounter sits off the most direct transit line.',
    landmark: 'A research-area ledge in the Deeper Underpass, beyond the cable-car route.',
    whyMissed: 'The taxi is not on the first obvious road surface, and the deeper research route may still be locked by story progression.',
    confirmation: 'If Recursions and Iterations has not opened the deeper cable-car path, leave this entry for later rather than searching the shallow Underpass.',
    warning: 'Only judge the taxi state during the blackout window. Lights seen while the tunnel is fully lit can be deliberate decoys.',
    steps: [
      'Progress far enough to use the Recursions and Iterations route into the deeper area.',
      'Follow the cable-car and research path, checking the side ledges.',
      'Reach the taxi, answer the phone, and enter the tunnel Threshold.',
      'Wait for the overhead lights to switch off before evaluating each cab.'
    ]
  },
  {
    id: 'unknown',
    number: '07',
    name: 'Unknown',
    label: 'Southern island road',
    puzzle: 'shadows',
    confidence: 'Sources disagree on direction from Evac Building',
    intro: 'GamesRadar places the Unknown taxi west of the Evac Building on the southernmost island; PowerPyx places it north of the building. The written directions conflict, so confirm the taxi marker before following either bearing.',
    route: 'Cross into the southern island and orient from the Evac Building. Move west onto the empty roadway; the isolated cab stands out once you are on the correct island.',
    landmark: 'A quiet road west of the Evac Building on the southernmost island.',
    whyMissed: 'Unknown is visually disorienting and the empty road can look like scenery at the edge of the playable route.',
    confirmation: 'Confirm the Evac Building is east of your position and that you are on the southernmost island before following the empty road.',
    warning: 'The portable light is the measuring tool. Move it deliberately and compare the cast shadows instead of staring at the taxi models.',
    steps: [
      'Reach the southernmost island in Unknown.',
      'Use the Evac Building as your anchor and move west to the empty road.',
      'Answer Mila at the isolated taxi and enter the Threshold.',
      'Carry the portable light past each cab and compare the resulting shadows.'
    ]
  }
];

export const puzzles = [
  {
    id: 'roof-signs',
    name: 'Roof Sign Puzzle',
    signal: 'Taxi roof signs change as you approach',
    short: 'Approach the taxis and watch which roof sign stays lit or reacts differently.',
    answer: 'Test the signs at close range. Choose the cab whose roof sign remains active or uniquely responds after the decoys switch off.',
    details: [
      'Round one commonly asks for the only taxi with its roof sign lit.',
      'In a later round, approach every lit sign. Decoys may switch off when Dylan gets close.',
      'A final variation can reveal the correct cab through a delayed sign response. Re-scan the full row after testing a decoy.'
    ],
    mistake: 'Choosing from a distance. Proximity is part of the test, so the initial row is not the final state.'
  },
  {
    id: 'taxi-lights',
    name: 'Taxi Lights Puzzle',
    signal: 'Headlights, tail lights, and roof signs form the clue',
    short: 'Walk around each taxi and compare all three light groups before choosing.',
    answer: 'Match the unique combination of front, rear, and roof lights. One commonly reported sequence progresses from all lights, to roof sign only, to a combined front-and-rear state.',
    details: [
      'Check the taxi from both ends; the front view alone hides half of the evidence.',
      'Treat each round as a fresh comparison because the target combination changes.',
      'The green traffic light confirms the correct selection before the next round.'
    ],
    mistake: 'Reading only the headlights and missing a rear-light difference.'
  },
  {
    id: 'streetlight-rhythm',
    name: 'Streetlight Rhythm Puzzle',
    signal: 'Overhead lamps flash in a repeating rhythm',
    short: 'Stop moving, watch one complete cycle, then identify the taxi under the requested pattern.',
    answer: 'Reported rounds use the flashing lamp, the only steady lamp, and finally the lamp blinking out of sync with the others.',
    details: [
      'Use a fixed camera angle where you can see the lamps and taxis together.',
      'For the steady-light round, wait long enough to prove the light never joins the flash.',
      'For the out-of-sync round, count two or three cycles. The first flash is not reliable evidence.'
    ],
    mistake: 'Selecting the first lamp that changes instead of checking the rhythm across the row.'
  },
  {
    id: 'blackout',
    name: 'Blackout Puzzle',
    signal: 'Tunnel lights switch off at regular intervals',
    short: 'Ignore the normal-lit state and judge each taxi only during the blackout.',
    answer: 'Use the blackout as a filter. Reported rounds include a cab that stays lit, one that becomes completely dark, and one whose lights are off while the streetlights are on.',
    details: [
      'Stand where you can see several taxis without turning during the short blackout.',
      'Wait through at least two cycles when a roof sign flash is easy to miss.',
      'Reposition between rounds if a pillar blocks the rear or roof of a candidate taxi.'
    ],
    mistake: 'Choosing from the brightly lit state. That state is designed to hide the meaningful difference.'
  },
  {
    id: 'mold-repair',
    name: 'Mold Repair Puzzle',
    signal: 'A damaged taxi is connected to mold and loose parts',
    short: 'Clear the linked mold sources, then rebuild the cab with only the pieces that fit.',
    answer: 'Follow the gray connections to remove active mold, then restore the missing yellow body and wheel components. Leave decoy parts unused when the silhouette is already complete.',
    details: [
      'Trace each visible gray strand back to its mold source before trying to assemble the cab.',
      'Reported useful parts include wheels, yellow hood/body panels, bumpers, wheel protection, and the taxi sign light.',
      'Use the outline and attachment points, not color alone. Some loose objects are deliberate decoys.'
    ],
    mistake: 'Trying to force every loose item onto the taxi. Completion requires the correct set, not an empty floor.'
  },
  {
    id: 'shadows',
    name: 'Shadow Puzzle',
    signal: 'A portable light changes the shadows cast by each taxi',
    short: 'Carry the light along the row and look for the taxi whose shadow behaves differently.',
    answer: 'Shine the portable light toward the wall and choose a cab casting a taxi-shaped shadow, rather than a different vehicle silhouette. For the final round, GamesRadar additionally describes checking for the roof-sign shadow; PowerPyx does not describe that distinction.',
    details: [
      'Keep roughly the same distance and angle when testing every taxi.',
      'Look at the ground and wall behind the cab rather than the light source itself.',
      'If the difference is unclear, move the light past the row in one slow sweep and compare silhouettes.'
    ],
    mistake: 'Changing the light angle for every cab, which makes ordinary shadows look different.'
  }
];

export const guides = [
  {
    id: 'missing-taxi-fix',
    title: 'Last Taxi Location and Progress Help',
    description: 'A short troubleshooting order for missing taxis, silent payphones, blocked routes, and incomplete progress.',
    eyebrow: 'Troubleshooting',
    lead: 'Check your taxi landmark, route access, and completed Threshold rounds before treating the quest as broken. The website checklist is separate from your game save; the suggestions below are diagnostic checks, not confirmed bug fixes.',
    sections: [
      ['1. Verify the landmark', 'Use the zone-specific landmark and approach text, not just the district name. Central is behind the warehouse; West Incursion is on a gravity wall near Empire Avenue; The Park taxi is inside the garage.'],
      ['2. Clear the area', 'Finish active encounters and remove hazards close to the phone. Some interactions are difficult to notice while combat audio and effects are still active.'],
      ['3. Check progression', 'The deeper Underpass route in particular depends on access through later paths. If a traversal route is still closed, continue the main path and return.'],
      ['4. If the prompt still fails', 'After confirming the location and route access, you can try leaving the area and reloading the latest checkpoint. This is a general diagnostic suggestion, not a verified fix. Preserve your existing saves.'],
      ['Website checklist versus game progress', 'This website stores checkboxes only in localStorage on this browser. Clearing browser data removes them; resetting the checklist does not change the game. Use the in-game quest state to confirm completion.'],
      ['Confirm the last call', 'After completing all seven encounters, answer Mila one final time in the Threshold alley. A correct selection is only one round, not a completed encounter. If the quest remains open, compare the seven regions against your completed rounds.'],
      ['Report an unresolved issue', 'Record your platform, game version, current quest objective, region, and a screenshot or clip of the missing interaction. Include whether reloading changed the state. This evidence helps distinguish a route misunderstanding from a reproducible issue.']
    ]
  }
];

export const faqs = [
  ['How many taxis are in The Last Taxi?', 'Seven taxis are reported across Downtown, Central, Evacuation Zone, West Incursion Zone, The Park, Underpass, and Unknown.'],
  ['Are taxi puzzles fixed to specific zones?', 'Published walkthroughs disagree on some round sequences. That does not establish random zone assignments. Follow the visible clue rather than assuming a source conflict proves the game varies.'],
  ['How do I know a taxi answer is correct?', 'The traffic light turns green after a correct selection and the encounter advances to the next round.'],
  ['What is The Last Taxi reward?', 'The reported completion reward is the Untapped Coffee Cup Artifact. Game Update 1.4.0 also fixed a launch issue that could prevent The Last Taxi rewards from being granted.'],
  ['Does the checklist sync with my game?', 'No. It is a private browser checklist stored on this device and does not connect to your game or save file.']
];

export const consolidatedRoutes = {
  "/guides/how-to-start-last-taxi/": "/last-taxi/#start",
  "/guides/mila-payphone/": "/last-taxi/#start",
  "/guides/progress-not-saving/": "/guides/missing-taxi-fix/#progress",
  "/taxi-ending/": "/last-taxi/#completion"
};

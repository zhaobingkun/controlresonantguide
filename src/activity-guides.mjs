export const activitySources = {
  freezeFrame: [
    {
      label: 'PowerPyx: all 14 Freeze Frame camera locations',
      url: 'https://www.powerpyx.com/control-resonant-all-camera-locations-freeze-frame-walkthrough/'
    },
    {
      label: 'GamesRadar: camera and Instant Photo locations',
      url: 'https://www.gamesradar.com/games/action-rpg/control-resonant-instant-photos-camera-freeze-frame/'
    }
  ],
  powerLines: [
    {
      label: 'PowerPyx: Power Lines objective walkthrough',
      url: 'https://www.powerpyx.com/control-resonant-power-lines-walkthrough/'
    },
    {
      label: 'GamesRadar: Power Lines puzzle solutions',
      url: 'https://www.gamesradar.com/games/action-rpg/control-resonant-power-lines/'
    }
  ],
  dogs: [
    {
      label: 'PowerPyx: all dog and toy locations',
      url: 'https://www.powerpyx.com/control-resonant-all-dog-locations-every-dog-has-her-day-walkthrough/'
    },
    {
      label: 'GamesRadar: Mysterious Dog route',
      url: 'https://www.gamesradar.com/games/action-rpg/control-resonant-mysterious-dog/'
    }
  ]
};

export const freezeFrameCameras = [
  {
    id: 'downtown-1', zone: 'Downtown', number: '01', gate: 'Shift + Ground Slam',
    route: 'Approach from the street northwest of the camera, Shift onto the roof, then break the roof barrier and drop in behind its view.'
  },
  {
    id: 'downtown-2', zone: 'Downtown', number: '02', gate: 'Power Core route',
    route: 'Carry a charge from the Power Core Station north of the camera to the northeast roof, then use it to open the door behind the camera.'
  },
  {
    id: 'central-1', zone: 'Central', number: '03', gate: 'Watchtower interior',
    route: 'Start at the Watchtower door, descend to the side storage room, climb the scaffolding, and use the ceiling opening to land behind the camera.'
  },
  {
    id: 'central-2', zone: 'Central', number: '04', gate: 'Reach + opened shortcut',
    route: 'Let it see you once, descend through the building and open the street-level door. Wait for the respawn click, then retrace the interior stairs behind it.'
  },
  {
    id: 'west-1', zone: 'West Incursion Zone', number: '05', gate: 'Shift platforms',
    route: 'Use the gravity surface west of the camera, jump onto the floating platforms while inverted, and follow the second platform to its blind side.'
  },
  {
    id: 'west-2', zone: 'West Incursion Zone', number: '06', gate: 'Shift + Reach',
    route: 'Find the sideways building in the far northwest, climb to the roof above the red camera light with Reach, then drop directly behind it.'
  },
  {
    id: 'evacuation-1', zone: 'Evacuation Zone', number: '07', gate: 'Reach + Power Core route',
    route: 'Relay a charge west from the southeast Power Core Station through the street boxes, Reach the camera roof, and power the rear door.'
  },
  {
    id: 'evacuation-2', zone: 'Evacuation Zone', number: '08', gate: 'Elevator shortcut',
    route: 'Let the roof camera see you, enter the building, call the elevator and leave at street level. After the click, ride back up behind it.'
  },
  {
    id: 'park-1', zone: 'The Park', number: '09', gate: 'Ignite or Inferno',
    route: 'Enter Nomand Avenue Station north of the icon, take the left route, burn the webbed obstruction, and follow that passage behind the camera.'
  },
  {
    id: 'park-2', zone: 'The Park', number: '10', gate: 'Powered elevator',
    route: 'Bring a charge north from the street Power Core to the elevator west of the sewer entrance, ride up, and cross to the rear platform.'
  },
  {
    id: 'underpass-1', zone: 'Underpass', number: '11', gate: 'Reach',
    route: 'At the yellow corridor on the northeast island, hug the left edge, grapple to the lower route, and drop through the floor opening behind it.'
  },
  {
    id: 'underpass-2', zone: 'Underpass', number: '12', gate: 'Shift route',
    route: 'On the island south of Tubes Island, Shift onto the opposite wall, follow the red floor, and fall through the upper opening into the camera recess.'
  },
  {
    id: 'unknown-1', zone: 'Unknown', number: '13', gate: "Pope's Research", 
    route: 'Reach the construction site on the correct gravity plane, descend inside, clear the Mold ambush, and use the lower room to approach behind the blue Mold opening.'
  },
  {
    id: 'unknown-2', zone: 'Unknown', number: '14', gate: "Pope's Research", 
    route: 'Let the shop camera see you, pass it to the garage, open the red garage door, walk away for the respawn click, then return through that garage.'
  }
];

export const dogStops = [
  {
    id: 'downtown', number: '01', zone: 'Downtown', gate: 'Early access',
    dog: 'Southwest Downtown rooftop.',
    toy: 'On the neighboring roof to the left of the dog.'
  },
  {
    id: 'central', number: '02', zone: 'Central', gate: 'Laser alley return',
    dog: 'Rooftop in eastern Central.',
    toy: 'At the far end of the alley below, in the direction the dog faces.'
  },
  {
    id: 'west', number: '03', zone: 'West Incursion Zone', gate: 'Shift',
    dog: 'Northwest rooftop reached through the gravity route.',
    toy: 'On the next roof along the dog\'s sightline.'
  },
  {
    id: 'evacuation', number: '04', zone: 'Evacuation Zone', gate: 'Shift',
    dog: 'Northern rooftop in the folded city section.',
    toy: 'On the upside-down roof directly above the dog; Shift there and back.'
  },
  {
    id: 'park', number: '05', zone: 'The Park', gate: 'Power Core relay',
    dog: 'Northeast corner of The Park.',
    toy: 'On the roof behind the dog. Relay electricity through the midpoint box to power the yellow lift.'
  },
  {
    id: 'underpass', number: '06', zone: 'Underpass', gate: 'Shift + Reach',
    dog: 'Between Halfway Trail and Research Site on a high gravity platform.',
    toy: 'On the opposite gravity floor above the dog. Drop it toward the dog, then Reach back to retrieve it.'
  },
  {
    id: 'unknown', number: '07', zone: 'Unknown', gate: "Pope's Research", 
    dog: 'Northwest island rooftop garden.',
    toy: 'High on the skyscraper the dog faces; use the adjacent gravity-shifted building to cross near the top.'
  },
  {
    id: 'gap', number: '08', zone: 'The Gap', gate: 'All seven toys returned',
    dog: 'The final interaction appears in The Gap.',
    toy: 'No new toy. Interact with the dog to finish the Side Story and unlock the final reward.'
  }
];

export const activityCards = [
  {
    eyebrow: 'Side Story',
    title: 'Freeze Frame Cameras',
    description: 'Track all 14 cameras, identify the required access power, and finish the final Downtown containment sequence.',
    href: '/puzzles/freeze-frame/'
  },
  {
    eyebrow: 'Main mission',
    title: 'Power Lines',
    description: 'Solve Perimeter, Factory, East Park, and both Vanished Station calibration puzzles in one route.',
    href: '/guides/power-lines/'
  },
  {
    eyebrow: 'Side Story',
    title: 'Every Dog Has Her Day',
    description: 'Return seven dragon toys across Manhattan, then complete the eighth and final interaction in The Gap.',
    href: '/guides/mysterious-dog-locations/'
  }
];

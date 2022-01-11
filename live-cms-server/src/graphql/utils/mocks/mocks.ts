export const mocks = {
  League: () =>
    ({
      ID: 1,
      thumbnail: "https://via.placeholder.com/1920x1080",
      name: "MMA/Combate",
      franchise: "Combate",
      title: "Mixed Martial Arts",
      short_name: "other",
      description: "This is a league description."
    })
  ,
  Int: () => 1,
  Float: () => 2.1,
  String: () => 'Text 1',
}

export const leagueMetadata = [
  {
    "ID": 1,
    "thumbnail": "https://via.placeholder.com/1920x1080",
    "name": "MMA/Combate",
    "franchise": "Combate",
    "title": "Mixed Martial Arts",
    "short_name": "other",
    "description": "This is a league description."
  },
  {
    "ID": 2,
    "thumbnail": "https://via.placeholder.com/1920x1080",
    "name": "Soccer/AFC Asian Qualifiers",
    "franchise": "AFCCL",
    "title": "Soccer/AFC Asian Qualifiers",
    "short_name": "other",
    "description": "This is a league description."
  },
  {
    "ID": 3,
    "thumbnail": "https://via.placeholder.com/1920x1080",
    "name": "Soccer/AFC Asian Qualifiers",
    "franchise": "AFCWCQ",
    "title": "Soccer/AFC Asian Qualifiers",
    "short_name": "other",
    "description": "This is a league description."
  },
  {
    "ID": 4,
    "thumbnail": "https://via.placeholder.com/1920x1080",
    "name": "Soccer/AFC Champions league",
    "franchise": "AFCCL",
    "title": "Soccer/AFC Champions league",
    "short_name": "other",
    "description": "This is a league description."
  },
]

export const leagueInfrastructure = [
  {
    "metadata_id": 1,
    "encryption": "AES",
    "caption": "enabled",
  },
  {
    "metadata_id": 2,
    "encryption": "Clear",
    "caption": "disabled",
  },
  {
    "metadata_id": 3,
    "encryption": "AES",
    "caption": "enabled",
  },
  {
    "metadata_id": 4,
    "encryption": "Clear",
    "caption": "enabled",
  }
]
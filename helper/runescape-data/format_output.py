import json
# if they ever add a new slot, this breaks
# this is hacky code, which is why it is python
equipment = {
    "2h": [],
    "ammo": [],
    "body": [],
    "cape": [],
    "feet": [],
    "hands": [],
    "head": [],
    "legs": [],
    "neck": [],
    "ring": [],
    "shield": [],
    "weapon": []
}

with open("helper/runescape-data/equipment.json", "r") as file:
    for key, value in dict.items(json.load(file)):
        equipment_slot = value["printouts"]["All Equipment slot"]
        if equipment_slot in equipment:
            equipment[equipment_slot].append({key: value})
    print(json.dumps(equipment))

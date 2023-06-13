import requests
import time
import json
import collections


def remove_single_entry_lists(input: dict):
    for (key, value) in dict.items(input):
        if isinstance(value, dict):
            remove_single_entry_lists(value)
        elif type(value) is list and len(value) == 1:
            input.update({key: value[0]})

def replace_empty_arr_with_null(input: dict):
     for (key, value) in dict.items(input):
        if isinstance(value, dict):
            replace_empty_arr_with_null(value)
        elif type(value) is list and len(value) == 0:
            input.update({key: None})

def format_api_response(input: dict):
    remove_single_entry_lists(input)
    replace_empty_arr_with_null(input)

# MAX_OFFSET = 3520
MAX_OFFSET = 100
API_URL = "https://oldschool.runescape.wiki/api.php"
header = {"User-Agent": "runescape-equipment-data-puller/0.0.1"}
offset = 0
main_dict = dict()
with open("./helper/runescape-data/item_list.json", "w") as file:
    while offset <= MAX_OFFSET:
        time.sleep(1)
        print(f"current offset: {offset}")
        parameters = {
            "action": "askargs",
            "conditions": "Category:Equipable items",
            "printouts": "All Combat style |All Crush attack bonus |All Crush defence bonus |All Equipment slot |All Magic Damage bonus |All Magic attack bonus |All Magic defence bonus |All Prayer bonus |All Range attack bonus |All Range defence bonus |All Slash attack bonus |All Slash defence bonus |All Stab attack bonus |All Stab defence bonus |All Strength bonus |All Weapon attack range |All Weapon attack speed |All Item ID |Image",
            "parameters": f"offset={offset}",
            "format": "json",
            "api_version": 3
        }
        response = requests.get(API_URL, params=parameters, headers=header)
        print(response.url)
        if response.ok:
            json_response: dict = response.json()
            for entry in json_response["query"]["results"]:
                main_dict.update(entry)
            if "query-continue-offset" in json_response:
                offset = json_response["query-continue-offset"]
            else: 
                break
    remove_single_entry_lists(main_dict)
    file.write(json.dumps(main_dict))

"""Compose json file with all content"""
import os
import json
import pprint


JSON_FNAME = 'data.json'
BASE_CONTENT = [
    "templates",
    "headers",
    "exercises"
]

content = {}

for rootdir in BASE_CONTENT:
    content[rootdir] = []
    for subdir, dirs, files in os.walk(rootdir):
        for filename in files:
            if filename.split('.')[-1] == 'json':
                full_filename = os.path.join(subdir, filename)
                print(full_filename)
                with open(full_filename, 'r') as fptr:
                    data = json.load(fptr)
                    for i in data:
                        try:
                            if i['content'][:7] == "file://":
                               i['content'] = open(os.path.join(
                                   subdir, i['content'][7:]), 'r').read()
                        except KeyError:
                            pass
                        except UnicodeDecodeError:
                            print(i['content'])
                        print(i)
                        content[rootdir].append(i)

with open(JSON_FNAME, 'w+') as fptr:
    json.dump(content, fptr)

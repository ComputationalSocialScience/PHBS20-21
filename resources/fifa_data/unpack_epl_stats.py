import json
import pandas as pd

# 1. load data
with open("epl_data_raw.json", "r") as f:
    data = json.load(f)

# 2. Construct mapping
column_map = {
    2: "name",
    3: "nationality",
    8: "clubName",
    64: "ErrChance",
    61: "ErrGoal",
    59: "PossLostP90",
    40: "OffsideP90",
}
# TODO: fill in the rest of the mapping

# 3. create dataframe
rows = []
for row_raw in data[0]:
    row = {}
    for ix, name in column_map.items():
        # some of the rows are dicts with string keys instead of arrays
        if isinstance(row_raw, dict):
            row[name] = row_raw[str(ix)]
        else:
            row[name] = row_raw[ix]

    rows.append(row)

df = pd.DataFrame(rows)


# 4. save dataframe as csv
df.to_csv("epl_stats.csv")

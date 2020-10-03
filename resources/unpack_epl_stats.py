import json
import pandas as pd

# 1. load data
with open("epl_data_raw.json", "r") as f:
    data = json.load(f)

data[0][100]
# Some dict data lack 101, 102 and 103
# I fixed this bug in following step

data1 = pd.DataFrame(data)
data1

# +
column_map = {

    0:'Age',
    1:'Ranking',
    2:'Name',
    3:'Nationality',
    4:'Image',
    5:'ClubShortName',
    6:'ClubImage',
    7:'',
    8:'ClubName',
    9:'',
    10:'ClubNation',
    11:'ClubNation(S)',
    12:'',
    13:'Position2',
    14:'',
    15:'',
    16:'FamilyName2',
    17:'MinutesPlayed',
    18:'YellowCard',
    19:'RedCard',
    20:'Goals',
    21:'Assists',
    22:'Clean',
    23:'',
    24:'',
    25:'TournamentPlayed',
    26:'GameStarted',
    27:'SubstituteAppearance',
    28:'',
    29:'MinutesPlayed2',
    30:'',
    31:'Pen',
    32:'',
    33:'',
    34:'PenSaves',
    35:'TouchesP90',
    36:'',
    37:'',
    38:'',
    39:'',
    40:'OffsideP90',
    41:'RecovP90',
    42:'',
    43:'LastManTackles',
    44:'',
    45:'CrossesP90',
    46:'SavesP90',
    47:'',
    48:'GoalConP90',
    49:'FouledP90',
    50:'FoulsP90',
    51:'InterceptP90',
    52:'ClearP90',
    53:'ShotsP90',
    54:'TargetsP90',
    55:'LongBallsP90',
    56:'',
    57:'',
    58:'FinalThirdP90',
    59:'PossLostP90',
    60:'BlockedP90',
    61:'ErrGoal',
    62:'',
    63:'',
    64:'ErrChance',
    65:'',
    66:'PassP90',
    67:'',
    68:'PassComp%',
    69:'DribblesP90',
    70:'MOM',
    71:'AvgRating',
    72:'',
    73:'',
    74:'',
    75:'Decisive',
    76:'First',
    77:'',
    78:'',
    79:'Nationality(S)',
    80:'',
    81:'ProfileWeb',
    82:'ClubProfileWeb',
    83:'NationProfile',
    84:'Conceded',
    85:'FamilyName',
    86:'Position',
    87:'posNr',
    88:'Position(S)',
    89:'GoalP90',
    90:'NonPenGoalP90',
    91:'ShotAcc%',
    92:'ConvRate%',
    93:'AssP90',
    94:'G+A',
    95:'ContP90',
    96:'NonPenContP90',
    97:'ContSpread',
    98:'',
    99:'',
    100:'BChances',
    101:'TacklesWon%', 
    102:'AerialsWon%',
    103:'DuelsWon%',
    104:'H',
    105:'A',
}

# DONE
# -

# 3. create dataframe
rows = []
for row_raw in data[0]:
    row = {}
    for ix, name in column_map.items():
        # some of the rows are dicts with string keys instead of arrays
        if isinstance(row_raw, dict):
            if ix not in range(101,104):
                row[name] = row_raw[str(ix)]
            else:
                if '101' in row_raw.keys():
                    row['TacklesWon%'] = row_raw['101']
                else:
                    row['TacklesWon%'] = 'NaN'
                if '102' in row_raw.keys():
                    row['AerialsWon%'] = row_raw['102']
                else:
                    row['AerialsWon%'] = 'NaN'         
        else:
            row[name] = row_raw[ix]

    rows.append(row)
    

df = pd.DataFrame(rows)


df.head()

# 4. save dataframe as csv
df.to_csv("epl_stats.csv")

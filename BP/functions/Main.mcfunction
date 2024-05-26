titleraw @a title {"rawtext":[{"text":"§z§dWelcome To Enclave"},{"text":"\nName: "},{"selector":"*"},{"text":"\n§6Silver: $"},{"score":{"name":"*","objective":"Money"}}]}
execute as @a[tag=leg] at @s run titleraw @s subtitle {"rawtext":[{"text":"§z§1Legion\n§aOnline Members: \n§p"}, {"selector":"@a[tag=leg]"}]}
execute as @a[tag=kam] at @s run titleraw @s subtitle {"rawtext":[{"text":"§z§6Kamereons\n§aOnline Members: \n§p"}, {"selector":"@a[tag=kam]"}]}
execute as @a[tag=mer] at @s run titleraw @s subtitle {"rawtext":[{"text":"§z§2Mercenaries\n§aOnline Members: \n§p"}, {"selector":"@a[tag=mer]"}]}
execute as @a[tag=war] at @s run titleraw @s subtitle {"rawtext":[{"text":"§z§4Warriors\n§aOnline Members: \n§p"}, {"selector":"@a[tag=war]"}]}
tp @a[x=84,y=64,z=104,rm=5000] 84 64 104

gamemode a @a[x=84,y=64,z=104,r=50,m=!a,tag=!admin]
title @a[x=84,y=64,z=104,r=50] subtitle §z§6You are currently in spawn!
tp @e[family=monster,x=84,y=64,z=104,r=50] 0 0 0
effect @a[x=84,y=64,z=104,r=50] weakness 1 255 true
gamemode s @a[x=84,y=64,z=104,rm=51,m=!s,tag=!admin]
title @a[x=84,y=64,z=104,rm=51] subtitle §z§aYou are no longer in spawn!


execute at @a run fill ~-8 ~-4 ~-8 ~8 ~12 ~8 diamond_block replace mob_spawner
clear @a empty_map
clear @a filled_map
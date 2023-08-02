-- Original Pastebin = https://pastebin.com/TqxFN0hg
ServerName = "Perkedel"
JoinName = "ChatRepeater"

x, y, z = gps.locate()
finalJoinName = JoinName..'_'..x..'_'..y..'_'..z

print("Welcome to Chat Client\n\n")
print("\nServer Name = "..ServerName)
print("\nJoin Name = "..finalJoinName)
print("\n\n Joinning Chat... \n\n")

print("Initiating Repeater...")
shell.openTab("repeat")

sleep(5)
shell.openTab("chat", "join "..ServerName.." "..finalJoinName)

print("Enjoy Chat on next tab!\n")
print("\nBy JOELwindows7\nPerkedel Technologies\nGNU GPL v3")
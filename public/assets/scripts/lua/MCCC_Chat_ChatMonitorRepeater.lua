-- Original Pastebin = https://pastebin.com/gp88RtLT
-- other Pastebin = https://pastebin.com/tt0u3uES
ServerName = "Perkedel"
JoinName = "MonitorMe"
--monitorName = "monitor_0"

x, y, z = gps.locate()
finalJoinName = JoinName..'_'..x..'_'..y..'_'..z

print("This is Chat MultiMonitor Manager")

print("Initiating Repeater...")
shell.openTab("repeat")

Alat = peripheral.getNames()
Monitors = {}
for i=1,#Alat do
    --if string.match(Alat[i],"monitor") then
    --    Monitors[#Monitors+1] = Alat[i]
    --end
    if string.match(peripheral.getType(Alat[i]),'monitor') then
        Monitors[#Monitors+1] = Alat[i]
    end
end

print("Joinning "..ServerName.." as "..finalJoinName.." at many monitors")
print('and this own ones 1st')
sleep(5)
shell.openTab("chat", "join "..ServerName.." "..finalJoinName..'_(self)')
sleep(5)
for i=1,#Monitors do
    local eachJoinName = finalJoinName..'_('..Monitors[i]..')'
    print(eachJoinName .. " is Joining...")
    shell.openTab("monitor", Monitors[i].." chat join "..ServerName.." " ..eachJoinName)
    sleep(5) -- delay to prevent timeout
end

print("Enjoy Chat Broadcast! thancc. cool and good")

-- print("Joinning "..ServerName.." as "..JoinName.." at "..monitorName.."...")
-- sleep(5)
-- shell.openTab("monitor", monitorName.." chat join "..ServerName.." "..JoinName)
-- print("Enjoy Chat Broadcast! thancc. cool and good")

print("\nBy JOELwindows7\nPerkedel Technologies\nGNU GPL v3")
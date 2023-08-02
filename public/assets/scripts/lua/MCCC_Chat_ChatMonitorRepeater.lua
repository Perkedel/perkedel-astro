-- Original Pastebin = https://pastebin.com/gp88RtLT
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
sleep(5)
for i=1,#Monitors do
    shell.openTab("monitor", Monitors[i].." chat join "..ServerName.." "..finalJoinName..'_('..Monitors[i]..')')
end
print('and this own ones')
shell.openTab("chat", "join "..ServerName.." "..finalJoinName..'_(self)')
print("Enjoy Chat Broadcast! thancc. cool and good")

print("\nBy JOELwindows7\nPerkedel Technologies\nGNU GPL v3")
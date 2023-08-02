-- Original Pastebin = https://pastebin.com/1qebKCRp
-- Original Pastebin = https://pastebin.com/i83dL9tu
-- by JOELwindows7; Perkedel Technologies; GNU GPL v3
print("Welcome to chat Server!")
ServerName = "Perkedel"
MonitorJoinName = "MonitorSayaSendiri"
SelfJoinName = "DiriSayaSendiri"
MonitorName = "right"
MonitorHost = "left"
useSelfToHostInstead = true

print("Initiating Repeater...")
shell.openTab("repeat")

if useSelfToHostInstead then
    print("Hostname = "..ServerName.."\n")
    shell.openTab("chat", "host "..ServerName)
else
    print("Hostname = "..ServerName.." at monitor "..MonitorHost.."\n")
    shell.openTab("monitor", MonitorHost.." chat host "..ServerName)
end

print("\nNow also joining myself as = "..MonitorJoinName.." at monitor "..MonitorName.."\n")
sleep(5)
shell.openTab("monitor", MonitorName.." chat join "..ServerName.." "..MonitorJoinName)

print("\nAdditionally, joinning chat internally as "..SelfJoinName.."\n")
shell.openTab("chat","join "..ServerName.." "..SelfJoinName)

print("\nEnjoy your chat day, on the these monitors and next tab. thancc\n")
print("\nBy JOELwindows7\nPerkedel Technologies\nGNU GPL v3")
-- Yeah.
-- Deployment:
-- Left is small wide monitor. Users connected / Host. If useSelfToHostInstead, no need this monitor.
-- top is Ender Modem
-- Right is big monitor. Chat monitor / self Client
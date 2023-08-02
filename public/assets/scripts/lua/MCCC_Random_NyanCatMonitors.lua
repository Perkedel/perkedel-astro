-- Original Pastebin = https://pastebin.com/53ME6zmi
-- Nyancat Pastebin = https://pastebin.com/Xe9gGj35
pastebinID = "Xe9gGj35"
fileName = "MAC1_NyanCat.lua"
monitorNambers = {}

print("Initiating Repeater...")
shell.openTab("repeat")

Alat = peripheral.getNames()
for i=1,#Alat do
    --if string.match(Alat[i],"monitor") then
    --    monitorNambers[#MmonitorNambers+1] = Alat[i]
    --end
    if string.match(peripheral.getType(Alat[i]),'monitor') then
        monitorNambers[#monitorNambers+1] = Alat[i]
    end
end

print("MAC1 Nyan Cat run all, JOELwindows7 initiative\n")
print("Connects through modem! Not sides")
print("youtu.be/QdgZZwM0Beg\n")
print("pastebin.com/"..pastebinID.."\n")
print("Downloading Nyan Cat...")
if not fs.exists(filename) then
    shell.run("pastebin","get "..pastebinID.." "..fileName)
else
    print('Nyan Cat is already downloaded')
end
print("\n\nRun on self new tab then monitors")
shell.openTab(filename)
print("now get this to other monitors")
for i=1,#monitorNambers do
    --shell.openTab("monitor", monitorNambers[i].." pastebin run "..pastebinID.."")
	shell.openTab("monitor", monitorNambers[i].." "..fileName)
end

--youtu.be/QdgZZwM0Beg
--pastebin.com/Xe9gGj35
-- Download this file as `startup.lua` in root directory of your computer
-- `wget https://perkedel.netlify.app/MCCC_DL-startup_ChatMonitorRepeater.lua startup.lua`

downloadThisFile = 'https://perkedel.netlify.app/assets/scripts/lua/MCCC_Chat_ChatMonitorRepeater.lua'
appName = 'Ultimate Chat Client Monitors'

composeTitle = 'This is '..appName..' Autorun'
bars = ''
for i=1,#composeTitle do
    bars = bars..'='
end

sayText = ''
sayText = sayText.. bars .. '\n'
sayText = sayText.. composeTitle .. '\n'
sayText = sayText.. bars .. '\n'
print(sayText)
shell.run('wget', 'run', downloadThisFile)
print('\n\nENJOY!\n\n')
print('by JOELwindows7\nPerkedel Technologies\nGNU GPL v3')
-- Deployment:
-- Modem on any position
-- Monitor connected through wired modem as many as you want & sides
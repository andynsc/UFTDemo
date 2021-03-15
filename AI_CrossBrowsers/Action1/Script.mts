' Startup Prequisites
' Record and Run settings set to open browser
' Connected to Mobile Center





' Identify and determine if it's defined as Desktop or Mobile application
if datatable.value("device_ostype", dtGlobalSheet) <> "Browser" then
' Mobile version has extra steps to get to profile button - activate only if it's not a desktop application
	AIUtil.SetContext Device("micclass:=Device")
	AIUtil("home").Click
	wait 3
	AIUtil("hamburger_menu").Click
else
	AIUtil.SetContext Browser("creationtime:=0")
End If



AIUtil("profile").Click
AIUtil("input", "Usemame").Type "Batman"
AIUtil("input", "Password").Type "Password1"
AIUtil("button", "SIGN IN").Click





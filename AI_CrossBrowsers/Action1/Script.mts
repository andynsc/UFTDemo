'MsgBox "hello"

'AIUtil.SetContext Browser("creationtime:=0")
'AIUtil("profile").Click


'AIUtil.SetContext Browser("creationtime:=0")

'myContext = AIUtil.IsMobileContext()
'MsgBox myContext

' lump these together for mobile.
if datatable.value("device_ostype", dtGlobalSheet) <> "Browser" then
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





---
author: 'mudssky'
category: 'powershell'
lastUpdated: 1584086092
tags: ['powershell']
createdAt: 1584086092
title: 'powershell学习笔记'
---

# PowerShell学习笔记

## 1.PowerShell交互式

### 01.数学运算

我们可以把powershell当成一个计算器。象键入命令行那样输入数学表达式，回车，powershell会自动计算并把结果输出。常用的加减乘除模（+,-,*,/,%）运算和小括号表达式都支持。

```powershell
PS C:\pstest> 1+2+3
6
PS C:\pstest> 0xABCD
43981
PS C:\pstest> 3.14*10*10
314
PS C:\pstest> 1+3-(2.4-5)*(7.899-4.444)
12.983
```

PowerShell也能自动识别计算机容量单位,包括KB，MB，GB，TB，PB

```powershell
PS C:\pstest> 1pb/1tb
1024
PS C:\pstest> 1tb/1gb
1024
PS C:\pstest> 1gb/1kb
1048576
PS C:\pstest> 1gb/20mb*10kb
524288
```

假如一个网站每个页面大小为80kb，统计显示每天的PV操作为800，1个月下来占用的带宽：

```powershell
PS C:\pstest> 80kb*800*30/1gb
1.8310546875
```

假如一个网站的每天人均PV操作为5，页面大小为80Kb，主机提供商限制的总流量为10G，那平均每天的最大访客数

为：

```powershell
PS C:pstest> 10GB/(80KB*5)/30
873.813333333333
```

### 02.PowerShell 执行外部命令

Powershell 能够像CMD一样很好的执行外部命令。

#### 通过netstat查看网络端口状态

```powershell
PS C:\PS> netstat

Active Connections

  Proto  Local Address          Foreign Address        State
  TCP    192.168.0.100:3049    192.168.0.88:7575       ESTABLISHED
  TCP    192.168.0.100:3052    192.168.0.88:7575       ESTABLISHED
  TCP    192.168.0.100:3061    192.168.0.88:7575       ESTABLISHED
```

#### 通过IPConfig查看自己的网络配置

```powershell
PS C:\PS> ipconfig

Windows IP Configuration

Ethernet adapter Local Area Connection:

   Connection-specific DNS Suffix  . : www.mossfly.com
   Link-local IPv6 Address . . . . . : fe80::b9dd:91e33:33f0:7885%10
   IPv4 Address. . . . . . . . . . . : 192.168.140.100
   Subnet Mask . . . . . . . . . . . : 255.255.252.0
   Default Gateway . . . . . . . . . : 192.168.140.1

Tunnel adapter isatap.www.mossfly.com:

   Connection-specific DNS Suffix  . : www.mossfly.com
   Link-local IPv6 Address . . . . . : fe80::5efe:192.168.140.100%11
   Default Gateway . . . . . . . . . :

Tunnel adapter Teredo Tunneling Pseudo-Interface:

   Media State . . . . . . . . . . . : Media disconnected
   Connection-specific DNS Suffix  . :
```

#### route print查看路由信息

```powershell
PS C:\PS> route print
IPv4 Route Table
===========================================================================
Active Routes:
Network Destination        Netmask          Gateway       Interface  Metric
          0.0.0.0          0.0.0.0     192.168.140.1   192.168.140.100     20
        192.0.0.0        255.0.0.0         On-link         192.0.0.1    306
        192.0.0.1  255.255.255.255         On-link         192.0.0.1    306
  192.255.255.255  255.255.255.255         On-link         192.0.0.1    306
     192.168.140.0    255.255.252.0         On-link    192.168.140.100    276
   192.168.140.100  255.255.255.255         On-link    192.168.140.100    276
   192.168.143.255  255.255.255.255         On-link    192.168.140.100    276
        224.0.0.0        240.0.0.0         On-link         192.0.0.1    306
        224.0.0.0        240.0.0.0         On-link    192.168.140.100    276
  255.255.255.255  255.255.255.255         On-link         192.0.0.1    306
  255.255.255.255  255.255.255.255         On-link    192.168.140.100    276
===========================================================================
Persistent Routes:
  None

IPv6 Route Table
===========================================================================
Active Routes:
 If Metric Network Destination      Gateway
  1    306 ::1/128                  On-link
 10    276 fe80::/64                On-link
 11    281 fe80::5efe:192.168.140.100/128
                                    On-link
 10    276 fe80::b965:91f3:33a0:7285/128
                                    On-link
  1    306 ff00::/8                 On-link
 10    276 ff00::/8                 On-link
===========================================================================
Persistent Routes:
  None
```

#### 启动CMD控制台

启动CMD控制台键入cmd或者cmd.exe,退出cmd可以通过命令exit。

```powershell
PS C:\PS> cmd
Microsoft Windows [Version 6.1.7601]
Copyright (c) 2009 Microsoft Corporation.  All rights reserved.

C:\PS>exit
PS C:\PS>
```

#### 查找可用的Cmd控制台命令

Cmd.exe 通过 /c 来接收命令参数，在Cmd中help可以查看可用的命令，所以可以通过Cmd /c help 查找可用的Cmd控制台命令

```powershell
PS C:\PS> cmd /c help
有关某个命令的详细信息，请键入 HELP 命令名
ASSOC          显示或修改文件扩展名关联。
ATTRIB         显示或更改文件属性。
BREAK          设置或清除扩展式 CTRL+C 检查。
BCDEDIT        设置启动数据库中的属性以控制启动加载。
CACLS          显示或修改文件的访问控制列表(ACL)。
CALL           从另一个批处理程序调用这一个。
CD             显示当前目录的名称或将其更改。
CHCP           显示或设置活动代码页数。
CHDIR          显示当前目录的名称或将其更改。
CHKDSK         检查磁盘并显示状态报告。
CHKNTFS        显示或修改启动时间磁盘检查。
CLS            清除屏幕。
CMD            打开另一个 Windows 命令解释程序窗口。
COLOR          设置默认控制台前景和背景颜色。
COMP           比较两个或两套文件的内容。
COMPACT        显示或更改 NTFS 分区上文件的压缩。
CONVERT        将 FAT 卷转换成 NTFS。您不能转换
               当前驱动器。
COPY           将至少一个文件复制到另一个位置。
DATE           显示或设置日期。
DEL            删除至少一个文件。
DIR            显示一个目录中的文件和子目录。
DISKCOMP       比较两个软盘的内容。
DISKCOPY       将一个软盘的内容复制到另一个软盘。
DISKPART       显示或配置磁盘分区属性。
DOSKEY         编辑命令行、调用 Windows 命令并创建宏。
DRIVERQUERY    显示当前设备驱动程序状态和属性。
ECHO           显示消息，或将命令回显打开或关上。
ENDLOCAL       结束批文件中环境更改的本地化。
ERASE          删除一个或多个文件。
EXIT           退出 CMD.EXE 程序(命令解释程序)。
FC             比较两个文件或两个文件集并显示它们之间的不同。
FIND           在一个或多个文件中搜索一个文本字符串。
FINDSTR        在多个文件中搜索字符串。
FOR            为一套文件中的每个文件运行一个指定的命令。
FORMAT         格式化磁盘，以便跟 Windows 使用。
FSUTIL         显示或配置文件系统的属性。
FTYPE          显示或修改用在文件扩展名关联的文件类型。
GOTO           将 Windows 命令解释程序指向批处理程序
               中某个带标签的行。
GPRESULT       显示机器或用户的组策略信息。
GRAFTABL       启用 Windows 在图形模式显示扩展字符集。
HELP           提供 Windows 命令的帮助信息。
ICACLS         显示、修改、备份或还原文件和
 目录的 ACL。
IF             在批处理程序中执行有条件的处理过程。
LABEL          创建、更改或删除磁盘的卷标。
MD             创建一个目录。
MKDIR          创建一个目录。
MKLINK         创建符号链接和硬链接
MODE           配置系统设备。
MORE           逐屏显示输出。
MOVE           将一个或多个文件从一个目录移动到另一个目录。
OPENFILES      显示远程用户为了文件共享而打开的文件。
PATH           为可执行文件显示或设置搜索路径。
PAUSE          停止批处理文件的处理并显示信息。
POPD           还原由 PUSHD 保存的当前目录上一次的值。
PRINT          打印一个文本文件。
PROMPT         改变 Windows 命令提示。
PUSHD          保存当前目录，然后对其进行更改。
RD             删除目录。
RECOVER        从损坏的磁盘中恢复可读取的信息。
REM            记录批处理文件或 CONFIG.SYS 中的注释。
REN            重新命名文件。
RENAME         重新命名文件。
REPLACE        替换文件。
RMDIR          删除目录。
ROBOCOPY       复制文件和目录树的高级实用程序
SET            显示、设置或删除 Windows 环境变量。
SETLOCAL       开始用批文件改变环境的本地化。
SC             显示或配置服务(后台处理)。
SCHTASKS       安排命令和程序在一部计算机上按计划运行。
SHIFT          调整批处理文件中可替换参数的位置。
SHUTDOWN       让机器在本地或远程正确关闭。
SORT           将输入排序。
START          打开单独视窗运行指定程序或命令。
SUBST          将驱动器号与路径关联。
SYSTEMINFO     显示机器的具体的属性和配置。
TASKLIST       显示包括服务的所有当前运行的任务。
TASKKILL       终止正在运行的进程或应用程序。
TIME           显示或设置系统时间。
TITLE          设置 CMD.EXE 会话的窗口标题。
TREE           以图形显示启动器或路径的目录结构。
TYPE           显示文本文件的内容。
VER            显示 Windows 的版本。
VERIFY         告诉 Windows 验证文件是否正确写入磁盘。
VOL            显示磁盘卷标和序列号。
XCOPY          复制文件和目录树。
WMIC           在交互命令外壳里显示 WMI 信息。
```

#### 启动外部程序

为什么可以通过notpad打开记事本，不能通过wordpad打开写字板？
因为notepad.exe位于C:Windows\system32 这个目录，而这个目录已经默认被包含在Powershell的环境变量$env:Path中。

```powershell
C:\WINDOWS\system32;C:\WINDOWS;C:\WINDOWS\System32\Wbem;C:\WINDOWS\System32\WindowsPowerShell\v1.0\;C:\Program Files (x
86)\Windows Kits\8.1\Windows Performance Toolkit\;C:\Program Files\Microsoft SQL Server\110\Tools\Binn\;C:\Program File
s (x86)\Microsoft SDKs\TypeScript\1.0\;C:\Program Files\Microsoft\Web Platform Installer\
```

而wordpad.exe 所在的**“%ProgramFiles%\Windows NT\Accessories\wordpad.exe**“目录却没有包含，可以先进入这个目录，再运行wordpad，或者将wordpad所在的目录加入到环境变量中，$env:Path=$env:Path+”%ProgramFiles%\Windows NT\Accessories”。

默认键入一个字符串，powershell会将它原样输出，如果该字符串是一个命令或者启动程序，在字符串前加‘&’可以执行命令，或者启动程序。

```powershell
PS C:\PS> "ls"
ls
PS C:\PS> &"ls"

    Directory: C:\PS

Mode                LastWriteTime     Length Name
----                -------------     ------ ----
d----        2011/11/23     17:25            ABC
-a---        2011/11/23     17:36         14 a.txt
-a---        2011/11/23     17:25          0 b.txt
-a---        2011/11/23     17:25          0 c.txt
-a---        2011/11/23     17:25          0 d.txt
-a---        2011/11/23     17:37        242 test.txt

PS C:\PS> "cmd.exe"
cmd.exe
PS C:\PS> &"cmd.exe"
Microsoft Windows [Version 6.1.7601]
Copyright (c) 2009 Microsoft Corporation.  All rights reserved.
```







### 03.PowerShell命令集

cmdlets是Powershell的内部命令，cmdlet的类型名为System.Management.Automation.CmdletInfo，包含下列属性和方法：

| Name                | MemberType     | Definition                                                   |
| ------------------- | -------------- | ------------------------------------------------------------ |
| Equals              | Method         | bool Equals(System.Object obj)                               |
| GetHashCode         | Method         | int GetHashCode()                                            |
| GetType             | Method         | type GetType()                                               |
| ToString            | Method         | string ToString()                                            |
| CommandType         | Property       | System.Management.Automation.CommandTypes CommandType {get;} |
| DefaultParameterSet | Property       | System.String DefaultParameterSet {get;}                     |
| Definition          | Property       | System.String Definition {get;}                              |
| HelpFile            | Property       | System.String HelpFile {get;}                                |
| ImplementingType    | Property       | System.Type ImplementingType {get;}                          |
| Module              | Property       | System.Management.Automation.PSModuleInfo Module {get;}      |
| ModuleName          | Property       | System.String ModuleName {get;}                              |
| Name                | Property       | System.String Name {get;}                                    |
| Noun                | Property       | System.String Noun {get;}                                    |
| OutputType          | Property       | System.Collections.ObjectModel.ReadOnlyCollection`1[[System.Management.Automation.PSTypeName, System.Management.Automation, Version=1.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35]] OutputType {get;} |
| Parameters          | Property       | System.Collections.Generic.Dictionary`2[[System.String, mscorlib, Version=2.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089],[System.Management.Automation.ParameterMetadata, System.Management.Automation, Version=1.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35]] Parameters {get;} |
| ParameterSets       | Property       | System.Collections.ObjectModel.ReadOnlyCollection`1[[System.Management.Automation.CommandParameterSetInfo, System.Management.Automation, Version=1.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35]] ParameterSets {get;} |
| PSSnapIn            | Property       | System.Management.Automation.PSSnapInInfo PSSnapIn {get;}    |
| Verb                | Property       | System.String Verb {get;}                                    |
| Visibility          | Property       | System.Management.Automation.SessionStateEntryVisibility Visibility {get;set;} |
| DLL                 | ScriptProperty | System.Object DLL {get=$this.ImplementingType.Assembly.Location;} |
| HelpUri             | ScriptProperty | System.Object HelpUri {get=try { # ok to cast CommandTypes enum to HelpCategory because string/indentifier for # cmdlet,function,filter,alias,externalscript is identical. # it is ok to fail for other enum values (i.e. for Application) $helpObject = get-help -Name ($this.Name) -Category ([string]($this.CommandType)) -ErrorAction SilentlyContinue# return first non-null uri (and try not to hit any strict mode things) if ($helpObject -eq $null) { return $null } if ($helpObject.psobject.properties[‘relatedLinks’] -eq $null) { return $null } if ($helpObject.relatedLinks.psobject.properties[‘navigationLink’] -eq $null) { return $null } $helpUri = [string]$( $helpObject.relatedLinks.navigationLink | %{ if ($_.psobject.properties[‘uri’] -ne $null) { $_.uri } } | ?{ $_ } \| select -first 1 ) return $helpUri } catch {};} |

**下面是全部的Cmdlets命令**

每个命令有一个动词和名词组成，命令的作用一目了然。

| Name                              | ModuleName                       | Help                                                  |
| --------------------------------- | -------------------------------- | ----------------------------------------------------- |
| Add-Computer                      | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=135194) |
| Add-Content                       | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113278) |
| Add-History                       | Microsoft.PowerShell.Core        | [help](http://go.microsoft.com/fwlink/?LinkID=113279) |
| Add-Member                        | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113280) |
| Add-PSSnapin                      | Microsoft.PowerShell.Core        | [help](http://go.microsoft.com/fwlink/?LinkID=113281) |
| Add-Type                          | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=135195) |
| Checkpoint-Computer               | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=135197) |
| Clear-Content                     | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113282) |
| Clear-EventLog                    | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=135198) |
| Clear-History                     | Microsoft.PowerShell.Core        | [help](http://go.microsoft.com/fwlink/?LinkID=135199) |
| Clear-Item                        | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113283) |
| Clear-ItemProperty                | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113284) |
| Clear-Variable                    | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113285) |
| Compare-Object                    | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113286) |
| Complete-Transaction              | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=135200) |
| Connect-WSMan                     | Microsoft.WSMan.Management       | [help](http://go.microsoft.com/fwlink/?LinkId=141437) |
| ConvertFrom-Csv                   | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=135201) |
| ConvertFrom-SecureString          | Microsoft.PowerShell.Security    | [help](http://go.microsoft.com/fwlink/?LinkID=113287) |
| ConvertFrom-StringData            | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113288) |
| Convert-Path                      | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113289) |
| ConvertTo-Csv                     | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=135203) |
| ConvertTo-Html                    | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113290) |
| ConvertTo-SecureString            | Microsoft.PowerShell.Security    | [help](http://go.microsoft.com/fwlink/?LinkID=113291) |
| ConvertTo-Xml                     | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=135204) |
| Copy-Item                         | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113292) |
| Copy-ItemProperty                 | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113293) |
| Debug-Process                     | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=135206) |
| Disable-ComputerRestore           | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=135207) |
| Disable-PSBreakpoint              | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113294) |
| Disable-PSSessionConfiguration    | Microsoft.PowerShell.Core        | [help](http://go.microsoft.com/fwlink/?LinkID=144299) |
| Disable-WSManCredSSP              | Microsoft.WSMan.Management       | [help](http://go.microsoft.com/fwlink/?LinkId=141438) |
| Disconnect-WSMan                  | Microsoft.WSMan.Management       | [help](http://go.microsoft.com/fwlink/?LinkId=141439) |
| Enable-ComputerRestore            | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=135209) |
| Enable-PSBreakpoint               | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113295) |
| Enable-PSRemoting                 | Microsoft.PowerShell.Core        | [help](http://go.microsoft.com/fwlink/?LinkID=144300) |
| Enable-PSSessionConfiguration     | Microsoft.PowerShell.Core        | [help](http://go.microsoft.com/fwlink/?LinkID=144301) |
| Enable-WSManCredSSP               | Microsoft.WSMan.Management       | [help](http://go.microsoft.com/fwlink/?LinkId=141442) |
| Enter-PSSession                   | Microsoft.PowerShell.Core        | [help](http://go.microsoft.com/fwlink/?LinkID=135210) |
| Exit-PSSession                    | Microsoft.PowerShell.Core        | [help](http://go.microsoft.com/fwlink/?LinkID=135212) |
| Export-Alias                      | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113296) |
| Export-Clixml                     | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113297) |
| Export-Console                    | Microsoft.PowerShell.Core        | [help](http://go.microsoft.com/fwlink/?LinkID=113298) |
| Export-Counter                    | Microsoft.PowerShell.Diagnostics | [help](http://go.microsoft.com/fwlink/?LinkID=138337) |
| Export-Csv                        | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113299) |
| Export-FormatData                 | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=144302) |
| Export-ModuleMember               | Microsoft.PowerShell.Core        | [help](http://go.microsoft.com/fwlink/?LinkID=141551) |
| Export-PSSession                  | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=135213) |
| ForEach-Object                    | Microsoft.PowerShell.Core        | [help](http://go.microsoft.com/fwlink/?LinkID=113300) |
| Format-Custom                     | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113301) |
| Format-List                       | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113302) |
| Format-Table                      | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113303) |
| Format-Wide                       | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113304) |
| Get-Acl                           | Microsoft.PowerShell.Security    | [help](http://go.microsoft.com/fwlink/?LinkID=113305) |
| Get-Alias                         | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113306) |
| Get-AuthenticodeSignature         | Microsoft.PowerShell.Security    | [help](http://go.microsoft.com/fwlink/?LinkID=113307) |
| Get-ChildItem                     | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113308) |
| Get-Command                       | Microsoft.PowerShell.Core        | [help](http://go.microsoft.com/fwlink/?LinkID=113309) |
| Get-ComputerRestorePoint          | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=135215) |
| Get-Content                       | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113310) |
| Get-Counter                       | Microsoft.PowerShell.Diagnostics | [help](http://go.microsoft.com/fwlink/?LinkID=138335) |
| Get-Credential                    | Microsoft.PowerShell.Security    | [help](http://go.microsoft.com/fwlink/?LinkID=113311) |
| Get-Culture                       | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113312) |
| Get-Date                          | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113313) |
| Get-Event                         | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113453) |
| Get-EventLog                      | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113314) |
| Get-EventSubscriber               | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=135155) |
| Get-ExecutionPolicy               | Microsoft.PowerShell.Security    | [help](http://go.microsoft.com/fwlink/?LinkID=113315) |
| Get-FormatData                    | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=144303) |
| Get-Help                          | Microsoft.PowerShell.Core        | [help](http://go.microsoft.com/fwlink/?LinkID=113316) |
| Get-History                       | Microsoft.PowerShell.Core        | [help](http://go.microsoft.com/fwlink/?LinkID=113317) |
| Get-Host                          | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113318) |
| Get-HotFix                        | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=135217) |
| Get-Item                          | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113319) |
| Get-ItemProperty                  | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113320) |
| Get-Job                           | Microsoft.PowerShell.Core        | [help](http://go.microsoft.com/fwlink/?LinkID=113328) |
| Get-Location                      | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113321) |
| Get-Member                        | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113322) |
| Get-Module                        | Microsoft.PowerShell.Core        | [help](http://go.microsoft.com/fwlink/?LinkID=141552) |
| Get-PfxCertificate                | Microsoft.PowerShell.Security    | [help](http://go.microsoft.com/fwlink/?LinkID=113323) |
| Get-Process                       | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113324) |
| Get-PSBreakpoint                  | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113325) |
| Get-PSCallStack                   | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113326) |
| Get-PSDrive                       | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113327) |
| Get-PSProvider                    | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113329) |
| Get-PSSession                     | Microsoft.PowerShell.Core        | [help](http://go.microsoft.com/fwlink/?LinkID=135219) |
| Get-PSSessionConfiguration        | Microsoft.PowerShell.Core        | [help](http://go.microsoft.com/fwlink/?LinkID=144304) |
| Get-PSSnapin                      | Microsoft.PowerShell.Core        | [help](http://go.microsoft.com/fwlink/?LinkID=113330) |
| Get-Random                        | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113446) |
| Get-Service                       | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113332) |
| Get-TraceSource                   | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113333) |
| Get-Transaction                   | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=135220) |
| Get-UICulture                     | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113334) |
| Get-Unique                        | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113335) |
| Get-Variable                      | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113336) |
| Get-WinEvent                      | Microsoft.PowerShell.Diagnostics | [help](http://go.microsoft.com/fwlink/?LinkID=138336) |
| Get-WmiObject                     | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113337) |
| Get-WSManCredSSP                  | Microsoft.WSMan.Management       | [help](http://go.microsoft.com/fwlink/?LinkId=141443) |
| Get-WSManInstance                 | Microsoft.WSMan.Management       | [help](http://go.microsoft.com/fwlink/?LinkId=141444) |
| Group-Object                      | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113338) |
| Import-Alias                      | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113339) |
| Import-Clixml                     | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113340) |
| Import-Counter                    | Microsoft.PowerShell.Diagnostics | [help](http://go.microsoft.com/fwlink/?LinkID=138338) |
| Import-Csv                        | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113341) |
| Import-LocalizedData              | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113342) |
| Import-Module                     | Microsoft.PowerShell.Core        | [help](http://go.microsoft.com/fwlink/?LinkID=141553) |
| Import-PSSession                  | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=135221) |
| Invoke-Command                    | Microsoft.PowerShell.Core        | [help](http://go.microsoft.com/fwlink/?LinkID=135225) |
| Invoke-Expression                 | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113343) |
| Invoke-History                    | Microsoft.PowerShell.Core        | [help](http://go.microsoft.com/fwlink/?LinkID=113344) |
| Invoke-Item                       | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113345) |
| Invoke-WmiMethod                  | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113346) |
| Invoke-WSManAction                | Microsoft.WSMan.Management       | [help](http://go.microsoft.com/fwlink/?LinkId=141446) |
| Join-Path                         | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113347) |
| Limit-EventLog                    | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=135227) |
| Measure-Command                   | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113348) |
| Measure-Object                    | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113349) |
| Move-Item                         | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113350) |
| Move-ItemProperty                 | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113351) |
| New-Alias                         | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113352) |
| New-Event                         | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=135234) |
| New-EventLog                      | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=135235) |
| New-Item                          | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113353) |
| New-ItemProperty                  | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113354) |
| New-Module                        | Microsoft.PowerShell.Core        | [help](http://go.microsoft.com/fwlink/?LinkID=141554) |
| New-ModuleManifest                | Microsoft.PowerShell.Core        | [help](http://go.microsoft.com/fwlink/?LinkID=141555) |
| New-Object                        | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113355) |
| New-PSDrive                       | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113357) |
| New-PSSession                     | Microsoft.PowerShell.Core        | [help](http://go.microsoft.com/fwlink/?LinkID=135237) |
| New-PSSessionOption               | Microsoft.PowerShell.Core        | [help](http://go.microsoft.com/fwlink/?LinkID=144305) |
| New-Service                       | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113359) |
| New-TimeSpan                      | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113360) |
| New-Variable                      | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113361) |
| New-WebServiceProxy               | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=135238) |
| New-WSManInstance                 | Microsoft.WSMan.Management       | [help](http://go.microsoft.com/fwlink/?LinkId=141448) |
| New-WSManSessionOption            | Microsoft.WSMan.Management       | [help](http://go.microsoft.com/fwlink/?LinkId=141449) |
| Out-Default                       | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113362) |
| Out-File                          | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113363) |
| Out-GridView                      | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113364) |
| Out-Host                          | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113365) |
| Out-Null                          | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113366) |
| Out-Printer                       | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113367) |
| Out-String                        | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113368) |
| Pop-Location                      | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113369) |
| Push-Location                     | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113370) |
| Read-Host                         | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113371) |
| Receive-Job                       | Microsoft.PowerShell.Core        | [help](http://go.microsoft.com/fwlink/?LinkID=113372) |
| Register-EngineEvent              | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=135243) |
| Register-ObjectEvent              | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=135244) |
| Register-PSSessionConfiguration   | Microsoft.PowerShell.Core        | [help](http://go.microsoft.com/fwlink/?LinkID=144306) |
| Register-WmiEvent                 | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=135245) |
| Remove-Computer                   | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=135246) |
| Remove-Event                      | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=135247) |
| Remove-EventLog                   | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=135248) |
| Remove-Item                       | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113373) |
| Remove-ItemProperty               | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113374) |
| Remove-Job                        | Microsoft.PowerShell.Core        | [help](http://go.microsoft.com/fwlink/?LinkID=113377) |
| Remove-Module                     | Microsoft.PowerShell.Core        | [help](http://go.microsoft.com/fwlink/?LinkID=141556) |
| Remove-PSBreakpoint               | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113375) |
| Remove-PSDrive                    | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113376) |
| Remove-PSSession                  | Microsoft.PowerShell.Core        | [help](http://go.microsoft.com/fwlink/?LinkID=135250) |
| Remove-PSSnapin                   | Microsoft.PowerShell.Core        | [help](http://go.microsoft.com/fwlink/?LinkID=113378) |
| Remove-Variable                   | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113380) |
| Remove-WmiObject                  | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113381) |
| Remove-WSManInstance              | Microsoft.WSMan.Management       | [help](http://go.microsoft.com/fwlink/?LinkId=141453) |
| Rename-Item                       | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113382) |
| Rename-ItemProperty               | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113383) |
| Reset-ComputerMachinePassword     | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=135252) |
| Resolve-Path                      | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113384) |
| Restart-Computer                  | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=135253) |
| Restart-Service                   | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113385) |
| Restore-Computer                  | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=135254) |
| Resume-Service                    | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113386) |
| Select-Object                     | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113387) |
| Select-String                     | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113388) |
| Select-Xml                        | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=135255) |
| Send-MailMessage                  | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=135256) |
| Set-Acl                           | Microsoft.PowerShell.Security    | [help](http://go.microsoft.com/fwlink/?LinkID=113389) |
| Set-Alias                         | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113390) |
| Set-AuthenticodeSignature         | Microsoft.PowerShell.Security    | [help](http://go.microsoft.com/fwlink/?LinkID=113391) |
| Set-Content                       | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113392) |
| Set-Date                          | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113393) |
| Set-ExecutionPolicy               | Microsoft.PowerShell.Security    | [help](http://go.microsoft.com/fwlink/?LinkID=113394) |
| Set-Item                          | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113395) |
| Set-ItemProperty                  | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113396) |
| Set-Location                      | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113397) |
| Set-PSBreakpoint                  | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113449) |
| Set-PSDebug                       | Microsoft.PowerShell.Core        | [help](http://go.microsoft.com/fwlink/?LinkID=113398) |
| Set-PSSessionConfiguration        | Microsoft.PowerShell.Core        | [help](http://go.microsoft.com/fwlink/?LinkID=144307) |
| Set-Service                       | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113399) |
| Set-StrictMode                    | Microsoft.PowerShell.Core        | [help](http://go.microsoft.com/fwlink/?LinkID=113450) |
| Set-TraceSource                   | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113400) |
| Set-Variable                      | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113401) |
| Set-WmiInstance                   | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113402) |
| Set-WSManInstance                 | Microsoft.WSMan.Management       | [help](http://go.microsoft.com/fwlink/?LinkId=141458) |
| Set-WSManQuickConfig              | Microsoft.WSMan.Management       | [help](http://go.microsoft.com/fwlink/?LinkID=141463) |
| Show-EventLog                     | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=135257) |
| Sort-Object                       | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113403) |
| Split-Path                        | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113404) |
| Start-Job                         | Microsoft.PowerShell.Core        | [help](http://go.microsoft.com/fwlink/?LinkID=113405) |
| Start-Process                     | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=135261) |
| Start-Service                     | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113406) |
| Start-Sleep                       | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113407) |
| Start-Transaction                 | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=135262) |
| Start-Transcript                  | Microsoft.PowerShell.Host        | [help](http://go.microsoft.com/fwlink/?LinkID=113408) |
| Stop-Computer                     | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=135263) |
| Stop-Job                          | Microsoft.PowerShell.Core        | [help](http://go.microsoft.com/fwlink/?LinkID=113413) |
| Stop-Process                      | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113412) |
| Stop-Service                      | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113414) |
| Stop-Transcript                   | Microsoft.PowerShell.Host        | [help](http://go.microsoft.com/fwlink/?LinkID=113415) |
| Suspend-Service                   | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113416) |
| Tee-Object                        | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113417) |
| Test-ComputerSecureChannel        | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=137749) |
| Test-Connection                   | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=135266) |
| Test-ModuleManifest               | Microsoft.PowerShell.Core        | [help](http://go.microsoft.com/fwlink/?LinkID=141557) |
| Test-Path                         | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=113418) |
| Test-WSMan                        | Microsoft.WSMan.Management       | [help](http://go.microsoft.com/fwlink/?LinkId=141464) |
| Trace-Command                     | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113419) |
| Undo-Transaction                  | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=135268) |
| Unregister-Event                  | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=135269) |
| Unregister-PSSessionConfiguration | Microsoft.PowerShell.Core        | [help](http://go.microsoft.com/fwlink/?LinkID=144308) |
| Update-FormatData                 | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113420) |
| Update-List                       | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113447) |
| Update-TypeData                   | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113421) |
| Use-Transaction                   | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=135271) |
| Wait-Event                        | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=135276) |
| Wait-Job                          | Microsoft.PowerShell.Core        | [help](http://go.microsoft.com/fwlink/?LinkID=113422) |
| Wait-Process                      | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=135277) |
| Where-Object                      | Microsoft.PowerShell.Core        | [help](http://go.microsoft.com/fwlink/?LinkID=113423) |
| Write-Debug                       | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113424) |
| Write-Error                       | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113425) |
| Write-EventLog                    | Microsoft.PowerShell.Management  | [help](http://go.microsoft.com/fwlink/?LinkID=135281) |
| Write-Host                        | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113426) |
| Write-Output                      | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113427) |
| Write-Progress                    | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113428) |
| Write-Verbose                     | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113429) |
| Write-Warning                     | Microsoft.PowerShell.Utility     | [help](http://go.microsoft.com/fwlink/?LinkID=113430) |





### 04.PowerShell别名

cmdlet 的名称由一个动词和一个名词组成，其功能对用户来讲一目了然。但是对于一个经常使用powershell命令的人每天敲那么多命令也很麻烦啊。能不能把命令缩短一点呢？于是“别名”就应运而生了。Powershell内部也实现了很多常用命令的别名。例如Get-ChildItem，列出当前的子文件或目录。它有两个别名：ls 和 dir，这两个别名来源于unix 的shell和windows的cmd。
因此别名有两个作用：

- **继承**：继承unix-shell和windows-cmd。
- **方便**：方便用户使用。

#### 处理别名：

**查询别名所指的真实cmdlet命令。**

```
PS C:\PS> Get-Alias -name ls

CommandType     Name                                                Definition
-----------     ----                                                ----------
Alias           ls                                                  Get-ChildItem

PS C:\PS> Get-Alias -name dir

CommandType     Name                                                Definition
-----------     ----                                                ----------
Alias           dir                                                 Get-ChildItem

PS C:\PS> Get-Alias -name fl

CommandType     Name                                                Definition
-----------     ----                                                ----------
Alias           fl                                                  Format-List

PS C:\PS> Get-Alias -name ft

CommandType     Name                                                Definition
-----------     ----                                                ----------
Alias           ft                                                  Format-Table
```

#### **查看可用的别名**

查看可用的别名，可以通过” ls alias:” 或者 ”Get-Alias“
如何查看所有以Remove打头的cmdlet的命令的别名呢？

```
PS C:\PS> dir alias: | where {$_.Definition.Startswith("Remove")}

CommandType     Name                                                Definition
-----------     ----                                                ----------
Alias           del                                                 Remove-Item
Alias           erase                                               Remove-Item
Alias           rbp                                                 Remove-PSBreakpoint
Alias           rd                                                  Remove-Item
Alias           rdr                                                 Remove-PSDrive
Alias           ri                                                  Remove-Item
Alias           rjb                                                 Remove-Job
Alias           rm                                                  Remove-Item
Alias           rmdir                                               Remove-Item
Alias           rmo                                                 Remove-Module
Alias           rp                                                  Remove-ItemProperty
Alias           rsn                                                 Remove-PSSession
Alias           rsnp                                                Remove-PSSnapin
Alias           rv                                                  Remove-Variable
Alias           rwmi                                                Remove-WMIObject
```

**说明**：dir alias:获取的是别名的数组，通过where对数组元素进行遍历，$_代表当前元素，alias的Definition为String类型，因为powershell支持.net，.net中的string类有一个方法Startswith。通过where过滤集合在powershell中使用非常广泛。

有的cmdlet命令可能有2-3个别名，我们可以通过下面的命令查看所有别名和指向cmdlet的别名的个数。

```
PS C:\PS> ls alias: | Group-Object definition | sort -Descending Count

Count Name                      Group
----- ----                      -----
    6 Remove-Item               {del, erase, rd, ri...}
    3 Set-Location              {cd, chdir, sl}
    3 Get-History               {ghy, h, history}
    3 Get-ChildItem             {dir, gci, ls}
    3 Get-Content               {cat, gc, type}
    3 Move-Item                 {mi, move, mv}
    3 Copy-Item                 {copy, cp, cpi}
    2 Start-Process             {saps, start}
    2 Set-Variable              {set, sv}
    2 Write-Output              {echo, write}
    2 Get-Process               {gps, ps}
    2 Invoke-History            {ihy, r}
    2 New-PSDrive               {mount, ndr}
    2 Stop-Process              {kill, spps}
    2 Rename-Item               {ren, rni}
    2 Get-Location              {gl, pwd}
    2 Compare-Object            {compare, diff}
    2 Where-Object              {?, where}
    2 ForEach-Object            {%, foreach}
    2 Clear-Host                {clear, cls}
    1 Out-Host                  {oh}
    1 New-PSSession             {nsn}
    1 New-Variable              {nv}
    1 Out-GridView              {ogv}
    1 Pop-Location              {popd}
    1 Tee-Object                {tee}
    1 Remove-PSBreakpoint       {rbp}
    1 Receive-Job               {rcjb}
    1 Push-Location             {pushd}
    1 mkdir                     {md}
    1 Measure-Object            {measure}
    1 help                      {man}
    1 Remove-PSSnapin           {rsnp}
    1 Out-Printer               {lp}
    1 New-Item                  {ni}
    1 New-Module                {nmo}
    1 New-Alias                 {nal}
    1 Move-ItemProperty         {mp}
    1 Wait-Job                  {wjb}
    1 Remove-PSDrive            {rdr}
    1 Start-Service             {sasv}
    1 Set-PSBreakpoint          {sbp}
    1 Set-ItemProperty          {sp}
    1 Start-Job                 {sajb}
    1 Set-Alias                 {sal}
    1 Start-Sleep               {sleep}
    1 Set-Item                  {si}
    1 Select-Object             {select}
    1 Set-Content               {sc}
    1 Sort-Object               {sort}
    1 Remove-WMIObject          {rwmi}
    1 Remove-Module             {rmo}
    1 Rename-ItemProperty       {rnp}
    1 Stop-Service              {spsv}
    1 Set-WMIInstance           {swmi}
    1 Remove-Job                {rjb}
    1 Remove-Variable           {rv}
    1 Resolve-Path              {rvpa}
    1 Stop-Job                  {spjb}
    1 Remove-ItemProperty       {rp}
    1 Remove-PSSession          {rsn}
    1 Exit-PSSession            {exsn}
    1 Format-Custom             {fc}
    1 Enter-PSSession           {etsn}
    1 Export-Csv                {epcsv}
    1 Export-PSSession          {epsn}
    1 Format-List               {fl}
    1 Get-PSBreakpoint          {gbp}
    1 Get-Command               {gcm}
    1 Get-Alias                 {gal}
    1 Format-Table              {ft}
    1 Format-Wide               {fw}
    1 Export-Alias              {epal}
    1 Clear-History             {clhy}
    1 Clear-Item                {cli}
    1 Clear-Content             {clc}
    1 Add-Content               {ac}
    1 Add-PSSnapIn              {asnp}
    1 Clear-ItemProperty        {clp}
    1 Disable-PSBreakpoint      {dbp}
    1 Enable-PSBreakpoint       {ebp}
    1 Convert-Path              {cvpa}
    1 Clear-Variable            {clv}
    1 Copy-ItemProperty         {cpp}
    1 Invoke-Expression         {iex}
    1 Invoke-Item               {ii}
    1 Invoke-Command            {icm}
    1 Get-Variable              {gv}
    1 Get-WmiObject             {gwmi}
    1 Import-Alias              {ipal}
    1 powershell_ise.exe        {ise}
    1 Invoke-WMIMethod          {iwmi}
    1 Import-PSSession          {ipsn}
    1 Import-Csv                {ipcsv}
    1 Import-Module             {ipmo}
    1 Get-Unique                {gu}
    1 Get-Job                   {gjb}
    1 Get-Member                {gm}
    1 Get-Item                  {gi}
    1 Get-PSCallStack           {gcs}
    1 Get-PSDrive               {gdr}
    1 Get-Module                {gmo}
    1 Get-PSSnapIn              {gsnp}
    1 Get-Service               {gsv}
    1 Get-PSSession             {gsn}
    1 Get-ItemProperty          {gp}
    1 Group-Object              {group}
```

#### **创建自己的别名**

给记事本创建一个别名，并查看该别名；

```
PS C:\PS> Set-Alias -Name Edit -Value notepad
PS C:\PS> Edit
PS C:\PS> $alias:Edit
notepad
```

#### **删除自己的别名**

别名不用删除，自定义的别名在powershell退出时会自动清除。但是请放心，powershell内置别名（诸如ls,dir,fl等）不会清除。如果你非得手工删除别名。请使用

```
PS C:\PS> del alias:Edit
```

#### **保存自己的别名**

可以使用Export-Alias将别名导出到文件，需要时再通过Import-Alias导入。但是导入时可能会有异常，提示别名已经存在无法导入：

```
PS C:\PS> Import-Alias alias.ps1
Import-Alias : Alias not allowed because an alias with the name 'ac' already exists.
At line:1 char:13
+ Import-Alias <<<<  alias.ps1
    + CategoryInfo          : ResourceExists: (ac:String) [Import-Alias], SessionStateException
    + FullyQualifiedErrorId : AliasAlreadyExists,Microsoft.PowerShell.Commands.ImportAliasCommand
```

这时可以使用Force强制导入。

```
PS C:\PS> Export-Alias alias.ps1
PS C:\PS> Import-Alias -Force alias.ps1
```



### 05.PowerShell通过函数扩展别名

在Powershell中设置别名的确方便快捷，但是在设置别名的过程中并设置参数的相关信息。尽管别名会自动识别参数，但是如何把经常使用的参数默认设定在别名里面呢？例如Test-Connection -Count 2 -ComputerName，让-“-Count 2” 固化在别名中。
这时简单的别名无法完成上述需求，可以通过函数来完成它，并且一旦把函数拉过来，定义别名会变得更加灵活。

```
PS C:\PS> function test-conn { Test-Connection  -Count 2 -ComputerName $args}
PS C:\PS> Set-Alias tc test-conn
PS C:\PS> tc localhost

Source        Destination     IPV4Address      IPV6Address                              Bytes    Time(ms)
------        -----------     -----------      -----------                              -----    --------
test-me-01   localhost       127.0.0.1        ::1                                      32       0
test-me-01   localhost       127.0.0.1        ::1                                      32       0
```

有了函数牵线，别名可以完成更高级更强大的功能，其中$args为参数的占位符。







### 06.PowerShell执行文件和脚本

象运行可执行文件一样，Powershell运行文件和脚本，也必须使用绝对路径或者相对路径，或者要运行的文件必须定义在可受信任的环境变量中。

#### 关于脚本

脚本和批处理都属于伪可执行文件，它们只是包含了若干命令行解释器能够解释和执行的命令行代码。

#### 执行批处理文件

批处理是扩展名为”.bat”的文本文件，它可以包含任何cmd控制台能够处理的命令。当批处理文件被打开，Cmd控制台会逐行执行每条命令。那Powershell能够直接执行批处理吗？
将下列命令保存为ping.bat

```
@echo off
echo batch File Test
pause
Dir %windir%/system
```

然后执行ping
屏幕会打印ping命令帮助，说明调用的ping cmd 而不是ping.bat。
改为：

```
PS C:\PS> ./ping
batch File Test
Press any key to continue . . .
 Volume in drive C has no label.
 Volume Serial Number is 4E9B-D846

 Directory of C:Windowssystem

2009/06/11  05:21            69,584 avicap.dll
2009/06/11  05:21           109,456 avifile.dll
2009/07/14  05:41            32,816 COMMDLG.DLL
2009/07/14  05:41             2,000 keyboard.drv
2009/06/11  05:42             9,936 lzexpand.dll
2009/06/11  05:21            73,376 mciavi.drv
2009/06/11  05:21            25,264 mciseq.drv
2009/06/11  05:21            28,160 mciwave.drv
2009/07/14  05:41            68,992 MMSYSTEM.DLL
2009/07/14  05:41             1,152 mmtask.tsk
2009/07/14  05:41             2,032 mouse.drv
2009/06/11  05:21           126,912 msvideo.dll
2009/06/11  05:42            82,944 olecli.dll
2009/07/14  05:41            24,064 OLESVR.DLL
2009/07/14  05:41             5,120 SHELL.DLL
2009/07/14  05:41             1,744 sound.drv
2009/06/11  05:25             5,532 stdole.tlb
2009/07/14  05:41             3,360 system.drv
2009/07/14  05:41             4,048 TIMER.DRV
2009/06/11  05:42             9,008 ver.dll
2009/07/14  05:41             2,176 vga.drv
2009/07/14  05:41            12,704 WFWNET.DRV
              22 File(s)        700,380 bytes
               2 Dir(s)  75,927,420,928 bytes free
```

这时运行的是批处理。

通过cmd进入cmd控制台输入ping发现执行的不是ping命令，而是直接运行ping.bat ，也就是说可以通过.bat 覆盖cmd命令。这种机制很危险，如果有人侵入电脑，并将系统内部命令篡改成自己批处理，那就太悲剧了。 这种命令与脚本的混淆不会发生在powershell中，因为powershell有更安全的机制。

#### **执行VB脚本文件**

将下列命令保存为test.vbs

```
Set wmi = GetObject("winmgmts:")
Set collection = wmi.ExecQuery("select * from Win32_Process")
For Each process in collection
WScript.Echo process.getObjectText_
Next
```

执行 .\test.vbs 会遍历当前Win32进程，并把每个进程的详细信息通过窗口显示出来。
怎样让VB脚本的通过控制台输出呢？
**Wscript //H:CScript**
怎样还原VB脚本通过窗口输出呢？
**WScript //H:WScript**
在powershell中执行VB脚本

```
PS C:\PS> cscript.exe .test.vbs
Microsoft (R) Windows Script Host Version 5.8
Copyright (C) Microsoft Corporation. All rights reserved.

instance of Win32_Process
{
        Caption = "System Idle Process";
        CreationClassName = "Win32_Process";
        CSCreationClassName = "Win32_ComputerSystem";
        CSName = "test-me-01";
        Description = "System Idle Process";
        Handle = "0";
        HandleCount = 0;
        KernelModeTime = "484113379271";
        Name = "System Idle Process";
        OSCreationClassName = "Win32_OperatingSystem";
        OSName = "Microsoft Windows 7 Enterprise |C:Windows|DeviceHarddisk0Partition2";
        OtherOperationCount = "0";
        OtherTransferCount = "0";
        PageFaults = 0;
        PageFileUsage = 0;
        ParentProcessId = 0;
        PeakPageFileUsage = 0;
        PeakVirtualSize = "0";
        PeakWorkingSetSize = 0;
        Priority = 0;
        PrivatePageCount = "0";
        ProcessId = 0;
        QuotaNonPagedPoolUsage = 0;
        QuotaPagedPoolUsage = 0;
        QuotaPeakNonPagedPoolUsage = 0;
        QuotaPeakPagedPoolUsage = 0;
        ReadOperationCount = "0";
        ReadTransferCount = "0";
        SessionId = 0;
        ThreadCount = 2;
        UserModeTime = "0";
        VirtualSize = "0";
        WindowsVersion = "6.1.7601";
        WorkingSetSize = "24576";
        WriteOperationCount = "0";
        WriteTransferCount = "0";
};
```

#### **执行powershell脚本**

Powershell拥有自己的脚本，扩展名为“.ps1”

```
PS C:\PS> echo "dir;Get-PSProvider;help dir" >test.ps1
PS C:\PS> Get-Content ./test.ps1
dir;Get-PSProvider;help dir
PS C:\PS> ./test.ps1
```

初次执行脚本时，可能会碰到一个异常：

```powershell
File ” C:\PS\test.ps1″ cannot be loaded because the
execution of scripts is disabled on this system. Please see
“get-help about_signing” for more details.
At line:1 char:10
+ .test.ps1 <<<<
```



这是powershell的默认安全设置禁用了执行脚本，要启用这个功能需要拥有管理员的权限。

#### **Powershell调用入口的优先级**

**别名**：控制台首先会寻找输入是否为一个别名，如果是，执行别名所指的命令。因此我们可以通过别名覆盖任意powershell命令，因为别名的优先级最高。

**函数**：如果没有找到别名，会继续寻找函数，函数类似别名，只不过它包含了更多的powershell命令。因此可以自定义函数扩充cmdlet 把常用的参数给固化进去。

**命令**：如果没有找到函数，控制台会继续寻找命令，即cmdlet，powershell的内部命令。

**脚本**：没有找到命令，继续寻找扩展名为“.ps1”的Powershell脚本。

**文件**：没有找到脚本，会继续寻找文件，如果没有可用的文件，控制台会抛出异常。

```powershell


The term ‘now’ is not recognized as the name of a cmdlet, function, script file, or operable program. Chec
g of the name, or if a path was included, verify that the path is correct and try again.
At line:1 char:4
+ now <<<<
+ CategoryInfo : ObjectNotFound: (now:String) [], CommandNotFoundException
+ FullyQualifiedErrorId : CommandNotFoundException

```





## 2.PowerShell变量

### 01.定义变量

变量可以临时保存数据，因此可以把数据保存在变量中，以便进一步操作。

```powershell
#定义变量
$a=10
$b=4
#计算变量
$result=$a*$b
$msg="保存文本"

#输出变量
$result
$msg

40
保存文本
```

powershell 不需要显示地去声明，可以自动创建变量，只须记住变量的前缀为$.
创建好了变量后，可以通过变量名输出变量，也可以把变量名存在字符串中。但是有个例外单引号中的字符串不会识别和处理变量名。

#### 选择变量名

在powershell中变量名均是以美元符”`$`”开始，剩余字符可以是数字、字母、下划线的任意字符，并且powershell变量名**大小写不敏感**（$a和$A 是同一个变量)。
某些特殊的字符在powershell中有特殊的用途，一般不推荐使用这些字符作为变量名。当然你硬要使用，请把整个变量名后缀用花括号括起来。

```
PS C:\test> ${"I"like $}="mossfly"
PS C:\test> ${"I"like $}
mossfly
```

#### 赋值和返回值

赋值操作符为“=”，几乎可以把任何数据赋值给一个变量，甚至一条cmdlet命令
，为什么，因为Powershell支持对象，对象可以包罗万象。

```powershell
PS C:\test> $item=Get-ChildItem .
PS C:\test> $item

    Directory: C:\test

Mode                LastWriteTime     Length Name
----                -------------     ------ ----
d----        2011/11/23     17:25            ABC
-a---        2011/11/24     18:30      67580 a.html
-a---        2011/11/24     20:04      26384 a.txt
-a---        2011/11/24     20:26      12060 alias
-a---        2011/11/24     20:27      12060 alias.ps1
-a---        2011/11/23     17:25          0 b.txt
-a---        2011/11/23     17:25          0 c.txt
-a---        2011/11/23     17:25          0 d.txt
-a---        2011/11/25     11:20        556 employee.xml
-a---        2011/11/24     17:37       7420 name.html
-a---        2011/11/28     15:30         63 ping.bat
-a---        2011/11/24     17:44     735892 Powershell_Cmdlets.html
-a---        2011/11/28     17:03         60 test.ps1
-a---        2011/11/23     17:37        242 test.txt
-a---        2011/11/28     16:42        170 test.vbs

PS C:\test> $result=3000*(1/12+0.0075)
PS C:\test> $result
272.5
```

#### 给多个变量同时赋值

赋值操作符不仅能给一个变量赋值，还可以同时给多个变量赋相同的值。

```powershell
PS C:\test> $a=$b=$c=123
PS C:\test> $a
123
PS C:\test> $b
123
PS C:\test> $c
123
```

#### 交换变量的值

要交换两个变量的值，传统的程序语言至少需要三步，并且还需定义一个中间临时变量。

```powershell
$Value1 = 10
$Value2 = 20
$Temp = $Value1
$Value1 = $Value2
$Value2 = $Temp
```

在powershell中，交换两个变量的值，这个功能变得非常简单。

```powershell
PS C:\test> $value1=10
PS C:\test> $value2=20
PS C:\test> $value1,$value2=$value2,$value1
PS C:\test> $value1
20
PS C:\test> $value2
10
```

#### 查看正在使用的变量

Powershell将变量的相关信息的记录存放在名为variable:的驱动中。如果要查看所有定义的变量，可以直接遍历variable:

```powershell
PS C:\test> ls variable:

Name                           Value
----                           -----
"I"like $                      mossfly
$                              cls
?                              True
^                              cls
_
1                              1
a                              123
args                           {}
b                              123
c                              123
ConfirmPreference              High
ConsoleFileName
DebugPreference                SilentlyContinue
。。。
```

#### 查找变量

因为有虚拟驱动variable:的存在，可以象查找文件那样使用通配符查找变量。例如要查询以value打头的变量名。

```powershell
PS C:\test> ls variable:value*

Name                           Value
----                           -----
value1                         20
value2                         10
```

#### 验证变量是否存在

验证一个变量是否存在，仍然可以象验证文件系统那样，使用cmdlet Test-Path。为什么？因为变量存在变量驱动器中。

```powershell
PS C:\test> Test-Path variable:value1
True
PS C:\test> Test-Path variable:value2
True
PS C:\test> Test-Path variable:valueUnkonw
False
```

#### 删除变量

因为变量会在powershell退出或关闭时，自动清除。一般没必要删除，但是你非得删除，也可以象删除文件那样删除它。

```powershell
PS C:\test> Test-Path variable:value1
True
PS C:\test> del variable:value1
PS C:\test> Test-Path variable:value1
False
```

#### 使用专用的变量命令

为了管理变量，powershell提供了五个专门管理变量的命令Clear-Variable，Get-Variable，New-Variable，Remove-Variable，Set-Variable。因为虚拟驱动器variable:的存在，clear，remove，set打头的命令可以被代替。但是Get-Variable，New-Variable。却非常有用new-variable可以在定义变量时，指定变量的一些其它属性，比如访问权限。同样Get-Variable也可以获取这些附加信息。

#### 变量写保护

可以使用New-Variable 的option选项 在创建变量时，给变量加上只读属性，这样就不能给变量重新赋值了。

```powershell
PS C:\test> New-Variable num -Value 100 -Force -Option readonly
PS C:\test> $num=101
Cannot overwrite variable num because it is read-only or constant.
At line:1 char:5
+ $num <<<< =101     + CategoryInfo          : WriteError: (num:String) [], SessionStateUnauthorizedAccessException     + FullyQualifiedErrorId : VariableNotWritable PS C:\test> del Variable:num
Remove-Item : Cannot remove variable num because it is constant or read-only. If the variable is read-only,
ration again specifying the Force option.
At line:1 char:4
+ del <<<<  Variable:num
    + CategoryInfo          : WriteError: (num:String) [Remove-Item], SessionStateUnauthorizedAccessExcepti
    + FullyQualifiedErrorId : VariableNotRemovable,Microsoft.PowerShell.Commands.RemoveItemCommand
```

但是可以通过删除变量，再重新创建变量更新变量内容。

```powershell
PS C:\test> del Variable:num -Force
PS C:\test> $num=101
PS C:\test> $num
101
```

有没有权限更高的变量，有，那就是：选项Constant，常量一旦声明，不可修改

```powershell
PS C:\test> new-variable num -Value "strong" -Option constant

PS C:\test> $num="why? can not delete it."
Cannot overwrite variable num because it is read-only or constant.
At line:1 char:5
+ $num <<<< ="why? can not delete it."     + CategoryInfo          : WriteError: (num:String) [], SessionStateUnauthorizedAccessException     + FullyQualifiedErrorId : VariableNotWritable PS C:\test> del Variable:num -Force
Remove-Item : Cannot remove variable num because it is constant or read-only. If the variable is read-only,
ration again specifying the Force option.
At line:1 char:4
+ del <<<<  Variable:num -Force
    + CategoryInfo          : WriteError: (num:String) [Remove-Item], SessionStateUnauthorizedAccessExcepti
    + FullyQualifiedErrorId : VariableNotRemovable,Microsoft.PowerShell.Commands.RemoveItemCommand
```

#### 变量描述

在New-Variable 可以通过-description 添加变量描述，但是变量描述默认不会显示，可以通过Format-List 查看。

```powershell
PS C:\test> new-variable name -Value "me" -Description "This is my name"
PS C:\test> ls Variable:name | fl *

PSPath        : Microsoft.PowerShell.CoreVariable::name
PSDrive       : Variable
PSProvider    : Microsoft.PowerShell.CoreVariable
PSIsContainer : False
Name          : name
Description   : This is my name
Value         : me
Visibility    : Public
Module        :
ModuleName    :
Options       : None
Attributes    : {}
```





### 02.PowerShell 自动化变量



Powershell 自动化变量 是那些一旦打开Powershell就会自动加载的变量。
这些变量一般存放的内容包括

1. **用户信息**：例如用户的根目录$home
2. **配置信息**:例如powershell控制台的大小，颜色，背景等。
3. **运行时信息**：例如一个函数由谁调用，一个脚本运行的目录等。

```powershell
PS> $HOME
C:\Users\test
PS> $currentProcessID=$pid
PS> $currentProcessID
5356
PS> Get-Process -Id $pid

Handles  NPM(K)    PM(K)      WS(K) VM(M)   CPU(s)     Id ProcessName
-------  ------    -----      ----- -----   ------     -- -----------
    390      10    30604      33100   172     1.11   5356 powershell

PS> $PROFILE
C:\Users\test\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1
```

powershell中的某些自动化变量只能读，不能写。例如:$Pid。
可以通过Get-Help about_Automatic_variables查看Automatic_variables的帮助。
TOPIC
about_Automatic_Variables

**主题**
about_Automatic_Variables

**简短说明**
说明存储 Windows PowerShell 状态信息的变量。
这些变量由 Windows PowerShell 创建并维护。

**详细说明**
下面是 Windows PowerShell 中的自动变量的列表：

**$$**
包含会话所收到的最后一行中的最后一个令牌。

**$?**
包含最后一个操作的执行状态。如果最后一个操作成功，则包含 TRUE，失败则包含 FALSE。

**$^**
包含会话所收到的最后一行中的第一个令牌。

**$_**
包含管道对象中的当前对象。在对管道中的每个对象或所选对象执行操作的命令中，可以使用此变量。

**$Args**
包含由未声明参数和/或传递给函数、脚本或脚本块的参数值组成的数组。
在创建函数时可以声明参数，方法是使用 param 关键字或在函数名称后添加以圆括号括起、逗号
分隔的参数列表。

**$ConsoleFileName**
包含在会话中最近使用的控制台文件 (.psc1) 的路径。在通过 PSConsoleFile 参数启动
Windows PowerShell 或使用 Export-Console cmdlet 将管理单元名称导出到控制台文件
时，将填充此变量。

在使用不带参数的 Export-Console cmdlet 时，它自动更新在会话中最近使用的控制台文件。
可以使用此自动变量确定要更新的文件。

**$Error**
包含错误对象的数组，这些对象表示最近的一些错误。最近的错误是该数组中的第一个错误对象
($Error[0])。

**$Event**
包含一个 PSEventArgs 对象，该对象表示一个正在被处理的事件。
此变量只在事件注册命令（例如 Register-ObjectEvent）的 Action 块内填充。
此变量的值是 Get-Event cmdlet 返回的同一个对象。
因此，可以在 Action 脚本块中使用 $Event 变量的属性（例如
$Event.TimeGenerated）。

**$EventSubscriber**
包含一个 PSEventSubscriber 对象，该对象表示正在被处理的事件的事件订阅者。
此变量只在事件注册命令的 Action 块内填充。此变量的值
是 Get-EventSubscriber cmdlet 返回的同一个对象。

**$ExecutionContext**
包含一个 EngineIntrinsics 对象，该对象表示 Windows PowerShell 主机的执行上下文。
可以使用此变量来查找可用于 cmdlet 的执行对象。

**$False**
包含 FALSE。可以使用此变量在命令和脚本中表示 FALSE，而不是使用字符串”false”。如果
该字符串转换为非空字符串或非零整数，则可将该字符串解释为 TRUE。

**$ForEach**
包含 ForEach-Object 循环的枚举数。可以对 $ForEach 变量的值使用枚举数的属性和方法。
此变量仅在运行 For 循环时存在，循环完成即会删除。

**$Home**
包含用户的主目录的完整路径。此变量等效于 %homedrive%%homepath% 环境变量。

**$Host**
包含一个对象，该对象表示 Windows PowerShell 的当前主机应用程序。可以使用此变量在命
令中表示当前主机，或者显示或更改主机的属性，如 $Host.version、$Host.CurrentCulture
或 $host.ui.rawui.setbackgroundcolor(“Red”)。

**$Input**
一个枚举数，它包含传递给函数的输入。$Input 变量区分大小写，只能用于函数和脚本块。（脚
本块本质上是未命名的函数。）在函数的 Process 块中，$Input 变量包含当前位于管道中的对
象。在 Process 块完成后，$Input 的值为 NULL。如果函数没有 Process 块，则 $Input
的值可用于 End 块，它包含函数的所有输入。

**$LastExitCode**
包含运行的最后一个基于 Windows 的程序的退出代码。

**$Matches**
$Matches 变量与 -match 和 -not match 运算符一起使用。
将标量输入提交给 -match 或 -notmatch 运算符时，如果检测到匹配，则会返回一个布尔值，
并使用由所有匹配字符串值组成的哈希表填充 $Matches 自动变量。有关 -match 运算符的详细
信息，请参阅 about_comparison_operators。

**$MyInvocation**
包含一个对象，该对象具有有关当前命令（如脚本、函数或脚本块）的信息。可以使用该对象中的
信息（如脚本的路径和文件名 ($myinvocation.mycommand.path) 或函数的名称
($myinvocation.mycommand.name)）来标识当前命令。对于查找正在运行的脚本的名称，这非常有用。

**$NestedPromptLevel**
包含当前提示级别。值 0 指示原始提示级别。该值在进入嵌套级别时递增，在退出嵌套级别时递减。

例如，在使用 $Host.EnterNestedPrompt 方法时，Windows PowerShell 会出现嵌套命令
提示符。在 Windows PowerShell 调试程序中到达断点时，Windows PowerShell 也会出现嵌
套命令提示符。

在进入嵌套提示时，Windows PowerShell 暂停当前命令，保存执行上下文，并递增
$NestedPromptLevel 变量的值。要创建更多嵌套命令提示符（最多 128 级）或返回到原始命
令提示符，请完成命令，或键入”exit”。

$NestedPromptLevel 变量有助于跟踪提示级别。可以创建包含此值的备用 Windows
PowerShell 命令提示符，以使此值始终可见。

**$NULL**
包含 NULL 或空值。可以在命令和脚本中使用此变量表示 NULL，而不是使用字符串”NULL”。
如果该字符串转换为非空字符串或非零整数，则可将该字符串解释为 TRUE。

**$PID**
包含承载当前 Windows PowerShell 会话的进程的进程标识符 (PID)。

**$Profile**
包含当前用户和当前主机应用程序的 Windows PowerShell 配置文件的完整路径。可以在命令
中使用此变量表示配置文件。例如，可以在命令中使用此变量确定是否已创建某个配置文件：

test-path $profile

也可以在命令中使用此变量创建配置文件：

new-item -type file -path $pshome -force

此外，还可以在命令中使用此变量在记事本中打开配置文件：

notepad $profile

**$PSBoundParameters**
包含活动参数及其当前值的字典。只有在声明参数的作用域（如脚本或函数）中，
此变量才有值。可以使用此变量显示或更改参数的当前值，也可以将参数值传递给
其他脚本或函数。

例如：

function test {
param($a, $b)

\# Display the parameters in dictionary format.
$psboundparameters

\# Call the Test1 function with $a and $b.
test1 @psboundparameters
**}**

**$PsCmdlet**
包含一个对象，该对象表示正在运行的 cmdlet 或高级函数。

可以在 cmdlet 或函数代码中使用该对象的属性和方法来响应使用的条件。例如，
ParameterSetName 属性包含正在使用的参数集的名称，而 ShouldProcess 方法将 WhatIf
和 Confirm 参数动态添加到 cmdlet。

有关 $PSCmdlet 自动变量的详细信息，请参阅 about_Functions_Advanced。

**$PsCulture**
包含操作系统中当前所用的区域性的名称。区域性确定数字、货币和日期等项的显示格式。这是系
统的 System.Globalization.CultureInfo.CurrentCulture.Name 属性的值。要获取系统
的 System.Globalization.CultureInfo 对象，请使用 Get-Culture cmdlet。

**$PSDebugContext**
在调试期间，此变量包含有关调试环境的信息。在其他时间，此变量包含 NULL 值。因此，可以使
用此变量指示调试程序是否拥有控制权。填充之后，此变量包含一个具有 Breakpoints 和
InvocationInfo 属性的 PsDebugContext 对象。InvocationInfo 属性有多个十分有用的
属性，包括 Location 属性。Location 属性指示正在调试的脚本的路径。

**$PsHome**
包含 Windows PowerShell 的安装目录的完整路径（通常为
%windir%System32WindowsPowerShellv1.0）。可以在 Windows PowerShell 文件
的路径中使用此变量。例如，下面的命令在概念性帮助主题中搜索”variable”一词：

select-string -pattern variable -path $pshome*.txt

**$PSScriptRoot**
包含要从中执行脚本模块的目录。
通过此变量，脚本可以使用模块路径来访问其他资源。

**$PsUICulture**
包含操作系统中当前所用的用户界面 (UI) 区域性的名称。UI 区域性确定哪些文本字符串用于用户
界面元素（如菜单和消息）。这是系统的
System.Globalization.CultureInfo.CurrentUICulture.Name 属性的值。要获取系统
的 System.Globalization.CultureInfo 对象，请使用 Get-UICulture cmdlet。

**$PsVersionTable**
包含一个只读哈希表，该哈希表显示有关在当前会话中运行的 Windows PowerShell 版本的详
细信息。
该表包括下列项：

- CLRVersion： 公共语言运行时 (CLR) 的版本
- BuildVersion： 当前版本的内部版本号
- PSVersion： Windows PowerShell 版本号
- WSManStackVersion： WS-Management 堆栈的版本号
- PSCompatibleVersions： 与当前版本兼容的 Windows PowerShell 版本
- SerializationVersion ：序列化方法的版本
- PSRemotingProtocolVersion：Windows PowerShell 远程管理协议的版本

**$Pwd**
包含一个路径对象，该对象表示当前目录的完整路径。

**$Sender**
包含生成此事件的对象。此变量只在事件注册命令的 Action 块内填充。
此变量的值也可在 Get-Event 返回的 PSEventArgs
(System.Management.Automation.PSEventArgs) 对象的 Sender 属性中找到。

**$ShellID**
包含当前 shell 的标识符。

**$SourceArgs**
包含表示正在被处理的事件的事件参数的对象。此变量只在事件注册命令的 Action
块内填充。此变量的值也可在 Get-Event 返回的 PSEventArgs
(System.Management.Automation.PSEventArgs) 对象的 SourceArgs 属性中找到。

**$SourceEventArgs**
包含一个对象，该对象表示从正在被处理的事件的 EventArgs 中派生出的
第一个事件参数。此变量只在事件注册命令的 Action 块内填充。
此变量的值也可在 Get-Event 返回的 PSEventArgs
(System.Management.Automation.PSEventArgs) 对象的 SourceArgs 属性中找到。

**$This**
在定义脚本属性或脚本方法的脚本块中，$This 变量引用要扩展的对象。

**$True**
包含 TRUE。可以在命令和脚本中使用此变量表示 TRUE。

**另请参阅**
about_Hash_Tables
about_Preference_Va

riables
about_Variables







### 03.环境变量

传统的控制台一般没有象Powershell这么高级的变量系统。它们都是依赖于机器本身的环境变量，进行操作 。环境变量对于powershell显得很重要，因为它涵盖了许多操作系统的细节信息。此外，powershell中的变量只存在于powershell内部的会话中，一旦powershell关闭，这些变量就会自生自灭。但是如果环境变量被更新了，它会继续保存在操作系统中，即使其它程序也可以调用它。

#### 读取特殊的环境变量

通过环境变量读取Windows操作系统的安装路径，和默认应用程序的安装路径。

```powershell
PS> $env:windir
C:\Windows
PS> $env:ProgramFiles
C:\Program Files
```

通过$env:，这就提示powershell忽略基本的variable:驱动器，而是去环境变量env:驱动器中寻找变量。为了和其它变量保持一致，powershell环境变量也可以象其它变量那样使用。比如你可以把它插入到文本中。

```powershell
PS> "My computer name $env:COMPUTERNAME"
My computer name MYHome-test-01
```

#### 查找环境变量

Powershell把所有环境变量的记录保存在env: 虚拟驱动中，因此可以列出所有环境变量 。一旦查出环境变量的名字就可以使用$env:name 访问了。

```powershell
PS> ls env:
Name                           Value
----                           -----
ALLUSERSPROFILE                C:\ProgramData
APPDATA                        C:\User\sv-test\Home\AppData\Roaming
CommonProgramFiles             C:\Program Files\Common Files
COMPUTERNAME                   MYHome-test-01
ComSpec                        C:\Windows\system32\cmd.exe
FP_NO_HOST_CHECK               NO
HOMEDRIVE                      C:
HOMEPATH                       Users\v-test\Home
```

#### 创建新的环境变量

创建新环境变量的方法和创建其它变量一样，只需要指定env:虚拟驱动器即可

```powershell
PS> $env:TestVar1="This is my environment variable"
PS> $env:TestVar2="Hollow, environment variable"
PS> ls env:Test*

Name                           Value
----                           -----
TestVar1                       This is my environment variable
TestVar2                       Hollow, environment variable
```

#### 删除和更新环境变量

在powershell删除和更新环境变量和常规变量一样。例如要删除环境变量中的 windir，

```powershell
PS> del env:windir
PS> $env:windir
PS>
```

可以更新环境变量$env:OS 为linux redhat。

```powershell
PS> $env:OS
Windows_NT
PS>  $env:OS="Redhat Linux"
PS> $env:OS
Redhat Linux
```

这样直接操作环境变量，会不会不安全？事实上很安全，因为$env：中的环境变量只是机器环境变量的一个副本，即使你更改了它，下一次重新打开时，又会恢复如初。（.NET方法更新环境变量除外）

我们可以将受信任的文件夹列表追加到环境变量的末尾，这样就可以直接通过相对路径执行这些文件下的文件或者脚本，甚至省略扩展名都可以。

```powershell
PS> md .myscript

    Directory:

Mode                LastWriteTime     Length Name
----                -------------     ------ ----
d----        2011/11/29     18:20            myscript

PS> cd .myscript
PSmyscript> "write-host 'Hollow , Powershell'" > hollow.ps1
PSmyscript> .hollow.ps1
Hollow , Powershell
PSmyscript> cd ..
PS> $env:Path+=";C:PowerShellmyscript"
PS> hollow.ps1
Hollow , Powershell
PS> hollow
Hollow , Powershell
```

#### 环境变量更新生效

上述对于环境变量的操作只会影响当前powershell会话，并没有更新在机器上。
.NET方法[environment]::SetEnvironmentvariable操作可以立刻生效。
下面的例子对当前用户设置环境变量，经测试，重新打开powershell仍然存在

```powershell
PS> [environment]::SetEnvironmentvariable("Path", ";c:\powershellscript", "User")
PS> [environment]::GetEnvironmentvariable("Path", "User")
;c:\powershellscript
```







### 04.PowerShell驱动器变量

Powershell中所有不是我们自己的定义的变量都属于驱动器变量（比如环境变量），它的前缀只是提供给我们一个可以访问信息的虚拟驱动器.。例如env:windir，象env：驱动器上的一个”文件”，我们通过$访问它，就会返回”文件”的内容。

#### 直接访问文件路径

通过驱动器直接访问文件路径，也支持物理驱动器，必须把文件路径放在封闭的大括号中，因为正常的文件路径包含两个特殊字符“:”和“”，有可能会被powershell解释器误解。

```powershell
PS> ${c:/powershell/ping.bat}
@echo off
echo batch File Test
pause
Dir %windir%/system

PS> ${c:autoexec.bat}
REM Dummy file for NTVDM
```

上述的例子有一个限制，就是${$env:HOMEDRIVE/Powershellping.bat}不能识别，原因是$后花括号中的路径必须是具体的路径，而不能带返回值。
解决方法：

```powershell
PS> Invoke-Expression "`${$env:HOMEDRIVE/Powershell/ping.bat}"
@echo off
echo batch File Test
pause
Dir %windir%/system
```

因为反引号”`”放在$前，会把$解析成普通字符，解释器会继续去解析第二个$，发现env:HOMEDRIVE，将其替换成c，到此 Invoke-Expression的参数就变成了${C:/Powershell/ping.bat},继续执行这个表达式就可以了。
查看Powershell支持的驱动器，可以使用Get-PSDrive查看。

| Name     | Root               | Description                                                  |
| -------- | ------------------ | ------------------------------------------------------------ |
| A        | A:                 |                                                              |
| Alias    |                    | Drive containing a view of the aliases stored in session state. |
| C        | C:                 |                                                              |
| cert     |                    | X509 Certificate Provider                                    |
| E        | E:                 |                                                              |
| Env      |                    | The drive containing a view of the environment variables for the process. |
| Function |                    | The drive containing a view of the functions stored in session state. |
| HKCU     | HKEY_CURRENT_USER  | The software settings for the current user.                  |
| HKLM     | HKEY_LOCAL_MACHINE | The configuration settings for the local machine.            |
| Variable |                    | The drive containing a view of those variables stored in session state. |
| WSMan    |                    | Root of WsMan Config Storage.                                |

PSDrive中的大多都支持直接路径访问，例如可以通过函数路径，访问一个函数的具体实现。

```powershell
PS> function hellow(){ Write-Host "Hellow,Powershell" }
PS> $function:hellow
param()
Write-Host "Hellow,Powershell"
```

#### 特殊的变量：子表达式

由 `$`+圆括号+表达式 构成的变量属于子表达式变量，这样的变量会先计算表达式，然后把表达式的值返回。
例如 变量`$(3+6)`，可以简写成（3+6）,甚至可以简写成3+6。子表达式变量也可以嵌套在文本中，例如”result=$(3+6)”。
在处理对象的属性时，会大量的用到表达式变量。例如：

```powershell
PS> $file=ls Powershell_Cmdlets.html
PS> $file.Length
735892
PS> "The size of Powershell_Cmdlets.html is $($file.Length)"
The size of Powershell_Cmdlets.html is 735892
```

其实上面的代码可以简化为：

```powershell
PS> "The size of Powershell_Cmdlets.html is $($(ls Powershell_Cmdlets.html).Length)"
The size of Powershell_Cmdlets.html is 735892
```









### 05.PowerShell变量的作用域

Powershell所有的变量都有一个决定变量是否可用的作用域。Powershell支持四个作用域：全局、当前、私有和脚本。有了这些作用域就可以限制变量的可见性了，尤其是在函数和脚本中。

如果我们对变量不做特别的声明，Powershell解释器会自动处理和限制变量的作用域。将下面的内容命令保存着至test1.ps1
$windows = $env:windir
“Windows Folder: $windows”

然后在控制台给变量$windows赋值，并调用Test.ps1脚本。

```powershell
PS> $windows="Hellow"
PS> .\test.ps1
Windows Folder: C:\Windows
PS> $windows
Hellow
```

调用脚本时，会分配一个变量$windows，在脚本调用结束后，这个变量被回收，脚本中的变量不会影响脚本外的变量，因为它们在不同的作用域中。powershell会针对每个函数和脚本给它们分配不同的作用域。

#### 更改变量的可见性

你可以很容易的看到没有Powershell解释器自动限制可见性时会发生什么状况，同样是刚才的脚本，刚才的命令，只是在运行脚本时多加上一个点”.” 和一个空格：

```powershell
PS> $windows="Hellow"
PS> . .\test.ps1
Windows Folder: C:\Windows
PS> $windows
C:Windows
```

在运行脚本时使用一个原点和空格，Powershell解释器就不会为脚本本身创建自己的变量作用域，它会共享当前控制台的作用域，这种不太灵活但却简单的方法，使用时一定要格外小心。

加强变量可见性限制的优点：清空初始化环境
可以假设一个场景，如果你在当前控制台不小心定义了一个只读的常量，这个常量既不能更新也不能删除，很是麻烦。但是如果你在脚本中操作这个变量就不成问题，因为脚本有自己的作用域。例如，将下面文本保存为test.ps1，并调用没有任何问题：

```powershell
New-Variable a -value 1 -option Constant
"Value: $a"
PS> .\test.ps1
Value: 1
PS> .\test.ps1
Value: 1
```

但是如果你通过圆点禁用作用域限制，调用test.ps1,就会有异常，因为一个常量不能被创建两次。

```powershell
PS> . .\test.ps1
Value: 1
PS> . .\test.ps1
New-Variable : A variable with name 'a' already exists.
Attest.ps1:1 char:13
+ New-Variable <<<<  a -value 1 -option Constant
    + CategoryInfo          : ResourceExists: (a:String) [New-Variable], SessionStateException
    + FullyQualifiedErrorId : VariableAlreadyExists,Microsoft.PowerShell.Commands.NewVariableCommand
```

所以这种变量的作用域限制可以把变量的冲突降到最小。

#### 设置单个变量的作用域

到目前为止，看到的变量作用域的改变都是全局的，能不能针对某个具体变量的作用域做一些个性化的设置。

**$global**
全局变量，在所有的作用域中有效，如果你在脚本或者函数中设置了全局变量，即使脚本和函数都运行结束，这个变量也任然有效。

**$script**
脚本变量，只会在脚本内部有效，包括脚本中的函数，一旦脚本运行结束，这个变量就会被回收。

**$private**
私有变量，只会在当前作用域有效，不能贯穿到其他作用域。

**$local**
默认变量，可以省略修饰符，在当前作用域有效，其它作用域只对它有只读权限。

打开Powershell控制台后，Powershell会自动生成一个新的全局作用域。如果增加了函数和脚本，或者特殊的定义，才会生成其它作用域。在当前控制台，只存在一个作用域，通过修饰符访问，其实访问的是同一个变量：

```powershell
PS> $logo="www.pstips.net"
PS> $logo
www.pstips.net
PS> $private:logo
www.pstips.net
PS> $script:logo
www.pstips.net
PS> $private:logo
www.pstips.net
PS> $global:logo
www.pstips.net
```

当调用一个已定义的函数，Powershell会生成第二个作用域，它可以对调用者的作用域中的变量执行读操作，但是不能执行写操作。

```powershell
PS> function f(){ "var=$var";$var="function inner";$var }
PS> $var="I am in console."
PS> $var
I am in console.
PS> f
var=I am in console.
function inner
PS> $var
I am in console.
```

怎样把当前控制台中的变量保护起来，不让它在函数和脚本中被访问，Private修饰符就派上了用场。

```powershell
PS>  function f(){ "var=$var";$var="function inner";$var }
PS> $private:var="i am a private variable in console,other scope can not access me."
PS> f
var=
function inner
PS> $private:var
i am a private variable in console,other scope can not access me.
```

对于$private限制的变量能不能在函数中通过$global修改呢？不但不能修改，还会删除当前的$private变量

```powershell
PS> Function f(){ "var=$var";$global:var=" Try to change variable in function"}
PS> $private:var="I am a private variable"
PS> $private:var
I am a private variable
PS> $var
I am a private variable
PS> f
var=
PS> $private:var
PS> $var
PS>
PS> $private -eq $null
True
```

但是$local 修饰的变量则可以通过$global在函数内部更改。

```powershell
PS> Function f(){ "var=$var";$global:var=" Try to change variable in function"}
PS> $var="I am a local variable."
PS> $var
I am a local variable.
PS> $private:var
I am a local variable.
PS> f
var=I am a local variable.
PS> $var
 Try to change variable in function
PS> $local:var
 Try to change variable in function
```





### 06.PowerShell变量的类型和强类型

变量可以自动存储任何Powershell能够识别的类型信息，可以通过$variable的GetType().Name查看和验证Powershell分配给变量的数据类型。

```powershell
PS> (10).gettype().name
Int32
PS> (9999999999999999).gettype().name
Int64
PS> (3.14).gettype().name
Double
PS> (3.14d).gettype().name
Decimal
PS> ("WWW.MOSSFLY.COM").gettype().name
String
PS> (Get-Date).gettype().name
DateTime
```

Powershell会给数据分配一个最佳的数据类型；如果一个整数超出了32位整数的上限([int32]::MaxValue),它就会分配一个64位整数的数据类型；如果碰到小数，会分配一个Double类型；如果是文本，Powershell会分配一个String类型；如果是日期或者时间，会被存储为一个Datetime对象。
这种类型自适应也称作“弱类型”,虽然使用起来方便，但是也会有一些限制，甚至危险。如果powershell选择了一个错误的类型付给变量，可能会引发一些奇怪的现象。例如有一个变量要存储的是即将拷贝文件的个数，可是在赋值时付了一个字符串，Powershell不会去做过多的判断，它会更新这个变量的类型，并且存储新的数据。所以一般专业的程序员或者脚本开发者更喜欢使用“强类型”，哪怕在赋值时类型不兼容的报错，他们也乐意接受。
喜欢使用强类型的另一个原因是：每一个数据类型都有属于自己的函数。例如DateTime,和XML，尽管这两种类型都可以用纯文本表示，但是使用强类型[DateTime]和[XML],对于数据操作起来更方便，这两个类型的方法可是很丰富奥！

#### 指定类型定义变量

定义变量时可以在变量前的中括号中加入数据类型。例如定义一个Byte类型的变量，因为Byte的定义域为[0,255],一旦尝试使用一个不在定义域中的值赋给该变量就会显示一条错误信息。

```powershell
PS> [byte]$b=101
PS> $b
101
PS> $b=255
PS> $b
255
PS> $b.gettype()

IsPublic IsSerial Name                                     BaseType
-------- -------- ----                                     --------
True     True     Byte                                     System.ValueType

PS> $b=256

Cannot convert value "256" to type "System.Byte". Error: "Value was either too large or too small for an unsigned byte.
"
At line:1 char:3
+ $b <<<< =256
    + CategoryInfo          : MetadataError: (:) [], ArgumentTransformationMetadataException
    + FullyQualifiedErrorId : RuntimeException
```

#### 使用固定类型的优点

手动地定义类型的一个重要原因是每个特殊的数据类型都有自己的特殊命令和特殊方法。比如把一个日期字符串赋给一个变量，Powershell不会自动把这个字符串转换成日期对象赋给一个变量，因为Powershell毕竟是机器，没有人那么智能。当你在赋值时指定DateTime类型时，你会发现几乎所有的.Net 中DateTime类型的方法在这里都得到支持。

```powershell
PS> [DateTime]$date="2012-12-20 12:45:00"
PS> $date

2012年12月20日 12:45:00

PS> $date.DayOfWeek
Thursday
PS> $date.DayOfYear
355
PS> $date.AddDays(-10)

2012年12月10日 12:45:00
```

Powershell处理Xml文档也很方便，
例如有如下LogoTest.xml

```xml
`<``logotest``>``  ``<``extensions``>``    ``<``e``>.exe</``e``>``    ``<``e``>.dll</``e``>``  ``</``extensions``>``  ``<``files``>``    ``<``f``></``f``>``  ``</``files``>``  ``<``dirs``></``dirs``>``</``logotest``>`
```

查询.exe 和 .dll结点

```powershell
PS> [ XML ]$xml=(Get-Content .LogoTestConfig.xml)
PS> $xml.LogoTest.Extensions.E
.exe
.dll
```

Powershell 默认支持的.NET类型如下。
[array],[bool],[byte],[char],[datetime],[decimal],[double],[guid],[hashtable],[int16],[int32],[int],[int64],[long],[nullable],[psobject],[regex],[sbyte].[scriptblock],[single],[float],[string],[switch],[timespan],[type],[uint16],[uint32],[uint64],[ XML ]





### 07.PowerShell变量的幕后管理

在Powershell中创建一个变量，会在后台生成一个PSVariable对象，这个对象不仅包含变量的值，也包含变量的其它信息，例如”只写保护”这样的描述。
如果在Powershell中输出一个变量，只会输出这个变量的值。不能够显示它的其它信息，如果想查看一个变量的其它保留信息，就需要变量的基类PSVariable对象，这个可以通过Get-Variable命令得到，下面的例子演示如何查看一个变量的全部信息。

```powershell
PS> $a=get-date
PS> Get-Variable a

Name                           Value
----                           -----
a                              2011/12/8 17:52:02

PS> Get-Variable a | fl *

Name        : a
Description :
Value       : 2011/12/8 17:52:02
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {}
```

#### 修改变量的选项设置

Powershell处理一个变量的PSVariable对象，主要是为了能够更新变量的选项设置。既可以使用命令Set-Variable，也可以在获取PSvariable对象后直接更改。比如更改一个变量的描述：

```powershell
PS> $str="我是一个变量"
PS> $var=Get-Variable str
PS> $var

Name                           Value
----                           -----
str                            我是一个变量

PS> $var | fl *

Name        : str
Description :
Value       : 我是一个变量
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {}

PS> $var.Description="我知道你是一个变量"
PS> $var | fl *
Name        : str
Description : 我知道你是一个变量
Value       : 我是一个变量
Visibility  : Public
Module      :
ModuleName  :
Options     : None
Attributes  : {}
```

如果你不想多加一个临时变量$var来存储PSVariable,可以使用Powershell子表达式

```powershell
PS> (Get-Variable str).Description="变量的描述已更改;"
PS> Get-Variable str | Format-Table Name,Description

Name                                                        Description
----                                                        -----------
str                                                         变量的描述已更改;
```

#### 激活变量的写保护

可以操作一个变量的选项设置 ，比如给一个变量加上写保护，需要将Option设置为“ReadOnly”

```powershell
PS> $var="mossfly"
PS> Set-Variable var -Option "ReadOnly"
PS> (Get-Variable var).Options
ReadOnly
PS> Set-Variable var -Option "None" -Force
PS> (Get-Variable var).Options
None
```

#### 变量的选项

变量的选项是一个枚举值，包含:
“None”:默认设置
“ReadOnly”：变量只读，但是可以通过-Force 选项更新。
“Constant”：常量一旦声明，在当前控制台不能更新。
“Private”:只在当前作用域可见，不能贯穿到其它作用域
“AllScope”：全局，可以贯穿于任何作用域

#### 变量的类型规范

每个变量的都有自己的类型，这个具体的类型存放在PsVariable对象的Attributes[System.Management.Automation.PSVariableAttributeCollection]属性，如果这个Attributes为空，可以给这个变量存放任何 类型的数据，Powershell会自己选择合适的类型。一旦这个Attributes属性确定下来，就不能随意存放数据了。例如给`$var`存放一个整数，属于弱类型，所以Attributes属性为空，这时还可以给它赋值一个字符串。但是如果给`$var`增加强类型，存放一个整数，再给它赋值一个其它类型，解释器会自动尝试转换，如果不能转换就会抛出异常。这时如果你非得更新$var变量的类型，可以使用 (Get-Variable var).Attributes.Clear(),清空Attributes，这样强类型就又转换成弱类型了。

```powershell
PS> $var=123
PS> (Get-Variable var).Attributes
PS> $var.GetType().FullName
System.Int32
PS> $var="字符串"
PS>  (Get-Variable var).Attributes
PS>  $var.GetType().FullName
System.String
PS> [int]$var=123
PS> (Get-Variable var).Attributes

TypeId
------
System.Management.Automation.ArgumentTypeConverterAttribute

PS> $var.GetType().FullName
System.Int32
PS> $var="2012"
PS> $var
2012
PS> $var.GetType().FullName
System.Int32
PS> $var="2012世界末日"
Cannot convert value "2012世界末日" to type "System.Int32". Error: "Input string was not in a correct format."
At line:1 char:5
+ $var <<<< ="2012世界末日"     + CategoryInfo          : MetadataError: (:) [], ArgumentTransformationMetadataException     + FullyQualifiedErrorId : RuntimeException PS> (Get-Variable var).Attributes.Clear()
PS> (Get-Variable var).Attributes
PS> $var="2012世界末日"
PS> $var.GetType().FullName
System.String
```

#### 验证和检查变量的内容

变量PSVariable对象的Attributes属性能够存储一些附件条件，例如限制变量的长度，这样在变量重新赋值时就会进行验证，下面演示如何限制一个字符串变量的长度为位于2-5之间。

```powershell
PS> $var="限制变量"
PS> $condition= New-Object System.Management.Automation.ValidateLengthAttribute -ArgumentList 2,5
PS> (Get-Variable var).Attributes.Add($condition)
PS> $var="限制"
PS> $var="射雕英雄传"
PS> $var="看射雕英雄传"
The variable cannot be validated because the value 看射雕英雄传 is not a valid value for the var variable.
At line:1 char:5
+ $var <<<< ="看射雕英雄传"
    + CategoryInfo          : MetadataError: (:) [], ValidationMetadataException
    + FullyQualifiedErrorId : ValidateSetFailure
```

常用的变量内容验证还有5种，分别为：
**ValidateNotNullAttribute**：限制变量不能为空
**ValidateNotNullOrEmptyAttribute**：限制变量不等为空，不能为空字符串，不能为空集合
**ValidatePatternAttribute**:限制变量要满足制定的正则表达式
**ValidateRangeAttribute**：限制变量的取值范围
**ValidateSetAttribute**：限制变量的取值集合

ValidateNotNullAttribute 例子

```powershell
PS> $a=123
PS> $con=New-Object System.Management.Automation.ValidateNotNullAttribute
PS> (Get-Variable a).Attributes.Add($con)
PS> $a=8964
PS> $a=$null
无法验证此变量，因为值  不是变量 a 的有效值。
所在位置 行:1 字符: 3
+ $a <<<< =$null
    + CategoryInfo          : MetadataError: (:) [], ValidationMetadataException
    + FullyQualifiedErrorId : ValidateSetFailure
```

ValidateNotNullOrEmptyAttribute 例子，注意@()为一个空数组。

```powershell
PS> $con=New-Object System.Management.Automation.ValidateNotNullOrEmptyAttribute
PS> (Get-Variable a).Attributes.clear()
PS> (Get-Variable a).Attributes.add($con)
PS> $a=$null
The variable cannot be validated because the value  is not a valid value for the a variable.
At line:1 char:3
+ $a <<<< =$null     + CategoryInfo          : MetadataError: (:) [], ValidationMetadataException     + FullyQualifiedErrorId : ValidateSetFailure PS> $a=""
The variable cannot be validated because the value  is not a valid value for the a variable.
At line:1 char:3
+ $a <<<< =""     + CategoryInfo          : MetadataError: (:) [], ValidationMetadataException     + FullyQualifiedErrorId : ValidateSetFailure PS> $a=@()
The variable cannot be validated because the value System.Object[] is not a valid value for the a variable.
At line:1 char:3
+ $a <<<< =@()
    + CategoryInfo          : MetadataError: (:) [], ValidationMetadataException
    + FullyQualifiedErrorId : ValidateSetFailure
```

ValidatePatternAttribute 例子，验证Email格式

```powershell
PS> $email="test@mossfly.com"
PS> $con=New-Object System.Management.Automation.ValidatePatternAttribute "b[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}b"
PS> (Get-Variable email).Attributes.Add($con)
PS> $email="abc@abc.com"
PS> $email="abc@mossfly.com"
PS> $email="author@gmail.com"
PS> $email="www@mossfly"
The variable cannot be validated because the value www@mossfly is not a valid value for the email variable.
At line:1 char:7
+ $email <<<< ="www@mossfly"
    + CategoryInfo          : MetadataError: (:) [], ValidationMetadataException
    + FullyQualifiedErrorId : ValidateSetFailure
```

ValidateRangeAttribute 例子，验证月份1-12

```powershell
PS> $month=1
PS> (Get-Variable month).Attributes.Add( $( New-Object System.Management.Automation.ValidateRangeAttribute  -ArgumentList 1,12) )
PS> $month=10
PS> $month=12
PS> $month=18
The variable cannot be validated because the value 18 is not a valid value for the month variable.
At line:1 char:7
+ $month <<<< =18     + CategoryInfo          : MetadataError: (:) [], ValidationMetadataException     + FullyQualifiedErrorId : ValidateSetFailure ValidateSetAttribute 例子，验证性别 PS>  $sex="男"
PS>  $con=New-Object System.Management.Automation.ValidateSetAttribute -ArgumentList "男","女","保密"
PS> (Get-Variable sex).Attributes.Add($con)
PS> $sex="女"
PS> $sex="不男不女"
The variable cannot be validated because the value 不男不女 is not a valid value for the sex variable.
At line:1 char:5
+ $sex <<<< ="不男不女"
    + CategoryInfo          : MetadataError: (:) [], ValidationMetadataException
    + FullyQualifiedErrorId : ValidateSetFailure
```









## 3.PowerShell数组和哈希表

### 01.PowerShell命令返回数组

当我们把一个命令的执行结果保存到一个变量中，可能会认为变量存放的是纯文本。
但是，事实上Powershell会把文本按每一行作为元素存为数组。如果一个命令的返回值不止一个结果时，Powershell也会自动把结果存储为数组。

```powershell
PS C:Powershell> $IPcfg=ipconfig
PS C:Powershell> $IPcfg

Windows IP Configuration
Ethernet adapter Local Area Connection:

   Connection-specific DNS Suffix  . : ***
   Link-local IPv6 Address . . . . . : ***
   IPv4 Address. . . . . . . . . . . : 192.168.140.128
   Subnet Mask . . . . . . . . . . . : 255.255.252.0
   Default Gateway . . . . . . . . . : 192.168.140.1

Tunnel adapter isatap.mossfly.com:

   Connection-specific DNS Suffix  . : ***
   Link-local IPv6 Address . . . . . : ***
   Default Gateway . . . . . . . . . :***

Tunnel adapter Teredo Tunneling Pseudo-Interface:

   Media State . . . . . . . . . . . : Media disconnected
   Connection-specific DNS Suffix  . :
PS C:Powershell> $IPcfg.Count
22
```

#### 使用数组存储结果

判断一个变量是否为数组

```powershell
PS C:Powershell> $ip=ipconfig
PS C:Powershell> $ip -is [array]
True
PS C:Powershell> "abac" -is [array]
False
PS C:Powershell> $str="字符串"
PS C:Powershell> $str.ToCharArray() -is [array]
True
```

查看数组的元素个数用$array.Count属性。访问第x个元素，使用$array[x-1]，因为数组是以0开始索引的。

#### 使用管道对数组进一步处理

```powershell
PS C:Powershell> ipconfig | Select-String "IP"

Windows IP Configuration
   Link-local IPv6 Address . . . . . : ***
   IPv4 Address. . . . . . . . . . . : ***
   Link-local IPv6 Address . . . . . : ***
```

#### 使用真实的对象操作

为什么不愿把IPconfig返回的结果称为对象，因为它不是真正Cmdlet命令，真正的Powershell命令返回的数组元素可不止一个字符串，它是一个内容丰富的对象。

```powershell
PS C:Powershell> ls

    Directory: C:Powershell

Mode                LastWriteTime     Length Name
----                -------------     ------ ----
d----        2011/11/23     17:25            ABC
d----        2011/11/29     18:21            myscript
-a---        2011/11/24     18:30      67580 a.html
-a---        2011/11/24     20:04      26384 a.txt
-a---        2011/11/24     20:26      12060 alias
-a---        2011/11/24     20:27      12060 alias.ps1
-a---        2011/11/23     17:25          0 b.txt
-a---        2011/11/23     17:25          0 c.txt
-a---        2011/11/23     17:25          0 d.txt
-a---        2011/11/25     11:20        556 employee.xml
-a---        2011/11/29     19:23      21466 function.ps1
-a---        2011/11/28     11:12        186 LogoTestConfig.xml
-a---        2011/11/24     17:37       7420 name.html
-a---        2011/11/28     15:30         63 ping.bat
-a---        2011/11/24     17:44     735892 Powershell_Cmdlets.html
-a---        2011/11/30     16:04       2556 psdrive.html
-a---         2011/12/2     18:47        140 test.ps1
-a---        2011/11/23     17:37        242 test.txt
-a---        2011/11/28     16:42        170 test.vbs
PS C:Powershell> $result=ls
PS C:Powershell> $result.Count
20
```

数组的每一个元素存放的是一个System.IO.DirectoryInfo对象。
当我们输出这些对象时，Powershell会自动帮我们把它转换成友好的文本格式。

```powershell
PS C:Powershell> $result[0].gettype().fullname
System.IO.DirectoryInfo
PS C:Powershell> $result[0]
    Directory: C:Powershell
Mode                LastWriteTime     Length Name
----                -------------     ------ ----
d----        2011/11/23     17:25            ABC
```

对于任何一个对象都可以使用Format-List * 查看它所有的属性和方法。

```powershell
PS C:Powershell> $result[0] | fl *

PSPath            : Microsoft.PowerShell.CoreFileSystem::C:PowershellABC
PSParentPath      : Microsoft.PowerShell.CoreFileSystem::C:Powershell
PSChildName       : ABC
PSDrive           : C
PSProvider        : Microsoft.PowerShell.CoreFileSystem
PSIsContainer     : True
BaseName          : ABC
Mode              : d----
Name              : ABC
Parent            : Powershell
Exists            : True
Root              : C:
FullName          : C:PowershellABC
Extension         :
CreationTime      : 2011/11/23 17:25:53
CreationTimeUtc   : 2011/11/23 9:25:53
LastAccessTime    : 2011/11/23 17:25:53
LastAccessTimeUtc : 2011/11/23 9:25:53
LastWriteTime     : 2011/11/23 17:25:53
LastWriteTimeUtc  : 2011/11/23 9:25:53
Attributes        : Directory
```





### 02.PowerShell创建数组

在Powershell中创建数组可以使用逗号。

```powershell
PS C:Powershell> $nums=2,0,1,2
PS C:Powershell> $nums
2
0
1
2
```

对于连续的数字数组可以使用一个更快捷的方法

```powershell
PS C:Powershell> $nums=1..5
PS C:Powershell> $nums
1
2
3
4
5
```

#### 数组的多态

象变量一样如果数组中元素的类型为弱类型，默认可以存储不同类型的值。

```powershell
PS C:Powershell> $array=1,"2012世界末日",([System.Guid]::NewGuid()),(get-date)
PS C:Powershell> $array
1
2012世界末日

Guid
----
06a88783-a181-4511-9e41-2780ecbd7924

DisplayHint : DateTime
Date        : 2011/12/9 0:00:00
Day         : 9
DayOfWeek   : Friday
DayOfYear   : 343
Hour        : 14
Kind        : Local
Millisecond : 910
Minute      : 15
Month       : 12
Second      : 45
Ticks       : 634590369459101334
TimeOfDay   : 14:15:45.9101334
Year        : 2011
DateTime    : 2011年12月9日 14:15:45
```

#### 空数组和单元素数组

空数组

```powershell
PS C:Powershell> $a=@()
PS C:Powershell> $a -is [array]
True
PS C:Powershell> $a.Count
0
```

1个元素的数组

```powershell
PS C:Powershell> $a=,"moss"
PS C:Powershell> $a -is [array]
True
PS C:Powershell> $a.Count
1
```



### 04.访问数组

数组的元素可以使用索引寻址，第一个元素的索引为0，第i个元素的索引为i-1，最后一个元素的索引为Count-1，但是Powershell为了使用方便，直接可以将 -1 作为最后的一个元素的索引。

```powershell
PS C:Powershell> $books="元素1","元素2","元素3"
PS C:Powershell> $books[0]
元素1
PS C:Powershell> $books[1]
元素2
PS C:Powershell> $books[($book.Count-1)]
元素3
PS C:Powershell> $books[-1]
元素3
```

#### 从数组中选择多个元素

```powershell
PS C:Powershell> $result=ls
PS C:Powershell> $result[0,3,5,12]
    Directory: C:Powershell

Mode                LastWriteTime     Length Name
----                -------------     ------ ----
d----        2011/11/23     17:25            ABC
-a---        2011/11/24     20:04      26384 a.txt
-a---        2011/11/24     20:27      12060 alias.ps1
-a---        2011/11/24     17:37       7420 name.html
```

#### 将数组逆序输出

```powershell
PS C:Powershell> $books="元素1","元素2","元素3"
PS C:Powershell> $books[($books.Count)..0]
元素3
元素2
元素1
```

#### 给数组添加和删除元素

因为Powershell数组在内存中是顺序存储的，所以数组的大小必须是确定的，这样才方便分配存储空间，所以给数组增加元素其实相当于创建一个新的数组，只不过之后会把原来的副本删除。在当前数组追加元素可以使用“+=”操作符。

```powershell
PS C:Powershell> $books="元素1","元素2","元素3"
PS C:Powershell> $books+="元素4"
PS C:Powershell> $books
元素1
元素2
元素3
元素4
```

要删除第三个元素可是使用：

```powershell
PS C:Powershell> $num=1..4
PS C:Powershell> $num
1
2
3
4
PS C:Powershell> $num=$num[0..1]+$num[3]
PS C:Powershell> $num
1
2
4
# 上面说是删除，其实只是把要留下来的部分拼接
```



### 05.复制数组

数组属于引用类型，使用默认的的赋值运算符在两个变量之间赋值只是复制了一个引用，两个变量共享同一份数据。这样的模式有一个弊病如果其中一个改变也会株连到另外一个。所以复制数组最好使用Clone()方法，除非有特殊需求。

```powershell
PS C:Powershell> $chs=@("A","B","C")
PS C:Powershell> $chsBak=$chs
PS C:Powershell> $chsBak[1]="H"
PS C:Powershell> $chs
A
H
C
PS C:Powershell> $chs.Equals($chsBak)
True
PS C:Powershell> $chsNew=$chs.Clone()
PS C:Powershell> $chsNew[1]="Good"
PS C:Powershell> $chs.Equals($chsNew)
False
PS C:Powershell> $chs
A
H
C
```



### 06.PowerShell强类型数组

Powershell数组一般具有多态性，如果你不指定元素的具体类型，解释器会自动选择合适的类型存储每个元素。如果要统一限制所有元素的类型，可是使用类型名和一对方括号作为数组变量的类型。这样每当赋值时，会自动类型检查。如果目标数据类型不能转换成功，就会抛出一个异常。

```powershell
PS C:Powershell> [int[]] $nums=@()
PS C:Powershell> $nums+=2012
PS C:Powershell> $nums+=12.3
PS C:Powershell> $nums+="999"
PS C:Powershell> $nums+="can not convert"
Cannot convert value "can not convert" to type "System.Int32". Error: "Input string was not in a correct format."
At line:1 char:6
+ $nums <<<< +="can not convert"
    + CategoryInfo          : MetadataError: (:) [], ArgumentTransformationMetadataException
    + FullyQualifiedErrorId : RuntimeException
```





### 07.PowerShell使用哈希表

哈希表存放的是键值对，在哈希表中不再仅仅限制使用数字寻址，可以使用任意类型的数据类型寻址。
#### 创建哈希表
之前使用@()创建数组，现在使用`@{}`创建哈希表，使用哈希表的键访问对应的值。

```powershell
PS C:Powershell> $stu=@{ Name = "小明";Age="12";sex="男" }
PS C:Powershell> $stu

Name                           Value
----                           -----
Name                           小明
Age                            12
sex                            男

PS C:Powershell> $stu["Name"]
小明
PS C:Powershell> $stu["age"]
12
PS C:Powershell> $stu.Count
3
PS C:Powershell> $stu.Keys
Name
Age
sex
PS C:Powershell> $stu.Values
小明
12
男
```

#### 在哈希表中存储数组

可以在创建哈希表时就使用数组，因为创建数组和哈希表的的元素关键字不冲突。一个是逗号，一个是分号。

```powershell
PS C:Powershell>  $stu=@{ Name = "小明";Age="12";sex="男";Books="三国演义","围城","哈姆雷特" }
PS C:Powershell> $stu

Name                           Value
----                           -----
Books                          {三国演义, 围城, 哈姆雷特}
Name                           小明
Age                            12
sex                            男
```

#### 在哈希表中插入新的键值

在哈希表中插入新的键值很方便，象定义变量一样，可以直接拿来使用

```powershell
PS C:Powershell> $Student=@{}
PS C:Powershell> $Student.Name="令狐冲"
PS C:Powershell> $Student.School="华山派"
PS C:Powershell> $Student

Name                           Value
----                           -----
Name                           令狐冲
School                         华山派
```

#### 哈希表值的更新和删除

如果要更新键的值，可以直接重写。如果要删除这个键值对，可以使用Remove方法，参数为Key

```powershell
PS C:Powershell> $stu

Name                           Value
----                           -----
Books                          {三国演义, 围城, 哈姆雷特}
Name                           小明
Age                            12
sex                            男

PS C:Powershell> $stu.Name="赵强"
PS C:Powershell> $stu.Name
赵强
PS C:Powershell> $stu.Remove("Name")
PS C:Powershell> $stu

Name                           Value
----                           -----
Books                          {三国演义, 围城, 哈姆雷特}
Age                            12
sex                            男
```

#### 使用哈希表格式化输出

在Powershell中哈希表的一个有趣的应用可以用来格式化文本输出。Powershell许多命令的输出结果都是以表格的形式，当然可以使用Format-Table自定义表格格式，例如：

```powershell
PS C:Powershell> Dir | Format-Table

    Directory: C:Powershell

Mode                LastWriteTime     Length Name
----                -------------     ------ ----
d----        2011/11/23     17:25            ABC
d----        2011/11/29     18:21            myscript

PS C:Powershell> Dir | Format-Table FullName,Mode

FullName                                                    Mode
--------                                                    ----
C:PowershellABC                                           d----
C:Powershellmyscript                                      d----
C:Powershella.html                                        -a---
```

上述的命令只能限制表格输出那些列，隐藏那些列。但是对于列的宽度，列标题无能为力，但是有了哈希表就可以实现更多自定义了。
表格的每一个列包含四个属性：
**Expression**:绑定的表达式
**Width**:列宽度
**Label:**列标题
**Alignment:**列的对齐方式

```powershell
PS C:Powershell> $column1 = @{expression="Name"; width=30;label="filename"; alignment="left"}
PS C:Powershell> $column2 = @{expression="LastWriteTime"; width=40;label="last modification"; alignment="right"}
PS C:Powershell> ls | Format-Table $column1, $column2

filename                                              last modification
--------                                              -----------------
ABC                                                 2011/11/23 17:25:53
myscript                                            2011/11/29 18:21:28
a.html                                              2011/11/24 18:30:13
```







## 4.PowerShell管道

### 01.PowerShell使用管道

管道并不是什么新事物，以前的Cmd控制台也有重定向的命令，例如Dir | More可以将结果分屏显示。
传统的Cmd管道是基于文本的，但是Powershell是基于对象。

```powershell
PS> ls | Sort-Object -Descending Name | Select-Object Name,Length,LastWriteTime | ConvertTo-Html | Out-File ls.html

PS> Get-Content .ls.html
```

| Name                    | Length | LastWriteTime       |
| ----------------------- | ------ | ------------------- |
| test.vbs                | 170    | 2011/11/28 16:42:03 |
| test.txt                | 242    | 2011/11/23 17:37:37 |
| test.ps1                | 140    | 2011/12/2 18:47:35  |
| psdrive.html            | 2556   | 2011/11/30 16:04:00 |
| Powershell_Cmdlets.html | 735892 | 2011/11/24 17:44:37 |
| ping.bat                | 63     | 2011/11/28 15:30:04 |
| name.html               | 7420   | 2011/11/24 17:37:28 |
| myscript                |        | 2011/11/29 18:21:28 |
| ls.html                 | 434    | 2011/12/14 11:22:30 |
| LogoTestConfig.xml      | 186    | 2011/11/28 11:12:08 |
| function.ps1            | 21466  | 2011/11/29 19:23:58 |
| employee.xml            | 556    | 2011/11/25 11:20:33 |
| d.txt                   | 0      | 2011/11/23 17:25:23 |
| c.txt                   | 0      | 2011/11/23 17:25:23 |
| b.txt                   | 0      | 2011/11/23 17:25:23 |
| alias.ps1               | 12060  | 2011/11/24 20:27:24 |
| alias                   | 12060  | 2011/11/24 20:26:36 |
| ABC                     |        | 2011/11/23 17:25:53 |
| a.txt                   | 26384  | 2011/11/24 20:04:31 |
| a.html                  | 67580  | 2011/11/24 18:30:13 |

首先列出当前目录下的目录和文件，然后根据文件名降序排列，再投影文件名，文件大小，文件的修改时间，转换成Html格式，输出到当前目录的ls.html

#### 面向对象的管道

上面的例子属于面向对象的管道，每个命令的末尾可以使用新的命令对上个命令的结果做进一步处理，除非管道是以输出命令结束的。就像Sort-Object一样，对文件的列表进行排序，需要告诉它排序的关键字，按照升序还是降序。ls的返回值为一个数组，数组中的每一个元素都是一个对象，对象的每一个属性都可以作为Sort-Object的排序关键字。但是排序时必须指定一个具体的关键字，因为Powershell所传递的对象可能有很多属性。不像普通的文本，对象的信息都是结构化的，因此也使得Powershell的管道变得更加强大和方便。

#### 转换命令执行的结果为文本

在执行Powershell命令时，解释器会默认在命令的结尾追加一个管道命令，Out-Default，这样可以将原来的对象结果以文本的形式显示在控制台上，但是并没有将结果进行转换，所以可以继续使用其它管道对对象的结果进行操作，但是一旦使用了诸如ConvertTo-Html这样的命令后，就会将结果转换成固定格式的纯文本。

常用的对管道结果进一步处理的命令有：

**Compare-Object**: 比较两组对象。
**ConvertTo-Html**: 将 Microsoft .NET Framework 对象转换为可在 Web 浏览器中显示的 HTML。
**Export-Clixml**: 创建对象的基于 XML 的表示形式并将其存储在文件中。
**Export-Csv**: 将 Microsoft .NET Framework 对象转换为一系列以逗号分隔的、长度可变的 (CSV) 字符串，并将这些字符串保存到
一个 CSV 文件中。
**ForEach-Object**: 针对每一组输入对象执行操作。
**Format-List**: 将输出的格式设置为属性列表，其中每个属性均各占一行显示。
**Format-Table**: 将输出的格式设置为表。
**Format-Wide**: 将对象的格式设置为只能显示每个对象的一个属性的宽表。
**Get-Unique**: 从排序列表返回唯一项目。
**Group-Object**: 指定的属性包含相同值的组对象。
**Import-Clixml**: 导入 CLIXML 文件，并在 Windows PowerShell 中创建相应的对象。
**Measure-Object**: 计算对象的数字属性以及字符串对象（如文本文件）中的字符数、单词数和行数。
**more**: 对结果分屏显示。
**Out-File**: 将输出发送到文件。
**Out-Null**: 删除输出，不将其发送到控制台。
**Out-Printer**: 将输出发送到打印机。
**Out-String**: 将对象作为一列字符串发送到主机。
**Select-Object:** 选择一个对象或一组对象的指定属性。它还可以从对象的数组中选择唯一对象，也可以从对象数组的开头或末尾选
择指定个数的对象。
**Sort-Object**: 按属性值对象进行排序。
**Tee-Object**: 将命令输出保存在文件或变量中，并将其显示在控制台中。
**Where-Object**: 创建控制哪些对象沿着命令管道传递的筛选器。

#### 管道的处理模式

当我们把许多命名组合成一个管道时，可能会感兴趣每一个命令的执行时是顺序执行还是同时执行？通过管道处理结果实际上是实时的。这就是为什么存在两个管道模式：
**顺序模式（较慢）：**在顺序模式中管道中同一时间只执行一条命令，只有当前一条命令的所有执行完毕，才会把所有结果交付给下一条 命令。这种模式速度慢并且耗内存，因为必须需要很多次分配空间存储中间结果。
**流模式（较快）：**流模式会立即执行所有命令，同一时间可能在执行多条命令。前一条命令可能会产生多个结果，但是一旦产生其中一个结果，就会立即交付给下一条命令处理。这样的流模式节省比较节省内存，可能管道的某个任务还在执行，但是已经有部分结果输出了。减少了中间结果的保存。

#### 管道命令的阻塞

可以使用Sort-Object对管道的结果进行排序，但是有时候排序可能导致整个操作系统阻塞，因为排序命令的的执行属于顺序模式，必须得上一条命令的结果全部完成，才能排序。
因此在使用这类命令时，要注意操作对象的大小，和它们需要的内存。例如这条命令：
Dir C: -recurse | Sort-Object
-recurse 选项是递归查询子目录，可想而知系统盘的文件和目录有多大。这条命令一旦运行起来，需要等很长很长的时间，甚至可能导致系统崩溃，得重启电脑。你可以在执行这条命令时，打开任务管理器查看Powershell进程的内存占用在以每秒种几十兆的速率增加。
到底哪些命令可能系统阻塞，要视命令的实现方式以及处理的对象大小决定，例如Sort-object导致阻塞的原因肯定是由于技术实现上采用的是内排序，没有使用外排序。但是象Out-Host -paging 这样的命令属于流出来模式，就一般不会导致系统阻塞。





## 05.powershell的错误和异常处理

powershell 判断上一个程序是否运行成功，powershell中所有异常处理的方法(lastexitcode  try catch  trap异常处理)

### 01.$LASTEXITCODE和$?

类似于linux的shell脚本，powershell也可以用记录程序退出码的方式判断命令是否执行成功

其中

1. **$?**表示最后一个操作的执行状态。如果最后一个操作成功，则包含 TRUE，失败则包含 FALSE。

2. $LASTEXITCODE则是返回上一次执行的退出码，因为linux程序通常用退出码0表示执行成功，所以我们判断$LASTEXITCODE是否为0就能判断上次程序执行是否成功。

总的来说$LASTEXITCODE，逻辑上还要多绕一圈，所以平时方便起见用**$?**就是了。



### 02.trap

trap关键词可以指定让程序终结的错误发生时，执行一系列语句。

* trap的默认行为是在执行完statement block里的语句 后显示错误，然后会继续执行脚本或者函数
* 在trap中使用break可以实现显示错误，然后退出执行
* 如果想要不显示错误继续执行，可以用continue



#### 语法

```powershell
trap [[<error type>]] {<statement list>}
```

statement list就是终结错误发生时，会执行的语句。

错误类型定义了trap的处理范围

#### trap处理所有终结错误

没有类型定义的trap会在所有错误发生的时候执行。

当一个让程序终结的错误没有找到其他处理的脚本或命令，就会执行trap里面的语句，

下面是一个例子

```powershell
trap {"Error found."}
```

```powershell
function TrapTest {
    trap {"Error found."}
    nonsenseString
}

TrapTest
```

会出现下面的错误

```powershell
Error found.
nonsenseString:
Line |
   3 |      nonsenseString
     |      ~~~~~~~~~~~~~~
     | The term 'nonsenseString' is not recognized as the name of a cmdlet,
function, script file, or operable program. Check the spelling of the name, or
if a path was included, verify that the path is correct and try again.
```

trap 中使用`$_ `,也就是powershell自动生成的当前对象，就会被替换成输出的错误

```powershell
function TrapTest {
    trap {"Error found: $_"}
    nonsenseString
}

TrapTest


Error found: The term 'nonsenseString' is not recognized as the name of a
cmdlet, function, script file, or operable program. Check the spelling of the
name, or if a path was included, verify that the path is correct and try again.
nonsenseString:
Line |
   3 |      nonsenseString
     |      ~~~~~~~~~~~~~~
     | The term 'nonsenseString' is not recognized as the name of a cmdlet,
function, script file, or operable program. Check the spelling of the name, or
if a path was included, verify that the path is correct and try again.
```



**注意: trap可以在一个作用域代码块（scope）的任何地方定义，即使定义在一个代码块的底部，也会捕获整个代码块的错误**

#### trap处理特定的错误

下面是只处理没有找到命令的错误的trap，trap的使用的是.net的异常类型

```powershell
trap [System.Management.Automation.CommandNotFoundException]
    {"Command error trapped"}
```

下面是系统异常类型，System.Management.Automation.CommandNotFoundException是继承自System.Exception的

```powershell
trap [System.Exception] {"An error trapped"}
```

当多个trap同时存在的时候powershell会匹配最精确特定的trap，如下

```powershell
trap {"Other terminating error trapped" }
trap [System.Management.Automation.CommandNotFoundException] {
  "Command error trapped"
}
nonsenseString

Command error trapped
nonsenseString:
Line |
   5 |  nonsenseString
     |  ~~~~~~~~~~~~~~
     | The term 'nonsenseString' is not recognized as the name of a cmdlet,
function, script file, or operable program. Check the spelling of the name, or
if a path was included, verify that the path is correct and try again.

```

#### trap捕获错误的作用域

trap捕获错误以后，会执行trap内部的语句，但是错误处后续的代码还会继续执行

下面是在函数内部发生了错误的情况，错误被内部的trap捕获，并且函数的返回语句被正常执行

```powershell
function function1 {
    trap { "An error: " }
    NonsenseString
    "function1 was completed"
}

function1

An error:
NonsenseString:
Line |
   3 |      NonsenseString
     |      ~~~~~~~~~~~~~~
     | The term 'NonsenseString' is not recognized as the name of a cmdlet,
function, script file, or operable program. Check the spelling of the name, or
if a path was included, verify that the path is correct and try again.
function1 was completed

```

下面的例子trap语句被放到函数外面，能够捕获到函数内部的错误，但是函数的返回语句没有被执行

```powershell
function function2 {
    NonsenseString
    "function2 was completed"
}

trap { "An error: " }

function2

An error:
NonsenseString:
Line |
   2 |      NonsenseString
     |      ~~~~~~~~~~~~~~
     | The term 'NonsenseString' is not recognized as the name of a cmdlet,
function, script file, or operable program. Check the spelling of the name, or
if a path was included, verify that the path is correct and try again.
```

也就是说，trap如果在函数的外部，就可以实现捕获到错误就停止函数运行的功能。

**注意:多个trap定义相同类型的错误条件的时候，只有最高处定义的trap会被使用**

```powershell
Remove-Item -ErrorAction Stop ThisFileDoesNotExist
trap { "whoops 1"; continue }
trap { "whoops 2"; continue }
```

**注意：trap语句的定义域取决于它编译的位置，如果它在一个函数或者脚本中，那么当函数或脚本退出时，他们内部的trap语句就会被删除**

看下面的例子，函数外的错误没有被函数内的trap捕获

```powershell
function function1 {
    trap { "An error: " }
    
    "function1 was completed"
}
NonsenseString

function1 was completed
NonsenseString: C:\Projects\base\test\testexit.ps1:6:1
Line |
   6 |  NonsenseString
     |  ~~~~~~~~~~~~~~
     | The term 'NonsenseString' is not recognized as a name of a cmdlet, function,
     | script file, or executable program. Check the spelling of the name, or if a
     | path was included, verify that the path is correct and try again.
```



#### 使用break和continue关键字

在trap中使用break和continue可以决定终结错误发生时，继续运行还是停止

默认没有break关键字的情况下是会继续运行的，也会输出错误

```powershell
function break_example {
    trap {
        "Error trapped"
        break
    }
    1/$null
    "Function completed."
}

break_example

Error trapped
ParentContainsErrorRecordException:
Line |
   6 |      1/$null
     |      ~~~~~~~
     | Attempted to divide by zero.

```

使用continue语句，powershell将从错误中恢复，并且不会输出错误流

```powershell
function continue_example {
    trap {
        "Error trapped"
        continue
    }
    1/$null
    "Function completed."
}

continue_example

Error trapped
Function completed.
```



综上，trap是一种比较简单的广范围的错误处理方式，对于更细粒度的错误处理，建议使用try catch语句

### 03.try catch finally

try 捕获的错误，会被自动保存到$Error变量里面，powershell会寻找catch语句来处理错误。

这个语法就和c#的异常处理比较像

#### 语法

```powershell
try {<statement list>}`
catch [[<error type>][',' <error type>]*] {<statement list>}
finally {<statement list>}
```



#### 捕获错误

```powershell
try { NonsenseString }
catch { "An error occurred." }

An error occurred.
```

#### 使用多个catch语句

```powershell
try {
   $wc = new-object System.Net.WebClient
   $wc.DownloadFile("http://www.contoso.com/MyDoc.doc","c:\temp\MyDoc.doc")
}
catch [System.Net.WebException],[System.IO.IOException] {
    "Unable to download MyDoc.doc from http://www.contoso.com."
}
catch {
    "An error occurred that could not be resolved."
}
```

#### 在try catch语句中使用trap

当try语句中包含trap，即使声明了catch语句，也会执行trap，如果trap的位置比try更高，并且没有catch语句，trap也会获得控制，即使父级作用域中包含匹配的catch语句。

#### 访问错误信息 ACCESSING EXCEPTION INFORMATION

catch语句中的$_就包含了错误信息

```powershell
try { NonsenseString }
catch {
  Write-Host "An error occurred:"
  Write-Host $_
}

An Error occurred:
The term 'NonsenseString' is not recognized as the name of a cmdlet, function,
script file, or operable program. Check the spelling of the name, or if a path
was included, verify that the path is correct and try again.
```

你还可以用$_打印堆栈信息

```powershell
try { NonsenseString }
catch {
  Write-Host "An error occurred:"
  Write-Host $_.ScriptStackTrace
}

An Error occurred:
at <ScriptBlock>, <No file>: line 2
```

#### 使用FINALLY来释放资源

不管try块是否遇到错误，finally语句都会执行。即使catch中使用exit退出脚本，或者使用ctrl+c中止脚本都会执行。
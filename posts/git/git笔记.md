---
author: 'mudssky'
category: 'git'
lastUpdated: 1615964092
tags: ['git']
createdAt: 1615964092
title: 'git笔记'
---

# Git笔记

## 01.Git的历史

2005年4月3日开始开发，linus花了3天就发布了

2005年4月7日，git已经能作为自身的版本控制工具了

2005年4月18日，发生第一个多分支合并

2005年4月29日，git的性能已经达到linus的预期

2005年6月16日，linux核心2.6.12发布，那是git已经在维护linux核心的源代码了。

linus决定开发git的起因是当时的版本控制工具bitkeeper开始收回授权。

## 02.基本使用

### 创建git仓库

在目录下执行`git init`,就会创建一个`.git`目录，这就是你的git仓库

#### 新建裸仓库

裸库就是没有工作区，只有.git目录里的文件。

`git init --bare`

### 提交流程

1. **工作区**,就是在你项目目录的文件
2. 执行 `git add .` 工作区的文件，就会进入**暂存区**（staged）
3. 暂存区的文件执行`git commit ` （执行会会进入vim，编辑好评论后提交）提交之后会进入**版本仓库**，使用`-m`参数可以添加评论





### 查看工作区状态

`git status` 可以查看当前所在的分支，哪些改变没有commit，哪些文件没有add到暂存区之类的信息

`git status -u`后面可以跟三种参数

* no   只显示已经跟踪的文件
* normal  显示没有被跟踪的文件和文件夹
* all 为跟踪的文件夹内的文件

### 查看提交记录

`git log`可以查看提交记录

`git log -n `显示前n条数据

`git log --stat` 显示修改的行数

`git log --since=2.days` 显示近两天的改动

`git log  --since=2021-04-28`  显示从指定日期开始的记录

`git log --until=2021-04-28` 显示指定日期之前的数据

`git log --author=hello` 查看特定用户提交记录

`git log --grep=init` 查看包含init的提交

`git log --pretty=oneline`  单行显示

`git log --pretty=format:"%h-%an,%ar:%s" ` 指定log的显示格式

具体占位符的列表如下

```
%H
commit hash

%h
abbreviated commit hash

%T
tree hash

%t
abbreviated tree hash

%P
parent hashes

%p
abbreviated parent hashes

%an
author name

%aN
author name (respecting .mailmap, see git-shortlog[1] or git-blame[1])

%ae
author email

%aE
author email (respecting .mailmap, see git-shortlog[1] or git-blame[1])

%al
author email local-part (the part before the @ sign)

%aL
author local-part (see %al) respecting .mailmap, see git-shortlog[1] or git-blame[1])

%ad
author date (format respects --date= option)

%aD
author date, RFC2822 style

%ar
author date, relative

%at
author date, UNIX timestamp

%ai
author date, ISO 8601-like format

%aI
author date, strict ISO 8601 format

%as
author date, short format (YYYY-MM-DD)

%cn
committer name

%cN
committer name (respecting .mailmap, see git-shortlog[1] or git-blame[1])

%ce
committer email

%cE
committer email (respecting .mailmap, see git-shortlog[1] or git-blame[1])

%cl
committer email local-part (the part before the @ sign)

%cL
committer local-part (see %cl) respecting .mailmap, see git-shortlog[1] or git-blame[1])

%cd
committer date (format respects --date= option)

%cD
committer date, RFC2822 style

%cr
committer date, relative

%ct
committer date, UNIX timestamp

%ci
committer date, ISO 8601-like format

%cI
committer date, strict ISO 8601 format

%cs
committer date, short format (YYYY-MM-DD)

%d
ref names, like the --decorate option of git-log[1]

%D
ref names without the " (", ")" wrapping.

%S
ref name given on the command line by which the commit was reached (like git log --source), only works with git log

%e
encoding

%s
subject

%f
sanitized subject line, suitable for a filename

%b
body

%B
raw body (unwrapped subject and body)

%N
commit notes

%GG
raw verification message from GPG for a signed commit

%G?
show "G" for a good (valid) signature, "B" for a bad signature, "U" for a good signature with unknown validity, "X" for a good signature that has expired, "Y" for a good signature made by an expired key, "R" for a good signature made by a revoked key, "E" if the signature cannot be checked (e.g. missing key) and "N" for no signature

%GS
show the name of the signer for a signed commit

%GK
show the key used to sign a signed commit

%GF
show the fingerprint of the key used to sign a signed commit

%GP
show the fingerprint of the primary key whose subkey was used to sign a signed commit

%GT
show the trust level for the key used to sign a signed commit

%gD
reflog selector, e.g., refs/stash@{1} or refs/stash@{2 minutes ago}; the format follows the rules described for the -g option. The portion before the @ is the refname as given on the command line (so git log -g refs/heads/master would yield refs/heads/master@{0}).

%gd
shortened reflog selector; same as %gD, but the refname portion is shortened for human readability (so refs/heads/master becomes just master).

%gn
reflog identity name

%gN
reflog identity name (respecting .mailmap, see git-shortlog[1] or git-blame[1])

%ge
reflog identity email

%gE
reflog identity email (respecting .mailmap, see git-shortlog[1] or git-blame[1])

%gs
reflog subject
```



`git show commit-id` 查看某条commit记录的具体改动内容

#### 在历史修改中查找

`git log -G` 在历史修改行中查找 （在每个历史patch中找）

`git log -S` 

### 工作区操作

#### 查找

`git grep -n content`  在工作区查找，不会查找未跟踪（untrack）文件



### 暂存区操作

#### 添加文件到暂存区

`git add .`添加当前目录下的内容到暂存区

`git add -u` 只添加已经被跟踪的文件

`git add -i` 交互式添加

#### 从暂存区删除

```powershell
git rm --cathed <filepath>
```

#### commit提交到本地仓库

`git commit`

`git commit -a`  将add 和commit 结合为一步，但是没有被跟踪的文件不会提交。

`git commit -m msg`



### 删除和移动

`git rm`

`git mv`

### 撤销提交操作

#### git reset 回退不留记录

git reset是通过把分支回退几个提交记录来实现撤销改动，相当于改变历史，这样，原来的提交记录就和从来没有提交过一样

在本地使用比较方便（通常用于撤销本地的提交），但是**对远程分支是无效的**

git reset后面跟的是是节点，分支，也可以运用相对引用操作符

如`git reset head^ `,`git reset main~3`,

#### git revert 撤销产生记录

git revert会产生一次撤销的提交，内容就是撤销某一次的更改，这个撤销操作时可以推送到远程仓库和别人共享的

撤销某次提交的内容，同时会产生一个新的提交记录，通常用于撤销一次提交。比如c1——c2，此时revertc2，会创建一个新的提交记录C2new，c1——c2——C2new,这次提交实际操作是c2的内容。

`git revert <commit-ish>`





### 配置基本信息

`git config` 分为global 和local（当前目录）两个配置，后者如果配置了优先级更高

`git config --get user.name` 默认从local取的优先级高于global



## 03.分支相关命令

**分支的使用举例**

* 为每个feature申请一个分支
* 为每个版本建立一个分支
* 为每一个开发者建立分支

#### 查看分支

`git branch`

`git branch -avv` 显示所有分支（a）的详细信息(vv)

#### 新建分支

`git branch <branchname> ` 新建分支

也可以指定新建分支的节点`git branch <branchname> <commit id> `   

#### 切换分支或commit节点

我们建立分支后，当前分支还是原来的分支，此时commit会提交到原来的分支上，我们切换到当前的分支上才能提交到当前的分支

`git checkout <branchname> `切换到分支

`git checkout -b branchname` 创建并切换分支

#### 删除分支

`git branch -D branchname` 删除分支，不能删除当前分支

#### 推送分支到远程仓库

`git push origin HEAD:branchname`  推送到远程仓库如果远程仓库没有分支会新建远端分支

#### 删除远程仓库分支

`git push origin :brancename` 

#### 强制移动分支位置

会把当前分支指向另一个节点

`git branch -f branchname   position`

position可以用相对节点或者commithash,或者分支名字

## 04.合并分支的方法

有两种合并分支的方法 `git merge`和 `git rebase`

他们最主要的区别是rebase可以创造更线性的提交历史，就像你是按顺序提交的一样，他不会在你合并分支时再创建一条提交记录，git rebase的实际操作是取出一系列提交记录，在另一个地方按顺序放下去。

`git merge`,就能看到分支了，你新建的分支的记录会得到保留，merge是在两个父节点基础上创建一个新的commit

#### git rebase  变基操作

它就相当于把当前分支从分支的地方开始连根拔起接到另一个分支上或者说提交节点上，整体分支接到了主分支上的话，提交记录就会变得更线性。

如果你在新建的分支上执行`git rebase main`，就会把新分支接到main节点上，但是此时main分支存在于当前分支的后面，我们需要把main的进度也提到当前分支的最前面，在同一条分支上切换到main执行 `git rebase  节点 `,带来的效果只是引用前移，因为之前rebase的分支是继承main的， main节点就会移动你rebase的节点上

`git rebase <branchname|commitid>` 把当前分支的跟节点移动到指定分支之后，如果当前分支和移动的分支是继承关系，效果就变成引用移动。

#### git merge 合并分支

git merge是基本的合并分支的操作，会把两个分支指定的节点作为父节点，生成一个合并的提交记录，并把当前的指针移到这个新提交的节点。

比如你在一个新创建的bugFix分支上提交了一些东西，想要merge到主分支上

`git merge main`,此时你当前的指针的引用时bugFix，而如果切换到main上执行 `git merge bugFix`,此时前移的引用时是main，也就是他会把你当前分支的指针前移。



## 05.HEAD和相对引用相关操作（在提交树上移动）

### 分离HEAD

head是你当前检出记录的符号引用，他指向你正在其基础上进行工作的提交记录。通常是指向当前分支上最新的提交记录。

`git checkout`实际上就是在移动head指针

**所谓分离HEAD是让HEAD指针指向具体的提交记录，而不是分支名,HEAD分离状态是进行提交，原来的分支名不会跟着提交移动**

### 相对引用（移动HEAD）

`git checkout commitid`  不是一种直觉化的操作，因为你要先查看log里的hash值再切换，虽然输出的时候只要开头前几个字母能区分开就能识别出来了。实际上我们通常是用相对引用的方法来再提交记录之间移动，

你可以从一个方便记忆的节点或者分支开始计算。比如你新建的bugFIx分支，比如你原来就有的main分支

* 使用`^` 向上移动一个提交记录
* 使用`~<num>`下个上移动多个提交记录，如`~3`

举个例子，移到main的父节点：

`git chekout main^`

你也可以用HEAD或者其他分支作为参照，并且`^`是可以叠加的，一个`^`符号向上移动一次

叠加`^`比较麻烦，如果需要后退多步我们就会用`~<num>`

这两个操作符都是支持链式操作的。。。。

比如`git checkout HEAD~4`

`^`还有一个用途就是后面也跟数字，指定两分支处的移动方向，比如`^1`和`^2`,git默认选择的是合并提交的第一个（更早的）父提交，`^2`可以改变这一行为

### 移动分支

移动分支到特定提交节点，也可以用相对位置的计算符

`git branch -f <branchname>  <branchname|commitid>`

## 06.自由修改提交树

### git cherry-pick

命令形式为`git cherry-pick <commit ish>`，后面可以跟多个节点，复制的时候时按照顺序的，执行这个操作，原来分支的节点也会前移

这个操作相当于把一些节点复制过来放到当前节点上，还是比较灵活简单的。

### 交互式rebase

当知道提交记录的分支名或者哈希值的时候，用cherry比较方便，但是如果我们不清楚提交记录的哈希值，可以用交互式rebase

交互式rebase使用带参数`--interactive`简写`-i`，执行这个操作的时候，原来分支的节点（比如默认的main）不会前移，需要我们再移动分支

执行这个命令会打开一个交互式的ui界面，显示每个提交记录的哈希和提交说明，在这个界面里面，你主要能够做三件事

* 调整提交记录的顺序
* 删除你不想要的提交
* 合并提交

举个例子，下面这条命令你可以对当前分支的四个节点进行操作。

`git rebase -i HEAD~4`

## 07.标签 Tags

### git tags

分支很容易被人为移动，并且当新的提交发生时，分支也会移动。

我们需要一个永远指向某个提交记录的表示，这就是tag，可以用于指向软件发布更新的大版本，修正一些重要bug或者是增加某些新特性。（tag也可以被删除之后重新创建同名的，）

tag创建以后就可以像分支一样使用了(可以checkout到指定的分支，也可以在cherry-pick和rebase之类的地方被使用)

`git tag v1 main`

### git describe

用于描述距离你当前节点最近的标签

语法是`git describe <ref>`,`<ref>` 是任何可以被git识别成提交记录的引用，如果你不指定的话，默认是当前的位置也就是HEAD

它的输出结果是这样的`<tag>_<numCommits>_g<hash>`

tag是标签名，numComiits是标签和当前的ref距离多少个提交记录，hash表示给定ref哈希值的前几位。

当ref上含有某个标签的时候，只输出标签名称

## 08.远程仓库操作

### 添加远程仓库

```powershell
git remote add origin <repo_url>
```

### 查看当前的远程仓库

```powershell
git remote -v
```

### 克隆远程仓库

```powershell
git clone <repo_url>
```

需要设置公钥和私钥才能克隆，不过用github官方的命令行就可以用登录的方式了，不设置密钥也能下载。

克隆会产生一个 origin/master分支 表示远程分支，远程分支默认和HEAD是分离的。

### 向远程仓库获取数据 git fetch

git fetch 会做两件事：

* 从远程仓库下载本地仓库中缺失的提交记录
* 更新远程分支的指针(origin/master)

实际上将本地仓库的远程分支，更新成了远程仓库相应分支最新的状态

git fetch不会改变你本地仓库的状态，只是单纯的下载操作。执行以后你本地所在的分支不会发生变化，也不会修改你本地的文件。

git fetch支持和push一样的place参数

`git fetch <remote> <place>`

举个例子，`git fetch origin main`

此时远程仓库跟踪的是 本地origin/main仓库，而不是main仓库，因为git fetch不会改动本地仓库

当执行这条更详细的 `git fetch origin <source>:<destination>`，这时就会覆盖本地仓库了，这条命令里面sourc指的是远程仓库的目标，destination指的是本地的目标。这个命令实际开发倒是很少使用。

同样，如果执行命令时目标分支不存在会在本地创建一个。

`git fetch origin :<destination>` 会在本地创建一个新分支

### 从远程仓库获取数据并且合并 git pull

执行git fetch以后，我们可以有很多方法，合并本地的提交，比如cherry-pick rebase  merge等

其中git pull就是git fetch和git merge结合的操作。

`git pull --rebase`是 fetch和rebase操作合并的写法。

`git pull origin foo`等价于 `git fetch origin foo; git merge o/foo`

`git pull origin bar~1:bugFix` 相当于：`git fetch origin bar~1:bugFix; git merge bugFix`

### 推送到远程仓库 git push

git push不带参数时的行为取决于push.default的配置。git push会将你的变更上传到指定的远程仓库，并在远程仓库上合并你的提交记录。

其中HEAD是本地的位置，master是远程仓库的分支。

第一次提交需要使用`git config`设置用户名和邮箱。

```powershell
git push origin HEAD:master
```

git push的语法是`git push <remote> <place>`

举个例子`git push origin main`

找到本地仓库的main分支，获取所有提交，再到远程仓库origin中找到main分支，将远程仓库中没有的提交记录都添加上去。。。

place参数告诉git提交记录来自于main，要推送到远程仓库中的main。

因为已经提供了所有推送的信息，所以我们HEAD不在main节点上也能实现这个提交

**如果git push不带参数，默认是推送当前的节点到 远程的main，此时如果当前HEAD节点不在main上就会推送失败**



当place来源和去向不同的时候

`git push origin <source>:<destination>`

默认情况等价于这条命令`git push origin HEAD:master`

当你推送的分支在远程仓库不存在的时候，远程仓库会帮你创建这个分支

`git push origin :<destination>` 不指定source，则会**删除远程的分支**





### 远程跟踪分支

git clone的时候会建立一个远程分支origin/main，它默认和HEAD分离，所以你后续的提交不会改变他。利用这个远程分支和远程仓库中的main进行同步

这个属性也可以自行指定`git checkout -b totallyNotMain o/main`，这样我们就可以推送totallyNotMain 到远程分支的main上

第二种设置远程追踪分支的方法是`git branch -u`命令

举个例子`git branch -u origin/main foo`,这样foo就会跟踪 origin/main了。如果当前就在foo分支上，这个命令可以省略foo变成`git branch -u origin/main `



## 05.特殊操作

### 彻底删除文件

#### 01.

将下面命令中的`PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA`替换成你要删除文件的路径，如果没有空格，不加单引号也可以

下面命令的功能是：

- 强制 Git 处理但不检出每个分支和标记的完整历史记录
- 删除指定的文件，以及因此生成的任何空提交
- **覆盖现有的标记**

```powershell
git filter-branch --force --index-filter  "git rm --cached --ignore-unmatch  'PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA'"  --prune-empty --tag-name-filter cat -- --all
```

#### 02.覆盖github远程仓库

```shell
git push origin --force --all
```



#### git blame

查看文件每一行的提交信息，提交人和提交时间等

#### git reflog

显示所有操作记录，大部分记录能保留3个月。不可达的点默认只能保留30天。



下面是清理git仓库两步走，

`git reflog expire --expire-unreachable=now --all` 强制过期那些不可达的记录

`git gc --prnune=now -aggressive` 垃圾回收会清除过期的记录
---
author: 'mudssky'
category: '二维码'
lastUpdated: 1631258683
tags: ['二维码']
createdAt: 1631258683
title: '二维码(QR code)的解码原理'
---
# 二维码(QR code)的解码原理



目前我们最普遍被使用的二维码由日本汽车公司 Denso Wave 的原昌宏于 1994 年发明. 这种二维码被命名为 Quick Response code 缩写为qr code.



因为只是大致了解原理,因此还不涉及到手算二维码,毕竟第一步去掩码就要进行大量的异或运算,对于人来说还是挺难手算的.

更为具体的内容你可以查看 iso 18004文件



## 二维码的构造

三个显眼的大正方形叫**寻象图形**。事实上，一些二维码可能还暗藏小正方形（最小尺寸的二维码没有），叫**校正图形**。此外，连接两个相邻的寻象图形的内侧边缘处正好有黑白相间的线条，叫**定位图形**。最后，三个寻象图形的旁边会有一些格式信息（左上寻象图形的两侧、右上寻象图形的下侧、左下寻象图形的右侧各一排）：

![img](assets/二维码的解码-e23f649196ad4f2a0fac455af20107b7.jpg)

剩下的浅绿色区域适用于存放数据和纠错码的.

值得一提的是，尺寸再大一点的二维码，即校正图形有 6 个及以上时，在右上寻象图形左侧三排、左下寻象图形上侧三排，还会有**版本信息**这东西，在破译时也要避开这些位置：

![preview](assets/二维码的解码-d00fb0cf6dad3baab03704d22896eac0.jpg)



## 二维码的信息量和版本

QR码有version1-40共40种版本,版本号越大能容纳的数据量也越大,

版本1到40,横纵向都是以4为单位的递增

最小的版本version1 大小是 21x21

最大的版本version40 大小是177x177

最大的二维码,用最小的纠错码,可以存储的数字个数是7089,可以存储的汉字是1819个

所以正常二维码,往往存一篇文章都不够用,也就存一些简单的配置信息或者网址

如果用来存二进制文件,只能存约3kb大小,所以说用来存储图片或者说音频之类的也是不现实的.

用二维码传文件也不现实,3kb实在太小了,一篇文章都不够,也许结合其他压缩算法,比如说zip,能增加存储的内容...

![image-20210909174051358](assets/二维码的解码-66b6df6ef9b4438da2c215e6e8de3a9d.png)

中间略

![image-20210909174113217](assets/二维码的解码-c024c5ffd4c988399e3758f90abd3d86.png)

## 二维码解码的流程

![img](assets/二维码的解码-19b960985cf0b845e8f586db88ef0ae6.png)

### 0.寻像图形

三个角的 **寻像图形** 三个方块 是特殊的设计,一方面区别于常见的其他图案,防止误读, 另外三个寻像图形的方块正好可以确定二维码的矩形边界和起始位置(剩下一个角)

这3个图形占据格数长宽大小是固定的.

### 1.格式信息(Format Information)

格式信息在第一个角,寻像方块的两条边上,共15比特,

![image-20210910142907332](assets/二维码的解码-80b313270556f36038e8d57efe27413e.png)

另外两个寻像方块的右边和下边则是则是重复的信息,作为一个备份.

这15个bits中包括：
•   5个数据bits：其中，2个bits用于表示使用什么样的Error Correction Level， 3个bits表示使用什么样的Mask
•   10个纠错bits。主要通过BCH Code来计算

### 2.去掩码

一般二维码不能直接读取,他们一般是经过了掩码加工的.

因为未经掩码处理的二维码可能会有大量连续的白块,或者连续的黑块,不利于机器识别.(寻像方块更容易辨别)

比如下面一个例子

![img](data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAI0AAACHCAIAAACkp02UAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAB8UlEQVR4nO3d226CQBRAUWn6/79sX423oiDMlrVea6q4c2TiEJnO5/OJ4f3s/QKYRacGnRp0atCpQacGnRp0atCpQacGnRp0atCpQacGnRp+X3r0NE0feh2PPN8eW/56rv7/xgc4f/PPPDXo1KBTg04NOjW8tt67te7lStuvJ/+14gEuOTrz1KBTg04NS89PV974CA5dkLvj0ZmnBp0adGrQqUGnBp0adGrQqUGnBp0adGrQqUGnBp0adGrQqWHlfcKNN/2+++kumacGnRp0alh6ftr4ysjbp7s8Zzz/65wHzHnGXZinBp0adGrQqUGnhil02fCRmacGnRp0atCpYeV9jYXe+F7nIMxTg04NOjXo1PDa9xGDbMZ8jflv/ljrvdPeP4g3LJ97DTo16NQw3PnJCeku89SgU4NODTo16NQw3HrP9xF3macGnRp0atCpYbh1hIXDXWNdt+x6o0d87jXo1KBTg04NY60jeMQ8NejUoFODTg3fdj/qhdtXy39n50PMU4NODTo16NSgU4P7UTeYpwadGnRqcD/qBvPUoFODTg06NejUoFODTg06NejUoFODTg06NejUoFODTg06NbTvR30c5qlBpwadGmL3oz4s89SgU4NODTo16NTg91gazFODTg06NejUoFODTg06NfwB3mZeGDIKzlYAAAAASUVORK5CYII=)

加工后:

![img](data:image/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAAI8AAACCCAIAAADwnwwaAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADDUlEQVR4nO2dS47iMBQAO6MREksOwgFYcwH23InTcQlOgMSGXiC1UCIl8T+VVO2GZoyTUp5fnhO7e7/fPwLhX+sOSADaIqEtEtoioS0S2iKhLRL/53+167py/RgyfiM47Ezv+5NfmGywKHG3uV5bJLRFQlsktEUiIMug08sjiOXsJFsZDzg0JZv86ckUMf0n5pMr4TQSktAWCW2RyJZlVB4YQksVibQd9v7YSk5IzACHGAlJaIuEtkhoiwQ1yxiWKsYLS5VzyEJ4bZHQFgltkdAWCWqWMVkKqvxUTB2otiIgJoE9jIQktEVCWyS0RSJbltF8DC/ageZH98Fri4S2SGiLRNK4VbNeEFq8SJ8xWWA1BFzL+D7dCzyzJTASktAWCW2R0BaJbiF36aEs5FHnynhtkdAWCW2R0BaJpdQyKjxLu/W3xBuS/hI4ESMhCW2R0BaJpBXvxucs8r6TUzoNKXp0uTq/lCwje4a2yjTESEhCWyS0RUJbJErNb6WP6tkXLU5MQfO2H4fXFgltkdAWCW2RyFZ5Wj6l57cqzJ+VqjwN+zqZZQUdXunC0jILV0ZCEtoioS0SBVdBDh1m2y5ZV7T9NcxvFX0Ba5VpiJGQhLZIaIuEtkj4/lab9uPw2iKhLRLaIqEtEtS9xBMpUWcCz281B5rrjmMkJKEtEtoisdpxq0f9BytKJB2r3Us8sYWItSYrrJdoJCShLRLaIqEtEqvd+T20thT6KPHkNqPj7ccdu9cWCW2R0BYJbZHYSuXpx/UJG1LhXC/qfbIPRkIS2iKhLRLUcSt9YEjcjbzJG0FUWxFU3q+rxM8ZCUloi4S2SGxo3Mo7VjVZ74S6l3jobFbiSjhz3Iy0kOvkGAlJaIuEtkhsKMtoyO12ezwe35+cTqfL5RLc0Hs22fqeo2PZ/3v2g/1u7XA49P56vV7nn/k/jIQ12O/3vU/ibgC0RUJbJLRVg+fz2fskbmg0J6zB+Xy+3++73e7zz9frdTweI9qhrhy0TYyEJLRFQlsktEVCWyS0RUJbJLRFQlskfgFYAtmOmtuAywAAAABJRU5ErkJggg==)

使用掩码加工后就可以打乱黑块和白块的分布,使得二维码更容易识别.

一共有以下8种掩码图案,编码的时候,算法会计算那种掩码产生的分布更合适而进行选择.

![二维码的解码-掩码](assets/二维码的解码-掩码-593567aab194a4642073a8a5b03b5c05.png)



在1步骤中,我们从格式信息中找到了使用的mask的编号.

然后我们只要用对应的mask对数据区域进行异或运算,非数据区域不会发生变动.

去完掩码后的二维码你用扫一扫去扫,会发现扫不出来了.

### 3.确定编码模式和大小

二维码里面,黑色是1,白色是0

二维码的读取从右下角开始(没有寻像图形的那个角),z字型往上读取.

开头的4个空格是编码模式,之后的8个位的空格是编码长度,

编码长度的位数和二维码的大小有关,二维码大到一定尺寸时编码长度也会不同,比如说变成16位...

![img](assets/二维码的解码-长度和编码模式-ef6ffcc0fb00db61f52c272add337112.jpg)

总共有以下几种模式.

![img](assets/二维码的解码-编码模式-fa6362f37e51ffb554baba8244c9f902.png)



不同模式的容量也不一样

![img](assets/二维码的解码-不同编码模式的容量-3cf781537691f22fcd21932bbd0bfdf6.png)

### 4.开始解码

总之按照下面这张图,遇到中间的小方块,和格式信息之类非数据的区域就跳过去.

![img](assets/二维码的解码-解码路线-5b016ccd76eade7b0c38dcab2a1f6f88.png)

根据上一步确定的不同的编码模式,进行解析.

### 5.纠错码

二维码中总共有4种级别(Error Correction Code Level)的纠错码

| 错误修正容量 |                   |
| ------------ | ----------------- |
| L水平        | 7%的字码可被修正  |
| M水平        | 15%的字码可被修正 |
| Q水平        | 25%的字码可被修正 |
| H水平        | 30%的字码可被修正 |

二维码的纠错码使用的是里德-所罗门纠错算法

也就是rar压缩添加冗余校验信息貌似就是这个算法.

读取数据的时候,可以用这些冗余码进行校验.

所以说,二维码即使有部分污损也有可能正确进行读取.



另外你用手挡住中间部分可能也不影响读取,因为读取顺序是从右下角开始的,如果数据量不是很多,可能在右边就能读取完了....






---
readme: "我是一个示例用md文件，供SSG使用，其他内容待补充"
usage: "大部分文章可以使用markdown写作，自动生成html；小部分文章可以直接创作html获得更多定制能力"
---
# NumPy入门教程

## NumPy简介

NumPy（Numerical
Python）是一个开源Python库，几乎在科学和工程的各个领域都有使用，是Python中处理数字数据的通用标准。NumPy功能强大，支持对数组进行快速操作的各种例程，包括数学、逻辑、排序、选择、I/O、甚至离散傅立叶变换、基本统计运算、随机模拟等等。NumPy上手简单、用户群体广泛，从最初的程序员到从事最先进科学和工业研发的经验丰富的研究人员都可以使用NumPy。即使你是零基础小白，也可以很快地掌握一些很实用、超方便的NumPy基础功能。

[本推送所有内容来源为NumPy官方文档ver1.26](https://numpy.org/doc/1.26/index.html)

推送只覆盖了NumPy功能的冰山一角，官方手册中还有好多好多的宝藏，非常鼓励大家去阅读学习哦。

偷偷告诉你：学工具的最好方法就是看官方文档(Documentation)或手册(Manual)或源码(Source Code)啦~

## NumPy安装

我们推荐你使用Anaconda进行Python的包管理和虚拟环境的配置，详见<a href=>这份教程</a>。

如果你有conda，那么你可以通过以下命令安装NumPy：
```conda install numpy``

如果你没有conda，那么你也可以通过`pip`安装NumPy：
```pip install numpy```

你可以通过这样的方式检查你是否安装了NumPy：

- 先进入命令行界面

    你可以通过各种图形化界面进入，例如右击`WIN`图标，选择终端；或通过`WIN+R`，再输入`cmd`进入；或者在Vscode中打开终端等等。

- 进入Python交互式环境

    在终端中输入`python`进入Python交互式环境。
    像这样

    ``` shell-session
    (base) C:\Users\user>python
    Python 3.11.3 (tags/v3.11.3:f3909b8, Apr  4 2023, 23:49:59) [MSC v.1934 64 bit (AMD64)] on win32
    Type "help", "copyright", "credits" or "license" for more information.
    >>>
    ```

- 检查NumPy是否安装

    在Python交互式环境中输入```import numpy```，如果没有报错，那么恭喜你，你已经成功安装了NumPy。像这样

    ``` py
    >>> import numpy
    >>>
    ```

    就说明你安装成功了。

## 生成`ndarray`

`numpy.ndarray`是`numpy`中最基础最普遍的类。

`ndarray`含义为N dimension array，`numpy`用这个类用于表示vector（1D）和matrix（2D），以及更高维度的tensor。

不同于`python`的`List`类，`ndarray`这一数据结构要求每一个元素的类型相同，计算机表示这一属性太赞了，不仅存储更为高效，而且运算操作也更方便，因此对`ndarray`计算的速度超级快啦。

源代码是这样的：

``` py
np.array()# 将自定义的list转为ndarray
np.arange()   # 等差数列，给定公差
np.linspace() # 等差数列，给定项数
np.zeros()# 全0
np.ones() # 全1
np.random.random()# 全随机数
np.eye()  # 单位矩阵
```

常用的生成ndarray的方法包括但不限于：

``` py
np.array()# 将自定义的list转为ndarray
np.arange()   # 等差数列，给定公差
np.linspace() # 等差数列，给定项数
np.zeros()# 全0
np.ones() # 全1
np.random.randn()# 全随机数
np.eye()  # 单位矩阵
```

下面是一些例子：

``` py
(my_env) PS C:\Users\path> python
Python 3.9.18 (main, sep 11 2023), [MSC v. 1916 64 bit (AMD64)] on win32
type "help" ,"copyright "credits" or "license" for more information.
>>> import numpy as np
>>> np.array([1,2,3,4,5])
ar>ray([1, 2, 3, 4, 5])
>>> np.arange(0,15,1)
ar>ray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14])
>>> np.linspace(1,9,9)
ar>ray([1., 2., 3., 4., 5., 6., 7., 8., 9.])
>>> np.zeros(5)
ar>ray([0., 0., 0., 0., 0.])
>>> np.random.randn(5)
array([ -0.6616539, 1.51110686, -0.69030819, -1.52725126,  0.45914958])
```

## ndarray的属性

`ndarray`的内置属性包括但不限于：

``` py
array.shape # 形状
array.size  # 大小
array.ndim  # 维度
array.dtype # 元素数据类型
```

我们可以通过打印这些属性来查看。

下面是一些例子：

``` py
(my_env) PS C:\Users\path> python
Python 3.9.18 (main, sep 11 2023), [MSC v. 1916 64 bit (AMD64)] on win32
type "help" ,"copyright", "credits" or "license" for more information.
>>> import numpy as np
>>> a = np.array([1,2,3],[4,5,6],[7,8,9])
>>> a.shape
(3, 3)
>>> a.size
9
>>> a.ndim
2
>>> a.dtype
dtype('int32')
>>> type(a)
<class 'numpy.ndarray'>
```

## 基本运算

常用的ndarray的数学操作（element-wise）包括但不限于：

``` py
np.sin()  # 三角操作
np.exp()  # e指数
np.min()  # 最小值
np.max()  # 最大值
np.mean() # 均值
np.sqrt() # 算数平方根
array**n  # n次方
```

下面是一些例子：

``` py
(my_env) PS C:\Users\path> python
Python 3.9.18 (main, sep 11 2023), [MSC v. 1916 64 bit (AMD64)] on win32
type "help" ,"copyright", "credits" or "license" for more information.
>>> import numpy as np
>>> a = np.array([1,2,3,4,5])
>>> np.sin(a)
array([ 0.84147098,  0.90929743,  0.14112001, -0.7568025 , -0.95892427])
>>> np.exp(a)
array([  2.71828183,   7.3890561 ,  20.08553692,  54.59815003, 148.4131591 ])
>>> np.min(a)
1
>>> np.max(a)
5
>>> np.mean(a)
3.0
>>> np.sqrt(a)
array([1., 1.41421356, 1.73205081, 2., 2.23606798])
>>> a**2
array([ 1,  4,  9, 16, 25])
>>> a**3
array([  1,   8,  27,  64, 125])
```

事实上，对于`ndarray`的操作就等价于对其中每一个元素进行操作。这样的好处是，不仅代码简洁，而且运算速度也更快。

## 矩阵操作

常用的ndarray矩阵（以及张量）的操作包括但不限于：

``` py
array.flatten() # 展平成一维
array.flatten() # 展平成一维
array.reshape()  # 改变形状
array.T   # 转置
array1 @ array2# 矩阵相乘
np.dot(array1,array2) # 矩阵相乘，与@相同
array1.dot(array2) # 矩阵相乘，与@相同
array1 * array2# 各位置元素(element-wise)乘法
```

下面是一些例子：

``` py
(my_env) PS C:\Users\path> python
Python 3.9.18 (main, sep 11 2023), [MSC v. 1916 64 bit (AMD64)] on win32
type "help" ,"copyright", "credits" or "license" for more information.
>>> import numpy as np
>>> np.eye(3)
array([[1., 0., 0.],
   [0., 1., 0.],
   [0., 0., 1.]])
>>> np.eye(3, 5)
array([[1., 0., 0., 0., 0.],
   [0., 1., 0., 0., 0.],
   [0., 0., 1., 0., 0.]])
>>> a = np.eye(3, 5)
>>> a.flatten()
array([1., 0., 0., 0., 0., 0., 1., 0., 0., 0., 0., 1., 0., 0.])
>>> a.reshape(5,3)
array([[1., 0., 0.],
   [0., 1., 0.],
   [0., 0., 1.],
   [0., 0., 0.],
   [0., 0., 0.]])
>>> b = np.array([[1,1,4],[5,1,4],[2,3,3]])
>>> a.T @ b
array([[1., 1., 4.],
   [5., 1., 4.],
   [2., 3., 3.],
   [0., 0., 0.],
   [0., 0., 0.]])
>>> b.dot(a)
array([[1., 1., 4., 0., 0.],
   [5., 1., 4., 0., 0.],
   [2., 3., 3., 0., 0.]])
>>> c = np.eye(3)
>>> b * c
array([[1., 0., 0.],
   [0., 1., 0.],
   [0., 0., 3.]])
```

## 索引切片拼接

`ndarray`的索引方式与`python`的`List`类似，但是更加强大。

``` py
array[i] # 索引array中的第i个元素
array[-1]# 索引array的最后一个元素
array[i:j]   # 第i至第j-1个元素组成的新ndarray
np.vstack((a1,a2))   # vertical stack
np.hstack((a1,a2))   # horizontal stack
# and more ...
```

下面是一些例子：

``` py
(my_env) PS C:\Users\path> python
Python 3.9.18 (main, sep 11 2023), [MSC v. 1916 64 bit (AMD64)] on win32
type "help" ,"copyright", "credits" or "license" for more information.
>>> import numpy as np
>>> a = np.array([1,2,3,4,5])
>>> a[-1]
5
>>> a[1:3]
array([2, 3])
>>> a[:-1]
array([1, 2, 3, 4])
>>> a1 = np.array([[1,1],[2,2]])
>>> a2 = np.array([[3,3],[4,4]])
>>> np.vstack((a1,a2))
array([[1, 1],
   [2, 2],
   [3, 3],
   [4, 4]])
>>> np.hstack((a1,a2))
array([[1, 1, 3, 3],
   [2, 2, 4, 4]])
```

## 文件读写

`numpy`可以将`ndarray`存为`.npy`文件，以及从`.npy`文件中load `ndarray`。

``` py
np.save('array.npy', array)
array = np.load('array.npy')
```

同时，`numpy`也支持`.txt`和`.csv`文件的读写，通过`savetxt`和`loadtxt`函数

``` py
np.savetxt('array.txt',array)
array = np.loadtxt('array.txt')
```

## 总结

今天小编为大家带来的NumPy指南到此为止啦，其实今天只介绍了很少一部分功能，鼓励大家读文档自行学习。

最后祝大家期中/期末/学业/科研/生活顺利啦~(๑•̀ㅂ•́)و✧

## 参考文献

[1] [NumPy documentation — NumPy v1.26 Manual](https://numpy.org/doc/1.26/index.html)

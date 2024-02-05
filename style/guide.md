# 未央书院科协网站样式指南

::: {role="main"}
样式指南是一个网站的设计规范。其好处有：

- 为直接创作html，或者从markdown生成html提供参考
- 使网站风格更统一
- 方便测试对文章样式的改动

希望未来能从markdown文件直接生成此样式指南，方便改动与内部链接、导览生成。

需要增加的内容：

- 脚注，最好点开来会在文本下显示内容
- 边上的注解
- 更多的图片位置，比如内嵌的小图
- 更好看的列表

## 文件安排

每篇文章都要使用的样式存放在`style.css`文件中。

仅此文章使用的样式直接写在head中，或者储存在元素的style属性中。这样的属性应该尽可能少。

## 颜色参考

大部分文章的内容应该由这些颜色组成。

::: swatches
::: {.swatch style="background-color: #0086a9; color: #f4f4f4;"}
未央蓝
:::

::: {.swatch style="background-color: #333; color:#f4f4f4;"}
正文黑
:::

::: {.swatch style="background-color: #f4f4f4; "}
代码浅灰
:::

::: {.swatch style="background-color: #666; color:#f4f4f4;"}
附注灰
:::
:::

## 文字样式

### 标题与段落

::: box

# 第一级标题

NumPy（Numerical
Python）是一个开源Python库，几乎在科学和工程的各个领域都有使用，是Python中处理数字数据的通用标准。NumPy功能强大，支持对数组进行快速操作的各种例程，包括数学、逻辑、排序、选择、I/O、甚至离散傅立叶变换、基本统计运算、随机模拟等等。

## 第二级标题

NumPy（Numerical
Python）是一个开源Python库，几乎在科学和工程的各个领域都有使用，是Python中处理数字数据的通用标准。NumPy功能强大，支持对数组进行快速操作的各种例程，包括数学、逻辑、排序、选择、I/O、甚至离散傅立叶变换、基本统计运算、随机模拟等等。

### 第三级标题

NumPy（Numerical
Python）是一个开源Python库，几乎在科学和工程的各个领域都有使用，是Python中处理数字数据的通用标准。NumPy功能强大，支持对数组进行快速操作的各种例程，包括数学、逻辑、排序、选择、I/O、甚至离散傅立叶变换、基本统计运算、随机模拟等等。

#### 第四级标题

NumPy（Numerical
Python）是一个开源Python库，几乎在科学和工程的各个领域都有使用，是Python中处理数字数据的通用标准。NumPy功能强大，支持对数组进行快速操作的各种例程，包括数学、逻辑、排序、选择、I/O、甚至离散傅立叶变换、基本统计运算、随机模拟等等。
:::

### 代码

内联代码如`style.css`。代码块如：

``` styled-code
conda install numpy      
```

如上所示。

### 链接

这是标准外链：[NumPy官方文档ver1.26](https://numpy.org/doc/1.26/index.html)

### 引用

这是块状引用：

> 学工具的最好方法就是看官方文档(Documentation)或手册(Manual)或源码(Source Code)啦\~

如上所示。

## 多媒体内容

### 图片

这是一张大图片。

![学术部LaTeX讲座中教学的场景](../material/latex/teach.jpg)

如上所示。
:::

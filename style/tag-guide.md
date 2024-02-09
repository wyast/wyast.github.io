---
title: 一篇文章的例子：如何使用不同的html tag？
author: 黄晨轩，
date: 2024年2月9日
pic-src: https://placekitten.com/960/480
---
<section>

## 引入

html由很多元素组成，每一个元素都有一个tag，描述这个元素起什么作用。比如，`h1`包裹的内容表示大标题，`p`表示段落，然后，额……

等等还有哪些来着？

<aside>这个引入真是有一点点生硬，但反正是示例文章，你也不能拿我怎么办🥲</aside>

好吧，把所有的tag记全是一件不大可能的事情。但是写文章需要的tag本身也没那么多！只要你把文章不同的部分用合适的tag进行标记，在**我们的样式**加持下，你只需要自然地描述每一段的内容，不需要花其他力气就能排版出很漂亮的文章！

###### 值得注意的是

这篇文章的部分效果与目前的样式文件紧密挂钩，所以以下的建议并不适用于所有未来的样式文件。到时候再改吧！

</section>
<section>

## 基本

##### 先从标题开始吧。

`h1`-`h6`是六级不同的标题，但是一般人不会写这么深的标题。目前的主题把`h1`用作文章大标题，`h2`-`h3`用作标数字的小标题，`h4`-`h5`用作不标数字的小标题，`h6`用来作为段落修饰（它会把后面的一段文章吞到它后边）。前边你看到的这个小小标题就是一个`h5`元素。这似乎让元素的语义发生了微妙的变化，但是我们不大关心让机器看懂我们的文章，所以无所谓啦……

`p`指的是段落，`div`、`span`指的分别是内部、外部的一点点东西，你应该会用。然后**粗体使用`strong`**，*斜体使用`em`*。

> 大块大块的引用，用`blockquote`
>
> 使用方法，和你想象中的
>
> 应该也没有什么大区别。

- 列表
- 亦如是
- 用`ul`与`ol`

你也可以写代码。内联代码就使用`code`，一段代码使用<span data-tooltip="这很重要！">`pre`套`code`</span>。

```language-c
main(int a){
  println("hello world")
}
```

<aside>现在代码显示还有一点点问题。</aside>

</section>
<section>

## 花哨

在不同tag的帮助下，一个文章里的内容能够**很花哨**。

### 地方

使用`cite`可以进行引用。<cite>[信息来自classless.de](https://classless.de)</cite>，用这种张扬的形式显示。

同时，只要加上data-tooltip，就可以手动给<span data-tooltip="但这里的内容不能使用html进行修饰……">任何东西</span>加上炫酷的浮动效果！详见源代码。

<aside>
使用`aside`把内容放到旁边。应该已经见过这个了。
</aside>

### 图片

每张图片都会被自动标号。只要在一个`figure`里面，放入一个`img`元素，一个`figcaption`元素……

![就获得了一个有标记的图片！](https://placekitten.com/480/320)

如果你想把两张图片放到一起，只要把`figure`进行轻松嵌套……

<figure>
![左边一张图片](https://placekitten.com/240/320)

![右边一张图片](https://placekitten.com/420/320)
<figcaption>就完成了一张包含两个图片的图片！</figcaption>
</figure>

<aside>
![img](https://placekitten.com/120/120)旁边也可以放图片！
</aside>

### 更多信息

更多内容，请参照[classless.de](https://classless.de)，里面有详细的介绍。

</section>

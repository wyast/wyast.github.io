import numpy as np
import matplotlib.pyplot as plt
from matplotlib.widgets import Slider
# 将输出结果保存到浏览器使用
import io
import base64
from js import document

# 泰勒级数函数
def taylor_sin_corrected(x, n):
    sin_approx = 0
    for i in range(n):
        coeff = (-1)**i
        num = x**(2*i + 1)
        denom = float(np.math.factorial(2*i + 1))
        sin_approx += (coeff) * (num / denom)
    return sin_approx

# 创建初始图形
x = np.linspace(-8*np.pi, 8*np.pi, 1000)
y_sin = np.sin(x)
y_taylor = taylor_sin_corrected(x, 1)

fig, ax = plt.subplots()
plt.subplots_adjust(bottom=0.25)
l, = plt.plot(x, y_taylor, label='Taylor Approximation')
plt.plot(x, y_sin, label='True Sine', linestyle='--')
plt.legend(loc='upper right')
plt.ylim(-2, 2)

# 将图片输出，供浏览器使用
def show():
  buf = io.BytesIO()
  plt.savefig(buf, format='png')
  buf.seek(0)
  img_str = 'data:image/png;base64,' + base64.b64encode(buf.read()).decode('UTF-8')
  return img_str

# 更新函数
def update(order):
  l.set_ydata(taylor_sin_corrected(x, int(order)))
  return show()
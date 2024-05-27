import numpy as np
import matplotlib.pyplot as plt
from matplotlib.widgets import Slider

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

# 创建滑动条
axslider = plt.axes([0.25, 0.1, 0.65, 0.03])
slider = Slider(axslider, 'Order', 1, 30, valinit=1, valstep=1)

# 更新函数
def update(val):
    order = slider.val
    l.set_ydata(taylor_sin_corrected(x, int(order)))
    fig.canvas.draw_idle()

slider.on_changed(update)

plt.show()
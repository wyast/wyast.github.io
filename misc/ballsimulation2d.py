import numpy as np
import matplotlib.pyplot as plt
import matplotlib.animation as animation
import sympy as sp


# 希望num_particles，reflect_fac（应为(-1,0)的数）以及粒子的位置、速度、加速度可以让用户通过网页输入，不行就不强求


# 粒子类
class Particle:
    def __init__(self, position, velocity, acceleration):
        self.position = position
        self.velocity = velocity
        self.acceleration = acceleration

interval = 0.01
num_particles = 20
reflect_fac=-1

# 这里np.zeros(2)是粒子位置，np.random.rand(2) * 20是粒子速度，np.array([0, -10])是粒子加速度
particles = [Particle(np.zeros(2), np.random.rand(2) * 20, np.array([0, -10])) for _ in range(num_particles)]

# 基于householder矩阵的反射函数
def reflect(v, fun, fun_sympy, p, fac):
    # Calculate normal vector
    x = sp.symbols('x')
    f_prime = sp.diff(fun_sympy, x)
    fun_diff = f_prime.subs(x, p)
    n = np.array([-fun_diff, 1])
    n = np.array([-fun_diff, 1], dtype=float)
    n = n / np.linalg.norm(n)
    # Householder matrix
    H = np.eye(2) - 2 * np.outer(n, n)
    # Reflect velocity
    v1 = np.dot(H, v)
    return v1 * abs(fac)

# 定义边界
boundX = [-np.pi, np.pi]
boundY = 0

x = sp.symbols('x')
fun_sympy = 3 + 0.5 * sp.cos(2*x)
fun = sp.lambdify(x, fun_sympy, "numpy")

y = fun(np.linspace(boundX[0], boundX[1], 1000))

def update(frame):
    for particle in particles:
        particle.position += particle.velocity * interval
        if particle.position[1] >= fun(particle.position[0]):
            particle.velocity = reflect(particle.velocity, fun, fun_sympy, particle.position[0], reflect_fac)
        if particle.position[0] <= boundX[0] or particle.position[0] >= boundX[1]:
            particle.velocity[0] = -particle.velocity[0]
        if particle.position[1] <= boundY:
            particle.velocity[1] = -particle.velocity[1]

        particle.velocity += particle.acceleration * interval
        particle.position = np.clip(particle.position, [boundX[0], boundY], [boundX[1], fun(particle.position[0])])       
    ax.clear()
    for particle in particles:
        ax.scatter(particle.position[0], particle.position[1], color='r', s= 20) # 100 * (1 - particle.position[1] / 6))
    ax.plot(np.linspace(boundX[0], boundX[1], 1000), y, color='gray')
    ax.plot([boundX[0], boundX[0]], [0, 3.5], color='gray')
    ax.plot([boundX[1], boundX[1]], [0, 3.5], color='gray')
    ax.set_xlim(-4, 4)
    ax.set_ylim(0, 4)  
    

fig, ax = plt.subplots()
ani = animation.FuncAnimation(fig, update, frames=1000, interval=50)
plt.show()
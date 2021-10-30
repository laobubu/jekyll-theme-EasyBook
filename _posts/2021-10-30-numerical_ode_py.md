---
layout: post
title:  "Numerical Methods for Ordinary Differential Equations(ODEs)"
date:   2021-10-30 03:31
categories: Numerical method for ODEs Python
permalink: /archivers/MathsPy
---
## Introduction

## 1. Euler Method
### 1.1 Theory 
Let <img src="https://latex.codecogs.com/svg.latex?\normalsize&space;t_k"/> be a partition of <img src="https://latex.codecogs.com/svg.latex?\normalsize&space;[a,b]"/> such that <img src="https://latex.codecogs.com/svg.latex?\normalsize&space;a=t_0<t_1<\cdots<t_{N-1}<t_{N}=b"/> and <img src="https://latex.codecogs.com/svg.latex?\normalsize;H"/> 
be the constant length of the <img src="https://latex.codecogs.com/svg.latex?\normalsize&space;k"/>-th subinterval 
<img src="https://latex.codecogs.com/svg.latex?\normalsize&space;H = t_k - t_{k-1}"/>. Let us consider the initial value problem.

<img src="https://latex.codecogs.com/svg.latex?\Large&space;\begin{equation}
  \begin{cases}
    y' = F(y, t),      & \quad \text{on } [a, b]\\\\
    y(a) = c,
  \end{cases}
\end{equation}"/>

We can compute <img src="https://latex.codecogs.com/svg.latex?\normalsize&space;y_{k+1}"/> using the iterative equation.<b>
<img src="https://latex.codecogs.com/svg.latex?\normalsize&space;y_{k+1} = y_k + HF(y_k, t_k)"/>

And this iterative equation is called the Explict euler formula.

### 1.2 Implementation
  Now let us see the implementation of explict euler formula using python.
 ```python
  """
It takes partition boundaries-"a,b", the differential equation-"F", initial values-'c', and the step size-'h'
as argument and returns the numerical solution.
"""
def euler_explict(a, b, F, c, h):
    N = int((b-a)/h + 1)
    t = np.linspace(a, b, N)
    y = np.zeros((len(t), len(c0)))
    y[0] = c
    for k in range(N):
        y[k+1] = y[k] + h*F(y[k], t[k])
    return y               
```
### Example
  
 1. Write code to solve the following system of ordinary differential equations

<img src="https://latex.codecogs.com/svg.latex?\Large&space;\begin{cases}
\dfrac{dx_1}{dt}& = & -\dfrac{1}{2}x_1\\\\
\dfrac{dx_2}{dt}& = & \dfrac{1}{2}x_1-\dfrac{1}{4}x_2\\\\
\dfrac{dx_3}{dt}& = & \dfrac{1}{4}x_2-\dfrac{1}{6}x_3
\end{cases}, \text{ on } [0,4]"/>


Subject to the initial conditions <img src="https://latex.codecogs.com/svg.latex?\normalsize&space; x_1(0) = 1, x_2(0) = 1, x_3(0) = 1
"/>

2. The exact solution of the above system of ODEs is given by

<img src="https://latex.codecogs.com/svg.latex?\Large&space;\begin{cases}
x_1(t)& = & e^{-t/2}\\
x_2(t)& = & -2e^{-t/2}+3e^{-t/4}\\
x_3(t)& = & \dfrac{3}{2}e^{-t/2} - 9e^{-t/4} + \dfrac{17}{2}e^{-t/6}
\end{cases}"/>

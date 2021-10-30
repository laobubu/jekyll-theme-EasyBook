---
layout: post
title:  "Numerical Methods for Ordinary Differential Equations(ODEs)"
date:   2021-10-30 03:31
categories: Numerical method for ODEs Python
permalink: /archivers/MathsPy
---
## Introduction

## 1. Euler Method
### Theory 
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

## Implementation
  Now let us see the implementation of explict euler formula using python.
 ```python
  """
It takes the differential equation-"F", initial values-'c', and the step size-'h'
as argument and returns numerical solution.
"""
def euler_explict(F, c, h):
    t = 
    y = np.zeros((len(t), len(c0)))
    y[0] = c
    for k in range(len(t)-1):
        y[k+1] = y[k] + h*F(y[k], t[k])
    return y               
```

---
layout: post
title:  "Mathmatics"
date:   2021-10-30 03:31
categories: Numerical method for ODEs Python
permalink: /archivers/MathsPy
---
## Numerical Methods for Ordinary Differential Equations(ODEs)

Here i will show you the implementation of some of the numerical methods to solve Ordinary Differential Equations using python. And solve one problem, then plot the exact solution versus numerical method and the errors.

## 1. Euler Method
### Theory: 
Let <img src="https://latex.codecogs.com/svg.latex?\normalsize&space;t_k"/> be a partition of <img src="https://latex.codecogs.com/svg.latex?\normalsize&space;[a,b]"/> such that <img src="https://latex.codecogs.com/svg.latex?\normalsize&space;a=t_0<t_1<\cdots<t_{N-1}<t_{N}=b"/> and <img src="https://latex.codecogs.com/svg.latex?\normalsize;H"/> 
be the constant length of the <img src="https://latex.codecogs.com/svg.latex?\normalsize&space;k"/>-th subinterval <img src="https://latex.codecogs.com/svg.latex\normalsize&space;H = t_k - t_{k-1}"/>
. Let us consider the initial value problem.

<img src="https://latex.codecogs.com/svg.latex?\Large&space;\begin{equation}
  \begin{cases}
    y' = F(y, t),      & \quad \text{on } [a, b]\\\\
    y(a) = c,
  \end{cases}
\end{equation}"/>

We can compute <img src="https://latex.codecogs.com/svg.latex?\normalsize&space;y_{k+1}"/> using the iterative equation.<b>
<img src="https://latex.codecogs.com/svg.latex?\normalsize&space;y_{k+1} = y_k + HF(y_k, t_k)"/>

And this iterative equation is called the Explict euler formula.
